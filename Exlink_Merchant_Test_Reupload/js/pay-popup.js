
function openPay() {
  const iframe = document.getElementById('paymentIframe');
  iframe.src = "pay/private.html";
  document.getElementById('payFrame').style.display = 'block';
}
