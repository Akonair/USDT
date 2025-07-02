
function openPrivate() {
  createOrder('THBScanQRCode');
}

function openCorporate() {
  const name = document.getElementById('cardName').value;
  const number = document.getElementById('cardNumber').value;
  if (!name || !number) return alert("请填写卡号和姓名");
  createOrder('TPScanQRCode', name, number);
}

function createOrder(channelCode, name='', number='') {
  const usd = parseFloat(document.getElementById("usdAmount").value || 0);
  const thb = usd * 36.6;
  const data = {
    uid: 5588368,
    bankCode: channelCode === 'TPScanQRCode' ? '003' : 'AllBanksSupported',
    amount: Math.floor(thb).toString(),
    currencyCoinName: 'THB',
    channelCode,
    paymentMethod: 3,
    merchantOrderNo: 'THBceshi-' + Date.now(),
  };
  if (channelCode === 'TPScanQRCode') {
    data.paymentName = name;
    data.paymentCardNumber = number;
  }
  const query = Object.entries(data).sort().map(([k, v]) => `${k}=${v}`).join('&');
  const key = 'FvDHIIaHOzcItJ199qw5Xv6e1izUrAlc';
  const sign = md5(query + '&key=' + key);
  data.signature = sign;

  fetch("https://api.exlinked.global/coin/pay/recharge/order/create", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      document.getElementById("qrcodeImg").src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${res.data.qrcode}`;
      document.getElementById("bankInfo").textContent = `银行: ${res.data.bankId}, 姓名: ${res.data.bankOwner}, 卡号: ${res.data.accountNumber}`;
      document.getElementById("qrModal").style.display = "block";
      startCountdown(channelCode === 'THBScanQRCode' ? 7 : 20);
    } else {
      alert(res.message || "创建失败");
    }
  });
}

function startCountdown(minutes) {
  let seconds = minutes * 60;
  const el = document.getElementById("countdown");
  const timer = setInterval(() => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    el.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
    if (--seconds < 0) clearInterval(timer);
  }, 1000);
}

function closeModal() {
  document.getElementById("qrModal").style.display = "none";
}
