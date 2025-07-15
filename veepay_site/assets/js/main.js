
let lang = 'en';
function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  document.getElementById('hero-title').innerText = lang === 'en' ? "Veepay: More than Pay, it's We Pay" : "Veepay：不仅仅是支付，更是伙伴";
  document.getElementById('hero-sub').innerText = lang === 'en' ? "Not just payment, but partnership" : "不仅仅是支付，更是伙伴";
  document.getElementById('about-title').innerText = lang === 'en' ? "The backbone for global commerce" : "全球商务的中坚力量";
  document.getElementById('about-text').innerText = lang === 'en' ?
    "Veepay makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes." :
    "Veepay 让资金流动像数据流动一样轻松可编程。我们的团队遍布全球每一个角落，每年处理数千亿美金的交易，服务各类成长型企业。";
  document.getElementById('services-title').innerText = lang === 'en' ? "Our Services" : "我们的服务";
  document.getElementById('services-desc').innerText = lang === 'en' ?
    "Set up multiparty payments and payouts. Integrate payments into your platform or marketplace for end-to-end payments experiences." :
    "支持多方支付和分账。在您的平台或市场中无缝集成端到端支付体验。";
}
