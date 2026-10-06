/*
  Shared bilingual engine. Each design calls Site.init(render),
  where render(content, ctx) returns the page HTML for one language.
*/
(() => {
  const LANGS = ['en', 'fa'];
  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  function initialLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) return q;
    try {
      const s = localStorage.getItem('lang');
      if (LANGS.includes(s)) return s;
    } catch (e) {}
    return 'en';
  }

  function init(render) {
    const root = document.documentElement;
    const app = document.getElementById('app');
    const base = document.body.dataset.base || '';

    function apply(lang) {
      const c = SITE[lang];
      const other = lang === 'fa' ? 'en' : 'fa';
      root.lang = lang;
      root.dir = lang === 'fa' ? 'rtl' : 'ltr';
      document.title = `${c.name} — ${c.role}`;
      app.innerHTML = render(c, {
        lang, other, esc, rich,
        photo: base + SITE.photo,
        cv: base + SITE.cv,
        email: SITE.email,
        links: SITE.links.map((l) => ({ url: l.url, label: l[lang] })),
        pubs: SITE.publications,
        year: new Date().getFullYear().toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false }),
        langToggle: (cls = '') =>
          `<a class="${cls}" href="?lang=${other}" data-lang="${other}" lang="${other}" hreflang="${other}">${esc(c.ui.switchTo)}</a>`,
      });
      try { localStorage.setItem('lang', lang); } catch (e) {}
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    }

    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-lang]');
      if (!t) return;
      e.preventDefault();
      apply(t.dataset.lang);
    });

    apply(initialLang());
  }

  window.Site = { init, esc, rich };
})();
