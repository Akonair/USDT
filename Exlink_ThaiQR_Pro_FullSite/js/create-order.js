
function createOrder(type) {
    const usdAmount = document.getElementById('usdAmount').value;
    if (!usdAmount || usdAmount <= 0) return alert('请输入有效金额');

    const payload = {
        uid: 5588368,
        amount: usdAmount,
        currencyCoinName: "THB",
        bankCode: type === 'private' ? "AllBanksSupported" : "003",
        channelCode: type === 'private' ? "THBScanQRCode" : "TPScanQRCode",
        paymentMethod: 3,
        merchantOrderNo: "THBceshi-" + Date.now(),
        paymentCardNumber: type === 'corporate' ? "1234567890" : undefined,
        paymentName: type === 'corporate' ? "Your Name" : undefined
    };

    const sortedKeys = Object.keys(payload).filter(k => payload[k] !== undefined).sort();
    const str = sortedKeys.map(k => k + '=' + payload[k]).join('&') + '&key=FvDHIIaHOzcItJ199qw5Xv6e1izUrAlc';
    payload.signature = md5(str);

    fetch('https://api.exlinked.global/coin/pay/recharge/order/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => {
        if (res.success) {
            showModal(res.data);
        } else {
            alert("订单创建失败：" + res.message);
        }
    });
}

function showModal(data) {
    const qrDiv = document.getElementById('qrcode');
    qrDiv.innerHTML = '';
    QRCode.toCanvas(data.qrcode, { width: 200 }, (err, canvas) => {
        if (!err) qrDiv.appendChild(canvas);
    });

    document.getElementById('bankInfo').textContent = `银行: ${data.bankId}, 户名: ${data.bankOwner}, 卡号: ${data.accountNumber}`;
    document.getElementById('modal').classList.remove('hidden');

    let seconds = 420;
    const countdownEl = document.getElementById('countdown');
    const interval = setInterval(() => {
        if (seconds <= 0) {
            countdownEl.textContent = '二维码已过期';
            clearInterval(interval);
        } else {
            let min = Math.floor(seconds / 60);
            let sec = seconds % 60;
            countdownEl.textContent = `剩余时间: ${min}:${sec < 10 ? '0' + sec : sec}`;
            seconds--;
        }
    }, 1000);

    // Polling example (simplified)
    const checkInterval = setInterval(() => {
        fetch(`https://api.exlinked.global/coin/pay/recharge/order/status?recordId=${data.recordId}`)
            .then(res => res.json())
            .then(status => {
                if (status.success && status.data?.paid) {
                    clearInterval(interval);
                    clearInterval(checkInterval);
                    alert("支付成功！");
                    closeModal();
                }
            });
    }, 5000);
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}
