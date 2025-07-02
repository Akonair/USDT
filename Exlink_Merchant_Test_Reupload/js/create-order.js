
async function createOrder() {
  const usd = parseFloat(document.getElementById('usdAmount').value);
  if (!usd || usd <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const orderId = "AKON" + timestamp;
  const amount = usd;
  const rawSign = orderId + amount + timestamp + "nGXrw271xkXiB9dn91rKv1LXgzyDHoqh";
  const sign = md5(rawSign);

  const payload = {
    merchant_order_id: orderId,
    amount: amount,
    currency: "USD",
    notify_url: "https://merchant.demo/notify",
    timestamp: timestamp,
    sign: sign
  };

  try {
    const response = await fetch("https://api.exlinkglobal.com/api/v1/deposit/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "FvDHIIaHOzcItJ199qw5Xv6e1izUrAlc"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (data.code === 200) {
      const iframe = document.getElementById("paymentIframe");
      iframe.src = "pay/private.html?qr=" + encodeURIComponent(data.data.qr_content) + "&exp=" + encodeURIComponent(data.data.expired_at);
      document.getElementById("payFrame").style.display = "block";
    } else {
      alert("Failed to create order: " + data.message);
    }
  } catch (e) {
    alert("Error connecting to API.");
  }
}

function md5(string) {
  return CryptoJS.MD5(string).toString();
}
