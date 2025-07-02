
function payPrivate() {
    const usd = parseFloat(document.getElementById('usdInput').value);
    const thb = (usd * 33.21).toFixed(2);
    document.getElementById('thbAmount').innerText = thb;

    // TODO: Send actual API request
    const qrUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=THB-' + thb;
    document.getElementById('qrImage').src = qrUrl;
    document.getElementById('qrTitle').innerText = '🔐 Private QR Code';
    document.getElementById('countdown').innerText = 'Time remaining: 7:00';
    document.getElementById('qrModal').classList.remove('hidden');
}

function payPublic() {
    const usd = parseFloat(document.getElementById('usdInput').value);
    const thb = (usd * 33.21).toFixed(2);
    document.getElementById('thbAmount').innerText = thb;

    // TODO: Send actual API request
    const qrUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=THB-' + thb;
    document.getElementById('qrImage').src = qrUrl;
    document.getElementById('qrTitle').innerText = '🏢 Corporate QR Code';
    document.getElementById('countdown').innerText = 'Time remaining: 20:00';
    document.getElementById('qrModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('qrModal').classList.add('hidden');
}

function setLang(lang) {
    if (lang === 'th') {
        document.querySelector('h1').innerText = 'การชำระเงิน ThaiQR';
        document.querySelector('label').innerText = 'จำนวนเงิน (USD):';
        document.getElementById('qrTitle').innerText = 'สแกน QR เพื่อชำระเงิน';
    } else {
        document.querySelector('h1').innerText = 'Exlink ThaiQR Payment';
        document.querySelector('label').innerText = 'Enter Amount (USD):';
        document.getElementById('qrTitle').innerText = 'Scan QR to Pay';
    }
}
