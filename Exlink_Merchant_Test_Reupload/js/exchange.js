
const rate = 33.21;
document.getElementById('usdAmount').addEventListener('input', function () {
  const usd = parseFloat(this.value);
  document.getElementById('thbAmount').innerText = isNaN(usd) ? '-' : Math.round(usd * rate);
});
