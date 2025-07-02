
const translations = {
  en: {
    title: "Exlink ThaiQR Payment",
    amountLabel: "Amount (THB)",
    nameLabel: "Name",
    cardLabel: "Card Number",
    privateBtn: "Pay via Personal QR",
    publicBtn: "Pay via Company QR"
  },
  th: {
    title: "การชำระเงินผ่าน ThaiQR",
    amountLabel: "จำนวนเงิน (บาท)",
    nameLabel: "ชื่อบัญชี",
    cardLabel: "หมายเลขบัญชี",
    privateBtn: "พร้อมเพย์ ThaiQR (บัญชีบุคคลทั่วไป)",
    publicBtn: "พร้อมเพย์ ThaiQR (บัญชีบริษัท)"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  const t = translations[lang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("amountLabel").innerText = t.amountLabel;
  document.getElementById("nameLabel").innerText = t.nameLabel;
  document.getElementById("cardLabel").innerText = t.cardLabel;
  document.getElementById("privateBtn").innerText = t.privateBtn;
  document.getElementById("publicBtn").innerText = t.publicBtn;
  document.getElementById("publicFields").style.display = "block";
}
window.onload = () => {
  const lang = localStorage.getItem("lang") || "en";
  setLang(lang);
};
