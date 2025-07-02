
const ACCESS_KEY = "FvDHIIaHOzcItJ199qw5Xv6e1izUrAlc";
const API_URL = "https://api.exlinked.global/coin/pay/recharge/order/create";

// 签名算法
function generateSignature(params) {
  const keys = Object.keys(params).sort();
  const baseStr = keys.map(k => k + "=" + params[k]).join("&") + "&accessKey=" + ACCESS_KEY;
  return CryptoJS.MD5(baseStr).toString();
}

// 自动订单号
function generateOrderNo() {
  return "THBceshi-" + Date.now();
}

// 私户支付
function payPrivate() {
  const amount = document.getElementById("amount").value;
  if (!amount || isNaN(amount)) return alert("请输入有效金额");

  const data = {
    uid: 5588368,
    bankCode: "AllBanksSupported",
    amount: amount,
    currencyCoinName: "THB",
    channelCode: "THBScanQRCode",
    paymentMethod: 3,
    merchantOrderNo: generateOrderNo()
  };
  data.signature = generateSignature(data);

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(res => {
    if (res.data && res.data.qrCodeUrl) {
      const iframe = document.getElementById("paymentIframe");
      iframe.src = "pay/private.html?qr=" + encodeURIComponent(res.data.qrCodeUrl) + "&expires=420";
      document.getElementById("payFrame").style.display = "flex";
    } else {
      alert("下单失败：" + (res.message || "未知错误"));
    }
  }).catch(err => alert("请求异常: " + err));
}

// 公户支付
function payPublic() {
  const amount = document.getElementById("amount").value;
  const name = document.getElementById("paymentName").value;
  const card = document.getElementById("paymentCardNumber").value;
  if (!amount || isNaN(amount)) return alert("请输入有效金额");
  if (!name || !card) return alert("请填写姓名和卡号");

  const data = {
    uid: 5588368,
    bankCode: "003",
    amount: amount,
    currencyCoinName: "THB",
    channelCode: "TPScanQRCode",
    paymentMethod: 3,
    merchantOrderNo: generateOrderNo(),
    paymentCardNumber: card,
    paymentName: name
  };
  data.signature = generateSignature(data);

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(res => {
    if (res.data && res.data.qrCodeUrl) {
      const iframe = document.getElementById("paymentIframe");
      iframe.src = "pay/private.html?qr=" + encodeURIComponent(res.data.qrCodeUrl) + "&expires=1200";
      document.getElementById("payFrame").style.display = "flex";
    } else {
      alert("下单失败：" + (res.message || "未知错误"));
    }
  }).catch(err => alert("请求异常: " + err));
}
