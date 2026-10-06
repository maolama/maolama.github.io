/*
  Shared engine for every design:
  - language (EN = LTR, FA = RTL) and light/dark theme, both remembered per visitor
  - hash routing: #/ , #/about , #/projects , #/writing , #/writing/<slug> , #/resume , #/contact
  - Material behaviours: ripple, snackbar, filter chips, scroll reveal, count-up, morphing shapes
  - default page renderers (projects, writing, post, resume, contact) that designs may override

  A design calls Site.init({ shell, pages, mount, after, icons }).
*/
(() => {
  const LANGS = ['en', 'fa'];
  const ROUTES = ['home', 'about', 'projects', 'writing', 'resume', 'contact'];
  const UI_ICONS = ['arrow_back', 'arrow_forward', 'check', 'content_copy', 'dark_mode', 'download', 'light_mode', 'mail', 'open_in_new', 'schedule', 'send', 'article', 'psychology', 'format_quote', 'north_east', 'expand_more', 'chat', 'location_on', 'waving_hand'];
  const root = document.documentElement;

  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Material Symbols: load only the icons actually used ---------- */
  function loadIcons(extra = []) {
    const names = new Set([...UI_ICONS, ...extra]);
    (function walk(o) {
      if (Array.isArray(o)) o.forEach(walk);
      else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) k === 'icon' ? names.add(v) : walk(v);
    })(SITE);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block&icon_names=' + [...names].sort().join(',');
    document.head.appendChild(link);
  }

  /* ---------- Expressive shapes (polar "cookie" / "flower" / "clover") ---------- */
  function shapePath(cx, cy, r, n, amp, rot = 0) {
    let d = '';
    const steps = 180;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      const rr = r * (1 + amp * Math.cos(n * (t + rot)));
      d += (i ? 'L' : 'M') + (cx + rr * Math.cos(t)).toFixed(2) + ' ' + (cy + rr * Math.sin(t)).toFixed(2);
    }
    return d + 'Z';
  }
  // <path data-shape="n,amp,ampVar,speed" data-c="cx,cy,r">: morphs + spins while on screen
  function animateShapes() {
    const els = [...document.querySelectorAll('path[data-shape]')];
    if (!els.length) return;
    const spec = els.map((el) => {
      const [n, amp, varA, speed] = el.dataset.shape.split(',').map(Number);
      const [cx, cy, r] = el.dataset.c.split(',').map(Number);
      return { el, n, amp, varA, speed, cx, cy, r };
    });
    const draw = (time) => {
      for (const s of spec) {
        const t = time / 1000 * s.speed;
        s.el.setAttribute('d', shapePath(s.cx, s.cy, s.r, s.n, s.amp + s.varA * Math.sin(t), t * 0.25));
      }
    };
    draw(0);
    if (reduced) return;
    const loop = (time) => {
      if (!spec[0].el.isConnected) return;
      draw(time);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
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
    snackTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ---------- Reveal on scroll + count-up ---------- */
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
        el.querySelectorAll('[data-count]').forEach(countUp);
        if (el.matches('[data-count]')) countUp(el);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    scope.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }
  function countUp(el) {
    const target = Number(el.dataset.count);
    const fmt = (v) => Math.round(v).toLocaleString(root.lang === 'fa' ? 'fa-IR' : 'en-US');
    if (reduced) { el.textContent = fmt(target); return; }
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / 1200);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Default pages ---------- */
  const pages = {
    projects(c, x) {
      const kinds = ['all', ...new Set(c.projects.map((p) => p.kind))];
      return `
        ${x.head('projects')}
        <div class="chips filter-row" role="group" data-reveal>
          ${kinds.map((k) => `<button class="chip filter ripple ${k === 'all' ? 'selected' : ''}" data-filter="${k}">
            <span class="ms chip-check">check</span>${esc(k === 'all' ? c.ui.all : c.ui.kinds[k])}</button>`).join('')}
        </div>
        <div class="cards-grid">${c.projects.map(x.projectCard).join('')}</div>`;
    },

    writing(c, x) {
      return `${x.head('writing')}<div class="post-list">${c.posts.map(x.postCard).join('')}</div>`;
    },

    post(c, x, slug) {
      const p = c.posts.find((q) => q.slug === slug);
      if (!p) return pages.writing(c, x);
      return `
        <article class="article">
          <a class="btn text ripple back" href="#/writing"><span class="ms flip">arrow_back</span>${esc(c.ui.back)}</a>
          <p class="label-l muted post-meta"><span>${esc(p.date)}</span><span>·</span><span>${x.num(p.read)} ${esc(c.ui.minRead)}</span></p>
          <h1 class="headline-l">${esc(p.title)}</h1>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <div class="prose">${p.body.map((b) => `<p>${rich(b)}</p>`).join('')}</div>
        </article>`;
    },

    resume(c, x) {
      const u = c.ui;
      const tl = (list) => `<ol class="timeline">${list.map((i) => `
        <li>
          <p class="label-l tl-when">${esc(i.when)}</p>
          <h3 class="title-m">${esc(i.title)}</h3>
          <p class="body-m org">${esc(i.org)}</p>
          <p class="body-m muted">${esc(i.desc)}</p>
        </li>`).join('')}</ol>`;
      const sec = (icon, title, body) => `
        <section class="resume-sec" data-reveal>
          <h2 class="title-l sec-title"><span class="sec-ic"><span class="ms">${icon}</span></span>${esc(title)}</h2>
          ${body}
        </section>`;
      return `
        ${x.head('resume', `<a class="btn filled ripple" href="${x.cv}" target="_blank" rel="noopener"><span class="ms">download</span>${esc(u.cv)}</a>`)}
        <div class="resume-grid">
          <div>
            ${sec('work', u.experience, tl(c.experience))}
            ${sec('school', u.education, tl(c.education))}
          </div>
          <div>
            ${sec('article', u.publications, `
              <ol class="pubs" lang="en" dir="ltr">${x.pubs.map((p) => `
                <li class="card outlined pub">
                  <p class="label-m pub-year">${p.year}</p>
                  <h3 class="title-m">${esc(p.title)}</h3>
                  <p class="body-m muted">${rich(p.authors)}</p>
                  <p class="body-m"><em>${esc(p.venue)}</em></p>
                  <div class="pub-links">${p.links.map((l) => `<a class="btn text sm ripple" href="${l.url}">${esc(l.label)}</a>`).join('')}</div>
                </li>`).join('')}</ol>
              <a class="btn text ripple" href="${x.links[0].url}" target="_blank" rel="noopener">${esc(u.allPubs)}<span class="ms flip">arrow_forward</span></a>`)}
            ${sec('psychology', u.skills, c.skills.map((g) => `
              <div class="skill-group">
                <h3 class="title-s muted">${esc(g.group)}</h3>
                <div class="chips">${g.items.map((s) => `<span class="chip assist">${esc(s)}</span>`).join('')}</div>
              </div>`).join(''))}
          </div>
        </div>`;
    },

    contact(c, x) {
      const u = c.ui;
      return `
        ${x.head('contact')}
        <div class="contact-grid">
          <div class="card filled contact-card" data-reveal>
            <span class="icon-tile lg"><span class="ms">mail</span></span>
            <h2 class="headline-m">${esc(u.contactTitle)}</h2>
            <p class="body-l muted">${esc(u.contactText)}</p>
            <p class="title-l email" dir="ltr">${esc(x.email)}</p>
            <div class="actions">
              <a class="btn filled ripple" href="mailto:${x.email}"><span class="ms flip">send</span>${esc(u.write)}</a>
              <button class="btn tonal ripple" data-copy="${x.email}"><span class="ms">content_copy</span>${esc(u.copy)}</button>
            </div>
          </div>
          <ul class="list card outlined" data-reveal style="--i:1">
            ${x.links.map((l) => `
              <li><a class="list-item ripple" href="${l.url}" target="_blank" rel="noopener">
                <span class="ms lead">${l.icon}</span>
                <span class="li-text"><span class="title-m">${esc(l.label)}</span><span class="body-s muted" dir="ltr">${new URL(l.url).hostname.replace('www.', '')}</span></span>
                <span class="ms trail">open_in_new</span>
              </a></li>`).join('')}
          </ul>
        </div>`;
    },
  };

  /* ---------- Init ---------- */
  function init(design) {
    loadIcons(design.icons);
    const app = document.getElementById('app');
    const base = document.body.dataset.base || '';
    const q = new URLSearchParams(location.search).get('lang');
    let lang = LANGS.includes(q) ? q : (LANGS.includes(store.get('lang')) ? store.get('lang') : 'en');
    let theme = store.get('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.dataset.theme = theme;

    const parseRoute = () => {
      const [page, arg] = location.hash.replace(/^#\/?/, '').split('/');
      return { id: ROUTES.includes(page) ? page : 'home', arg };
    };

    function ctx() {
      const c = SITE[lang];
      const other = lang === 'fa' ? 'en' : 'fa';
      const loc = lang === 'fa' ? 'fa-IR' : 'en-US';
      const x = {
        lang, other, theme, esc, rich, base,
        photo: base + SITE.photo,
        cv: base + SITE.cv,
        email: SITE.email,
        links: SITE.links.map((l) => ({ icon: l.icon, url: l.url, label: l[lang] })),
        nav: SITE.nav.map((n) => ({ ...n, label: c.ui.nav[n.id], href: n.id === 'home' ? '#/' : `#/${n.id}` })),
        pubs: SITE.publications,
        stats: SITE.stats.map((s) => ({ n: s.n, label: c.ui.stats[s.key] })),
        year: new Date().getFullYear().toLocaleString(loc, { useGrouping: false }),
        num: (n, digits = 1) => Number(n).toLocaleString(loc, { minimumIntegerDigits: digits, useGrouping: false }),
        shape: shapePath,
        langBtn: (cls = '', short = false) =>
          `<a class="${cls}" href="?lang=${other}" data-lang="${other}" lang="${other}" hreflang="${other}" title="${esc(c.ui.switchTo)}">${esc(short ? c.ui.switchShort : c.ui.switchTo)}</a>`,
        themeBtn: (cls = 'icon-btn ripple') =>
          `<button class="${cls}" data-theme-toggle aria-label="${esc(c.ui.theme)}" title="${esc(c.ui.theme)}"><span class="ms">${theme === 'dark' ? 'light_mode' : 'dark_mode'}</span></button>`,
        head: (id, actions = '') => `
          <header class="page-head" data-reveal>
            <h1 class="display-s">${esc(c.ui.nav[id])}</h1>
            <p class="body-l muted">${esc(c.ui.sub[id])}</p>
            ${actions ? `<div class="actions">${actions}</div>` : ''}
          </header>`,
        postCard: (p, i = 0) => `
          <a class="card outlined ripple post-card" href="#/writing/${p.slug}" data-reveal style="--i:${i}">
            <p class="label-m muted post-meta"><span>${esc(p.date)}</span><span>·</span><span class="ms">schedule</span><span>${x.num(p.read)} ${esc(c.ui.minRead)}</span></p>
            <h3 class="title-l">${esc(p.title)}</h3>
            <p class="body-m muted">${esc(p.excerpt)}</p>
            <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          </a>`,
        projectCard: (p, i = 0) => `
          <a class="card elevated ripple project" data-kind="${p.kind}" href="${p.url}" data-reveal style="--i:${i}">
            <span class="icon-tile ${['', 'secondary', 'tertiary'][i % 3]}"><span class="ms">${p.icon}</span></span>
            <span class="ms go flip">arrow_forward</span>
            <span class="label-m kind">${esc(c.ui.kinds[p.kind])}</span>
            <h3 class="title-l">${esc(p.title)}</h3>
            <p class="body-m muted">${esc(p.desc)}</p>
            <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          </a>`,
      };
      return { c, x };
    }

    function renderView(animate) {
      const { c, x } = ctx();
      const view = document.getElementById('view');
      const { id, arg } = parseRoute();
      const all = { ...pages, ...design.pages };
      const page = id === 'writing' && arg ? 'post' : id;
      view.dataset.page = page;
      view.innerHTML = all[page](c, x, arg);
      document.querySelectorAll('[data-nav]').forEach((a) => {
        const on = a.dataset.nav === id;
        a.classList.toggle('active', on);
        on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
      });
      document.title = id === 'home' ? `${c.name} — ${c.role}` : `${c.ui.nav[id]} — ${c.name}`;
      if (animate) {
        view.classList.remove('enter');
        void view.offsetWidth;
        view.classList.add('enter');
        scrollTo({ top: 0, behavior: 'instant' });
      }
      reveal(view);
      animateShapes();
      design.after?.(page, c, x);
    }

    function render() {
      const { c, x } = ctx();
      root.lang = lang;
      root.dir = lang === 'fa' ? 'rtl' : 'ltr';
      app.innerHTML = design.shell(c, x);
      renderView(false);
      design.mount?.(c, x);
    }

    addEventListener('hashchange', () => renderView(true));

    document.addEventListener('click', (e) => {
      const langEl = e.target.closest('[data-lang]');
      if (langEl) {
        e.preventDefault();
        lang = langEl.dataset.lang;
        store.set('lang', lang);
        const url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
        render();
        return;
      }
      if (e.target.closest('[data-theme-toggle]')) {
        theme = theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = theme;
        store.set('theme', theme);
        document.querySelectorAll('[data-theme-toggle] .ms').forEach((i) => { i.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode'; });
        design.onTheme?.(theme);
        return;
      }
      const copy = e.target.closest('[data-copy]');
      if (copy) {
        navigator.clipboard?.writeText(copy.dataset.copy).then(() => snack(SITE[lang].ui.copied));
        return;
      }
      const chip = e.target.closest('[data-filter]');
      if (chip) {
        const k = chip.dataset.filter;
        chip.parentElement.querySelectorAll('[data-filter]').forEach((b) => b.classList.toggle('selected', b === chip));
        document.querySelectorAll('[data-kind]').forEach((card, i) => {
          const show = k === 'all' || card.dataset.kind === k;
          card.classList.toggle('hide', !show);
          if (show) { card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop'); }
        });
      }
    });

    // Ripple
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

  window.Site = { init, esc, rich, snack, shapePath, reduced };
})();
