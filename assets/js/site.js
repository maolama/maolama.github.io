/*
  Shared engine used by every design.
  - Language: EN (LTR) default, FA (RTL); remembered per visitor.
  - Theme: any hue + chroma -> full light & dark colour scheme (see base.css); palette panel included.
  - Routing: #/  #/about  #/work  #/journey  #/blog  #/contact
  - Components: focus cards, now list, research, projects, journey timeline, hobbies shelves,
    socials, CV buttons, floating toolbar, palette button.
  - Behaviours: ripple, scroll reveal, tabs, filter chips, copy-to-clipboard + snackbar, morphing shapes.

  A design calls:
    Site.init({ id, theme: {h, c}, shell, pages: {home, ...}, mount, after, onTheme, icons })
*/
(() => {
  const LANGS = ['en', 'fa'];
  const ROUTES = ['home', 'about', 'work', 'journey', 'blog', 'contact'];
  const PRESETS = [
    { h: 195, c: 0.11 }, { h: 275, c: 0.13 }, { h: 40, c: 0.13 }, { h: 150, c: 0.1 },
    { h: 350, c: 0.12 }, { h: 80, c: 0.12 }, { h: 260, c: 0.012 },
  ];
  const UI_ICONS = ['arrow_back', 'arrow_forward', 'check', 'close', 'content_copy', 'dark_mode', 'light_mode', 'download', 'mail', 'open_in_new', 'send', 'palette', 'location_on', 'lightbulb', 'draft', 'movie', 'flight_takeoff', 'north_east', 'waving_hand', 'auto_stories', 'translate', 'favorite', 'star', 'expand_more'];
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('static');

  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  const BRANDS = {
    github: 'M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3',
    linkedin: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
    scholar: 'M5.24 13.77 0 9.5 12 0l12 9.5-5.24 4.27A7 7 0 0 0 12 9.5a7 7 0 0 0-6.76 4.27zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z',
    email: 'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.4l10 6.25L22 6.4V6H2zm20 2.75-9.47 5.92a1 1 0 0 1-1.06 0L2 8.75V18h20V8.75z',
  };
  const brand = (id, cls = 'brand') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${BRANDS[id]}"/></svg>`;

  /* ---------- Icons: Material Symbols, subset to the names actually used ---------- */
  function loadIcons(extra = []) {
    const names = new Set([...UI_ICONS, ...extra]);
    (function walk(o) {
      if (Array.isArray(o)) o.forEach(walk);
      else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) (k === 'icon' ? names.add(v) : walk(v));
    })(SITE);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,300..600,0..1,0&display=block&icon_names=' + [...names].sort().join(',');
    document.head.appendChild(link);
  }

  /* ---------- Expressive shapes (polar cookie / flower / clover) ---------- */
  function shapePath(cx, cy, r, n, amp, rot = 0) {
    let d = '';
    for (let i = 0; i <= 180; i++) {
      const t = (i / 180) * Math.PI * 2;
      const rr = r * (1 + amp * Math.cos(n * (t + rot)));
      d += (i ? 'L' : 'M') + (cx + rr * Math.cos(t)).toFixed(2) + ' ' + (cy + rr * Math.sin(t)).toFixed(2);
    }
    return d + 'Z';
  }
  // <path data-shape="n,amp,ampVar,speed" data-c="cx,cy,r">
  function animateShapes(scope) {
    const spec = [...scope.querySelectorAll('path[data-shape]')].map((el) => {
      const [n, amp, varA, speed] = el.dataset.shape.split(',').map(Number);
      const [cx, cy, r] = el.dataset.c.split(',').map(Number);
      return { el, n, amp, varA, speed, cx, cy, r };
    });
    if (!spec.length) return;
    const draw = (time) => {
      for (const s of spec) {
        const t = (time / 1000) * s.speed;
        s.el.setAttribute('d', shapePath(s.cx, s.cy, s.r, s.n, s.amp + s.varA * Math.sin(t), t * 0.25));
      }
    };
    draw(0);
    if (reduced) return;
    (function loop(time) {
      if (!spec[0].el.isConnected) return;
      draw(time);
      requestAnimationFrame(loop);
    })(0);
  }

  /* ---------- Snackbar ---------- */
  let snackTimer;
  function snack(text) {
    let el = document.querySelector('.snackbar');
    if (!el) {
      el = document.createElement('div');
      el.className = 'snackbar';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(snackTimer);
    snackTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  /* ---------- Scroll reveal ---------- */
  let io;
  function reveal(scope) {
    io?.disconnect();
    io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        io.unobserve(el);
        el.classList.add('in');
        const done = () => el.removeAttribute('data-reveal');
        el.addEventListener('transitionend', done, { once: true });
        setTimeout(done, 1600);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    scope.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }

  /* ---------- Default pages (designs may override any of them) ---------- */
  const pages = {
    home: (c, x) => `
      <section class="page-head"><p class="title-m">${esc(c.hello)}</p><h1 class="display-m">${esc(c.headline)}</h1><p class="body-l muted">${esc(c.intro)}</p></section>
      ${x.focus()}`,

    about: (c, x) => `
      ${x.head('about')}
      <div class="about-layout">
        <div class="about-story" data-reveal>
          ${c.story.map((p) => `<p class="body-l">${rich(p)}</p>`).join('')}
          <p class="fun body-m"><span class="ms">lightbulb</span><span>${esc(c.funFact)}</span></p>
        </div>
        <figure class="about-photo" data-reveal style="--i:1">
          ${x.photoTag('photo')}
          <figcaption class="body-s muted"><span class="ms">location_on</span>${esc(c.born)} → ${esc(c.location)}</figcaption>
        </figure>
      </div>
      <section class="block" data-reveal><h2 class="block-title title-l">${esc(c.ui.loves)}</h2>${x.hobbies()}</section>
      <section class="block" data-reveal><h2 class="block-title title-l">${esc(c.ui.languages)}</h2>
        <div class="chips">${c.languages.map((l) => `<span class="chip"><span class="ms">translate</span>${esc(l.k)} · ${esc(l.v)}</span>`).join('')}</div>
      </section>`,

    work: (c, x) => `
      ${x.head('work')}
      <div class="chips filter-row" role="group" data-reveal>
        ${['all', 'research', 'project'].map((k) => `<button class="chip filter ripple ${k === 'all' ? 'selected' : ''}" data-filter="${k}"><span class="ms chip-check">check</span>${esc(k === 'all' ? c.ui.all : k === 'research' ? c.ui.research : c.ui.projects)}</button>`).join('')}
      </div>
      <div class="work-grid">${x.researchCards()}${x.projectCards()}</div>
      <p class="more-row"><a class="btn text ripple" href="${SITE.github}" target="_blank" rel="noopener">${brand('github')}${esc(c.ui.moreOnGithub)}</a></p>`,

    journey: (c, x) => `
      ${x.head('journey', x.cvButtons())}
      ${x.timeline()}
      <div class="card teach" data-reveal>
        <span class="icon-tile tertiary"><span class="ms">co_present</span></span>
        <div><h3 class="title-m">${esc(c.ui.teaching)}</h3><p class="body-m muted">${esc(c.teaching)}</p></div>
      </div>
      <section class="block" data-reveal><h2 class="block-title title-l">${esc(c.ui.toolbox)}</h2>
        <div class="chips">${c.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
      </section>`,

    blog: (c, x) => `
      ${x.head('blog')}
      <div class="card soon" data-reveal>
        <span class="icon-tile lg"><span class="ms">edit_note</span></span>
        <h2 class="headline-s">${esc(c.ui.soonTitle)}</h2>
        <p class="body-l muted">${esc(c.ui.soonText)}</p>
        <ul class="topics">${c.topics.map((t, i) => `<li style="--i:${i}"><span class="ms">draft</span><span class="title-m">${esc(t)}</span></li>`).join('')}</ul>
      </div>`,

    contact: (c, x) => `
      ${x.head('contact')}
      <div class="contact-grid">
        <div class="card contact-card" data-reveal>
          <span class="icon-tile lg"><span class="ms">waving_hand</span></span>
          <h2 class="headline-m">${esc(c.ui.contactTitle)}</h2>
          <p class="body-l muted">${esc(c.ui.contactText)}</p>
          <p class="title-l email" dir="ltr">${esc(SITE.email)}</p>
          <div class="actions">
            <a class="btn filled ripple" href="mailto:${SITE.email}"><span class="ms flip">send</span>${esc(c.ui.write)}</a>
            <button class="btn tonal ripple" data-copy="${SITE.email}"><span class="ms">content_copy</span>${esc(c.ui.copy)}</button>
          </div>
        </div>
        <ul class="card social-list" data-reveal style="--i:1">
          ${x.socials.filter((s) => s.id !== 'email').map((s) => `
            <li><a class="list-item ripple" href="${s.url}" target="_blank" rel="noopener">
              ${brand(s.id, 'brand lead')}<span class="title-m li-text">${esc(s.label)}</span><span class="ms trail">open_in_new</span>
            </a></li>`).join('')}
        </ul>
      </div>`,
  };

  /* ---------- Theme ---------- */
  let design, theme, mode;
  function applyTheme() {
    root.style.setProperty('--h', theme.h);
    root.style.setProperty('--c', theme.c);
    root.dataset.theme = mode;
    document.querySelectorAll('[data-mode-toggle] .ms').forEach((i) => { i.textContent = mode === 'dark' ? 'light_mode' : 'dark_mode'; });
    const panel = document.querySelector('.palette-panel');
    if (panel) {
      panel.querySelectorAll('[data-preset]').forEach((b) => b.classList.toggle('on', +b.dataset.h === theme.h && +b.dataset.c === theme.c));
      panel.querySelectorAll('[data-set-mode]').forEach((b) => b.classList.toggle('on', b.dataset.setMode === mode));
      const r = panel.querySelector('input[type=range]');
      if (r) r.value = theme.h;
    }
    design.onTheme?.();
  }
  function saveTheme() {
    store.set(`theme:${design.id}`, JSON.stringify(theme));
    store.set('mode', mode);
  }

  function paletteHTML(ui) {
    return `
      <div class="palette-panel" role="dialog" aria-label="${esc(ui.palette)}">
        <div class="pp-head"><span class="title-m">${esc(ui.palette)}</span><button class="icon-btn ripple" data-palette-close aria-label="${esc(ui.close)}"><span class="ms">close</span></button></div>
        <div class="pp-swatches">${PRESETS.map((p) => `<button class="pp-swatch ripple" data-preset data-h="${p.h}" data-c="${p.c}" style="--sh:${p.h};--sc:${p.c}" aria-label="${p.h}"><span class="ms">check</span></button>`).join('')}</div>
        <label class="pp-custom label-l">${esc(ui.custom)}<input type="range" min="0" max="359" step="1" value="${theme.h}"></label>
        <div class="pp-modes">
          <button class="pp-mode ripple" data-set-mode="light"><span class="ms">light_mode</span>${esc(ui.light)}</button>
          <button class="pp-mode ripple" data-set-mode="dark"><span class="ms">dark_mode</span>${esc(ui.dark)}</button>
        </div>
      </div>`;
  }
  function openPalette(btn, ui) {
    closePalette();
    document.body.insertAdjacentHTML('beforeend', paletteHTML(ui));
    const panel = document.querySelector('.palette-panel');
    applyTheme();
    const r = btn.getBoundingClientRect();
    const pw = panel.offsetWidth, ph = panel.offsetHeight;
    const left = Math.min(Math.max(8, r.left + r.width / 2 - pw / 2), innerWidth - pw - 8);
    const top = r.bottom + ph + 12 < innerHeight ? r.bottom + 8 : Math.max(8, r.top - ph - 8);
    panel.style.left = left + 'px';
    panel.style.top = top + 'px';
    panel.querySelector('input[type=range]').addEventListener('input', (e) => {
      theme = { h: +e.target.value, c: 0.12 };
      applyTheme(); saveTheme();
    });
  }
  function closePalette() { document.querySelector('.palette-panel')?.remove(); }

  /* ---------- Init ---------- */
  function init(d) {
    design = d;
    loadIcons(d.icons);
    const app = document.getElementById('app');
    const base = document.body.dataset.base || '';
    const q = new URLSearchParams(location.search);
    let lang = LANGS.includes(q.get('lang')) ? q.get('lang') : (LANGS.includes(store.get('lang')) ? store.get('lang') : 'en');
    try { theme = JSON.parse(store.get(`theme:${d.id}`)) || d.theme; } catch (e) { theme = d.theme; }
    mode = q.get('mode') || store.get('mode') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (q.get('h')) theme = { h: +q.get('h'), c: +(q.get('c') || 0.12) };
    if (q.get('static')) root.classList.add('static'); // used for gallery screenshots
    if (q.has('mode') || q.has('h')) {
      // one-off overrides (from the gallery): apply once, then drop them from the address
      const url = new URL(location.href);
      ['mode', 'h', 'c'].forEach((k) => url.searchParams.delete(k));
      history.replaceState(null, '', url);
    }
    applyTheme();

    const parseRoute = () => {
      const [page] = location.hash.replace(/^#\/?/, '').split('/');
      return ROUTES.includes(page) ? page : 'home';
    };

    function ctx() {
      const c = SITE[lang];
      const u = c.ui;
      const other = lang === 'fa' ? 'en' : 'fa';
      const loc = lang === 'fa' ? 'fa-IR' : 'en-US';
      const tones = ['', 'secondary', 'tertiary'];
      const fallback = `${base}assets/img/photo.svg`;
      const photo = /^https?:/.test(SITE.photo) ? SITE.photo : base + SITE.photo;
      const x = {
        lang, other, esc, rich, base, brand, mode,
        photo,
        num: (n, digits = 1) => Number(n).toLocaleString(loc, { minimumIntegerDigits: digits, useGrouping: false }),
        year: new Date().getFullYear().toLocaleString(loc, { useGrouping: false }),
        nav: SITE.nav.map((n) => ({ ...n, label: u.nav[n.id], href: n.id === 'home' ? '#/' : `#/${n.id}` })),
        socials: SITE.socials.map((s) => ({ id: s.id, url: s.url, label: s[lang] })),
        cvs: SITE.cvs.map((v) => ({ ...v, href: base + v.file, label: u.cv[v.id] })),
        shape: shapePath,

        photoTag: (cls = 'photo', w = 600, h = 720) =>
          `<img class="${cls}" src="${photo}" alt="${esc(c.name)}" width="${w}" height="${h}" onerror="this.onerror=null;this.src='${fallback}'">`,
        langBtn: (cls = 'btn text ripple', short = false) =>
          `<a class="${cls}" href="?lang=${other}" data-lang="${other}" lang="${other}" hreflang="${other}" title="${esc(u.switchTo)}">${esc(short ? u.switchShort : u.switchTo)}</a>`,
        modeBtn: (cls = 'icon-btn ripple') =>
          `<button class="${cls}" data-mode-toggle aria-label="${esc(u.mode)}" title="${esc(u.mode)}"><span class="ms">${mode === 'dark' ? 'light_mode' : 'dark_mode'}</span></button>`,
        paletteBtn: (cls = 'icon-btn ripple') =>
          `<button class="${cls}" data-palette aria-label="${esc(u.palette)}" title="${esc(u.palette)}"><span class="ms">palette</span></button>`,
        socialLinks: (cls = 'icon-btn ripple', labels = false) =>
          x.socials.map((s) => `<a class="${cls}" href="${s.url}" ${s.id === 'email' ? '' : 'target="_blank" rel="noopener"'} title="${esc(s.label)}" aria-label="${esc(s.label)}">${brand(s.id)}${labels ? `<span>${esc(s.label)}</span>` : ''}</a>`).join(''),
        cvButtons: (cls = 'btn tonal ripple') =>
          x.cvs.map((v, i) => `<a class="${i ? cls : cls.replace('tonal', 'filled')}" href="${v.href}" target="_blank" rel="noopener"><span class="ms">download</span>${esc(v.label)}</a>`).join(''),
        head: (id, actions = '') => `
          <header class="page-head" data-reveal>
            <h1 class="display-s">${esc(u.nav[id])}</h1>
            <p class="body-l muted">${esc(u.sub[id])}</p>
            ${actions ? `<div class="actions">${actions}</div>` : ''}
          </header>`,
        toolbar: (cls = '') => `
          <nav class="toolbar ${cls}" id="toolbar" aria-label="Main">
            ${x.nav.map((n) => `<a class="tb-item ripple" data-nav="${n.id}" href="${n.href}" title="${esc(n.label)}"><span class="ms">${n.icon}</span><span class="tb-label label-l">${esc(n.label)}</span></a>`).join('')}
          </nav>`,

        focus: () => `<div class="focus-grid">${c.focus.map((f, i) => `
          <article class="card focus-card" data-reveal style="--i:${i}">
            <span class="icon-tile ${tones[i % 3]}"><span class="ms">${f.icon}</span></span>
            <h3 class="title-l">${esc(f.title)}</h3><p class="body-m muted">${esc(f.desc)}</p>
          </article>`).join('')}</div>`,
        now: () => `<ul class="now-list">${c.now.map((n) => `
          <li><span class="ms">${n.icon}</span><span class="now-text"><span class="label-m muted">${esc(n.label)}</span><span class="body-m">${esc(n.text)}</span></span></li>`).join('')}</ul>`,
        researchCards: (n = 99) => c.research.slice(0, n).map((r, i) => `
          <a class="card research-card ripple" data-kind="research" href="${r.url}" target="_blank" rel="noopener" data-reveal style="--i:${i}">
            <div class="rc-top"><span class="status label-m">${esc(r.status)}</span><span class="tag">${esc(r.tag)}</span></div>
            <h3 class="title-l">${esc(r.title)}</h3><p class="body-m muted">${esc(r.desc)}</p>
            <span class="ms go flip">arrow_forward</span>
          </a>`).join(''),
        projectCards: (n = 99) => c.projects.slice(0, n).map((p, i) => `
          <a class="card proj-card ripple" data-kind="project" href="${p.url}" target="_blank" rel="noopener" data-reveal style="--i:${i}">
            <span class="icon-tile ${tones[(i + 1) % 3]}"><span class="ms">${p.icon}</span></span>
            <h3 class="title-m">${esc(p.title)}</h3><p class="body-m muted">${esc(p.desc)}</p>
            <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          </a>`).join(''),
        timeline: () => `<ol class="timeline" data-reveal>${c.journey.map((j, i) => `
          <li style="--i:${i}">
            <span class="tl-ic"><span class="ms">${j.icon}</span></span>
            <div class="tl-body"><p class="label-l tl-when">${esc(j.when)}</p><h3 class="title-m">${esc(j.title)}</h3>
            <p class="body-m org">${esc(j.org)}</p><p class="body-m muted">${esc(j.desc)}</p></div>
          </li>`).join('')}</ol>`,
        hobbies: () => {
          const h = c.hobbies;
          const icons = { books: 'auto_stories', movies: 'movie', games: 'sports_esports', travel: 'flight_takeoff' };
          const off = [0, 50, 110, 170, 250];
          return `
          <div class="hobbies" data-tabs>
            <div class="seg" role="tablist">${Object.keys(icons).map((k, i) => `
              <button class="seg-btn ripple ${i ? '' : 'on'}" data-tab="${k}" role="tab"><span class="ms">${icons[k]}</span><span>${esc(u.hobby[k])}</span></button>`).join('')}</div>
            <div class="shelf" data-panel="books">${h.books.map((b, i) => `
              <div class="book" style="--o:${off[i % 5]};--i:${i}"><span class="book-title">${esc(b.title)}</span><span class="book-by">${esc(b.by)}</span></div>`).join('')}</div>
            <div class="shelf" data-panel="movies" hidden>${h.movies.map((m, i) => `
              <div class="poster" style="--o:${off[i % 5]};--i:${i}"><span class="ms">movie</span><span class="poster-title">${esc(m.title)}</span><span class="poster-year">${x.num(m.year)}</span></div>`).join('')}</div>
            <div class="shelf" data-panel="games" hidden>${h.games.map((g, i) => `
              <div class="game" style="--o:${off[i % 5]};--i:${i}"><span class="ms">sports_esports</span><span class="game-title" dir="auto">${esc(g.title)}</span><span class="game-meta">${esc(g.meta)}</span></div>`).join('')}</div>
            <div class="shelf" data-panel="travel" hidden>${h.travel.map((t, i) => `
              <div class="stamp ${t.next ? 'next' : ''}" style="--o:${off[i % 5]};--i:${i}"><span class="ms">${t.next ? 'flight_takeoff' : 'location_on'}</span><span class="stamp-place">${esc(t.place)}</span><span class="stamp-note">${esc(t.note)}</span></div>`).join('')}</div>
          </div>`;
        },
      };
      return { c, x };
    }

    function renderView(animate) {
      const { c, x } = ctx();
      const view = document.getElementById('view');
      const page = parseRoute();
      const all = { ...pages, ...design.pages };
      view.dataset.page = page;
      view.innerHTML = all[page](c, x);
      document.querySelectorAll('[data-nav]').forEach((a) => {
        const on = a.dataset.nav === page;
        a.classList.toggle('active', on);
        on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
      });
      document.title = page === 'home' ? `${c.name} — ${c.role}` : `${c.ui.nav[page]} — ${c.name}`;
      if (animate) {
        view.classList.remove('enter');
        void view.offsetWidth;
        view.classList.add('enter');
        (design.scroller?.() || window).scrollTo({ top: 0, behavior: 'instant' });
      }
      reveal(view);
      animateShapes(view);
      design.after?.(page, c, x);
    }

    function render() {
      const { c, x } = ctx();
      root.lang = lang;
      root.dir = lang === 'fa' ? 'rtl' : 'ltr';
      app.innerHTML = design.shell(c, x);
      renderView(false);
      animateShapes(app);
      design.mount?.(c, x);
    }

    addEventListener('hashchange', () => renderView(true));

    document.addEventListener('click', (e) => {
      const t = e.target;
      const langEl = t.closest('[data-lang]');
      if (langEl) {
        e.preventDefault();
        lang = langEl.dataset.lang;
        store.set('lang', lang);
        const url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
        closePalette();
        render();
        return;
      }
      if (t.closest('[data-mode-toggle]')) { mode = mode === 'dark' ? 'light' : 'dark'; applyTheme(); saveTheme(); return; }
      const pal = t.closest('[data-palette]');
      if (pal) { document.querySelector('.palette-panel') ? closePalette() : openPalette(pal, SITE[lang].ui); return; }
      if (t.closest('[data-palette-close]')) { closePalette(); return; }
      const preset = t.closest('[data-preset]');
      if (preset) { theme = { h: +preset.dataset.h, c: +preset.dataset.c }; applyTheme(); saveTheme(); return; }
      const setMode = t.closest('[data-set-mode]');
      if (setMode) { mode = setMode.dataset.setMode; applyTheme(); saveTheme(); return; }
      if (!t.closest('.palette-panel')) closePalette();

      const copy = t.closest('[data-copy]');
      if (copy) { navigator.clipboard?.writeText(copy.dataset.copy).then(() => snack(SITE[lang].ui.copied)); return; }

      const tab = t.closest('[data-tab]');
      if (tab) {
        const box = tab.closest('[data-tabs]');
        box.querySelectorAll('[data-tab]').forEach((b) => { b.classList.toggle('on', b === tab); b.setAttribute('aria-selected', b === tab); });
        box.querySelectorAll('[data-panel]').forEach((p) => {
          p.hidden = p.dataset.panel !== tab.dataset.tab;
          if (!p.hidden) { p.classList.remove('pop-in'); void p.offsetWidth; p.classList.add('pop-in'); }
        });
        return;
      }

      const chip = t.closest('[data-filter]');
      if (chip) {
        const k = chip.dataset.filter;
        chip.parentElement.querySelectorAll('[data-filter]').forEach((b) => b.classList.toggle('selected', b === chip));
        document.querySelectorAll('[data-kind]').forEach((card) => {
          const show = k === 'all' || card.dataset.kind === k;
          card.classList.toggle('hide', !show);
          if (show) { card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop'); }
        });
      }
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePalette(); });

    document.addEventListener('pointerdown', (e) => {
      const el = e.target.closest('.ripple');
      if (!el || reduced) return;
      const r = el.getBoundingClientRect();
      const d = Math.max(r.width, r.height) * 2.2;
      const w = document.createElement('span');
      w.className = 'ripple-wave';
      w.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
      el.appendChild(w);
      w.addEventListener('animationend', () => w.remove());
    });

    render();
  }

  window.Site = { init, esc, rich, snack, shapePath, reduced, brand };
})();
