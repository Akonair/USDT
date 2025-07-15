
let lang = 'en';
function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  if (lang === 'zh') {
    document.getElementById('hero-title').innerText = 'Veepay：不仅仅是支付，更是伙伴';
    document.getElementById('hero-sub').innerText = '多元、高效、专业的多币种支付解决方案。';
    document.getElementById('about-title').innerText = '关于 Veepay';
    document.getElementById('about-text').innerText = 'Veepay 致力于与客户携手创造价值，提供多元、高效、专业的全球支付解决方案。';
    document.getElementById('services-title').innerText = '我们的服务';
  } else {
    document.getElementById('hero-title').innerText = "Veepay: More than Pay, it's We Pay";
    document.getElementById('hero-sub').innerText = 'Your trusted partner for versatile, efficient, and expert multi-currency payment solutions.';
    document.getElementById('about-title').innerText = 'About Veepay';
    document.getElementById('about-text').innerText = 'Veepay is committed to working hand-in-hand with clients to create value together. We offer versatile, efficient, and expert payment solutions globally.';
    document.getElementById('services-title').innerText = 'Our Services';
  }
}
