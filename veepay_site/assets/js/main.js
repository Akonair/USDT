
let lang = 'zh';
function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  document.getElementById('hero-title').innerText = lang === 'en' ? "Veepay: Your Trusted Payment Partner" : "Veepay：值得信赖的支付伙伴";
  document.getElementById('hero-sub').innerText = lang === 'en' ? "Versatile, efficient, and expert multi-currency payment solutions" : "多元、高效、专业的多币种支付解决方案";
  document.getElementById('services-title').innerText = lang === 'en' ? "Our Services" : "我们的服务";
  document.getElementById('services-list').innerHTML = lang === 'en' ? `
    <li>Forex & Crypto Deposits</li>
    <li>Gaming & E-commerce Payments</li>
    <li>Cross-border Trade</li>
    <li>Local Wallets & Bank Cards</li>
  ` : `
    <li>外汇及数字资产平台入金</li>
    <li>游戏与电商收款</li>
    <li>跨境贸易支付</li>
    <li>本地钱包与银行卡支付解决方案</li>
  `;
}
