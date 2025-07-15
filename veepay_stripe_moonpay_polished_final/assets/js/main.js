
let lang = 'en';
function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  document.getElementById('hero-title').innerText = lang === 'en' ? "Veepay: More than Pay, it's We Pay" : "Veepay：不仅仅是支付，更是伙伴";
  document.getElementById('hero-sub').innerText = lang === 'en' ? "Not just payment, but partnership" : "不仅仅是支付，更是伙伴";
}
