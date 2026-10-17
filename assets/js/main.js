/* ============================================================================
   Aurora Mini-Hotel — main.js
   No dependencies. Everything degrades gracefully.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- utils */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, o) => {
    if (!el) return;
    if (Array.isArray(el) || el instanceof NodeList) { Array.from(el).forEach(function (e) { e.addEventListener(ev, fn, o); }); return; }
    el.addEventListener(ev, fn, o);
  };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** Read a nested key: t('rooms.n1') - returns null when missing. */
  function t(key, lang) {
    let node = I18N[lang || current];
    if (!node || typeof key !== 'string') return null;
    const parts = key.split('.');
    for (let i = 0; i < parts.length; i++) {
      if (node == null) return null;
      node = node[parts[i]];
    }
    return typeof node === 'string' ? node : null;
  }

  /* ------------------------------------------------------------- language */
  const SUPPORTED = Object.keys(I18N);
  let current = (() => {
    const saved = localStorage.getItem('aurora:lang');
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  })();

  const FLAGS = {
    en: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#012169"/><path d="M0 0l24 16M24 0L0 16" stroke="#fff" stroke-width="3.4"/><path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.7"/><path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5.4"/><path d="M12 0v16M0 8h24" stroke="#C8102E" stroke-width="3.2"/></svg>',
    ru: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#fff"/><rect y="5.33" width="24" height="5.33" fill="#0039A6"/><rect y="10.66" width="24" height="5.34" fill="#D52B1E"/></svg>',
    uk: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#0057B7"/><rect y="8" width="24" height="8" fill="#FFD500"/></svg>'
  };

  function paintFlags() {
    $$('[data-flag]').forEach(function (el) {
      const code = el.dataset.flag || current;
      el.innerHTML = FLAGS[code] || '';
    });
  }

  /* ------------------------------------------------------------ apply i18n */
  function applyI18n() {
    document.documentElement.setAttribute('lang', current);

    // plain text
    $$('[data-i18n]').forEach(function (el) {
      const val = t(el.dataset.i18n);
      if (val !== null) el.textContent = val;
    });

    // html (for <b> / <br> inside copy)
    $$('[data-i18n-html]').forEach(function (el) {
      const val = t(el.dataset.i18nHtml);
      if (val !== null) el.innerHTML = val;
    });

    // attributes:  data-i18n-attr="placeholder:form.name;aria-label:form.name"
    $$('[data-i18n-attr]').forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (pair) {
        const idx = pair.indexOf(':');
        if (idx < 0) return;
        const attr = pair.slice(0, idx).trim();
        const val = t(pair.slice(idx + 1).trim());
        if (val !== null) el.setAttribute(attr, val);
      });
    });

    // media placeholders:  data-ph="ph.room1:Double 1 · photo 1"
    $$('[data-ph]').forEach(function (el) {
      const raw = el.dataset.ph;
      const idx = raw.indexOf(':');
      const label = idx < 0 ? raw : (t(raw.slice(0, idx).trim()) || raw.slice(idx + 1).trim());
      el.dataset.ph = label;
    });

    // document head
    const title = t('meta.title');
    if (title) document.title = title;
    const desc = t('meta.description');
    if (desc) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', desc);
    }

    // language switcher state
    $$('[data-set-lang]').forEach(function (b) {
      const active = b.dataset.setLang === current;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    const langBtn = $('.lang__btn');
    if (langBtn) {
      const code = t('lang.code');
      const label = t('lang.switch');
      // accessible name must contain the visible code text
      langBtn.setAttribute('aria-label', label ? label + ': ' + code : code);
    }

    paintFlags();
  }

  function setLang(code) {
    if (!I18N[code]) return;
    localStorage.setItem('aurora:lang', code);
    document.documentElement.setAttribute('lang', code);
    applyI18n();
    updateModalCopy('hero');   // refresh any open modal in place
    location.reload();         // full refresh with the new language
  }

  /* ----------------------------------------------------- language dropdown */
  (function langMenu() {
    const wrap = $('#lang');
    if (!wrap) return;
    const btn = $('.lang__btn', wrap);
    const menu = $('.lang__menu', wrap);

    const open = () => { wrap.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); menu.tabIndex = 0; };
    const close = () => { wrap.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); };

    on(btn, 'click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('is-open') ? close() : open();
    });
    on(document, 'click', function (e) { if (!wrap.contains(e.target)) close(); });
    on(document, 'keydown', function (e) { if (e.key === 'Escape') close(); });

    $$('[data-set-lang]').forEach(function (b) {
      on(b, 'click', function () { close(); setLang(b.dataset.setLang); });
    });
  })();

  /* ----------------------------------------------------------------- theme */
  (function theme() {
    const root = document.documentElement;
    on($$('[data-theme-toggle]'), 'click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('aurora:theme', next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#071a22' : '#f6f8f9');
    });
  })();

  /* --------------------------------------------------- media placeholders
     Every <img> points at a file that does not exist yet. When the browser
     reports "not found" we simply hide the <img>, which reveals the
     styled .media placeholder underneath it. Drop the real file in later and
     the image appears automatically — no code changes.                  */
  (function mediaFallback() {
    document.addEventListener('error', function (e) {
      const img = e.target;
      if (img && img.tagName === 'IMG') {
        img.classList.add('is-missing');
        img.setAttribute('aria-hidden', 'true');
      }
    }, true);

    // Also catch files already in the cache as broken before this ran
    $$('img').forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) {
        img.classList.add('is-missing');
        img.setAttribute('aria-hidden', 'true');
      }
    });
  })();

  /* ------------------------------------------------------------ mobile nav */
  (function nav() {
    const btn = $('[data-nav-toggle]');
    const nav = $('#nav');
    if (!btn || !nav) return;
    on(btn, 'click', function () {
      const open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('#nav a').forEach(function (a) {
      on(a, 'click', function () {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  })();

  /* -------------------------------------------------------- header effects */
  (function header() {
    const hdr = $('#hdr');
    const bar = $('.hdr__progress i');
    const top = $('.to-top');
    let ticking = false;

    function update() {
      const y = window.scrollY || 0;
      if (hdr) hdr.classList.toggle('is-stuck', y > 24);
      if (top) top.classList.toggle('is-on', y > 700);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, y / h) : 0) + ')';
      ticking = false;
    }
    on(window, 'scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    on(top, 'click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  })();

  /* ------------------------------------------------- smooth anchor scroll */
  (function anchors() {
    const offset = () => ($('#hdr') ? $('#hdr').offsetHeight + 10 : 80);
    on(document, 'click', function (e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - offset();
      window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  })();

  /* ------------------------------------------------------------------ tabs */
  (function tabs() {
    $$('[data-tabs]').forEach(function (root) {
      const tabs  = $$('.tab', root);
      const panes = $$('.tabs__panel', root);
      if (!tabs.length) return;
      let idx = 0;

      function activate(i) {
        idx = i;
        tabs.forEach(function (tb, n) {
          const on = n === i;
          tb.classList.toggle('is-active', on);
          tb.setAttribute('aria-selected', on ? 'true' : 'false');
          tb.tabIndex = on ? 0 : -1;
        });
        panes.forEach(function (p, n) {
          const on = n === i;
          p.classList.toggle('is-active', on);
          p.hidden = !on;
          if (on) {
            const s = $('[data-slider]', p);
            if (s && s.__slider) s.__slider.refresh();
          }
        });
      }

      tabs.forEach(function (tb, i) {
        on(tb, 'click', function () { activate(i); });
        on(tb, 'keydown', function (e) {
          if (e.key === 'ArrowRight') { e.preventDefault(); const n = (i + 1) % tabs.length; activate(n); tabs[n].focus(); }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); const n = (i - 1 + tabs.length) % tabs.length; activate(n); tabs[n].focus(); }
          if (e.key === 'Home')        { e.preventDefault(); activate(0); tabs[0].focus(); }
          if (e.key === 'End')         { e.preventDefault(); activate(tabs.length - 1); tabs[tabs.length - 1].focus(); }
        });
      });

      activate(0);
    });
  })();

  /* ---------------------------------------------------------------- slider */
  function Slider(root) {
    this.root = root;
    this.track = $('.slider__track', root);
    this.slides = this.track ? Array.from(this.track.children) : [];
    if (!this.track || !this.slides.length) return;

    this.index = 0;
    const self = this;

    this.perView = function () {
      const w = this.slides[0].getBoundingClientRect().width;
      if (!w) return 1;
      return Math.max(1, Math.round(this.track.clientWidth / w));
    };
    this.max = function () { return Math.max(0, this.slides.length - this.perView()); };

    this.go = function (i, animate) {
      const max = this.max();
      this.index = Math.max(0, Math.min(i, max));
      const x = this.slides[this.index].offsetLeft;
      this.track.style.transition = animate === false || reduceMotion ? 'none' : '';
      this.track.style.transform = 'translateX(' + (-x) + 'px)';
      this.paint();
    };

    this.next = function () { this.go(this.index >= this.max() ? 0 : this.index + 1); };
    this.prev = function () { this.go(this.index <= 0 ? this.max() : this.index - 1); };

    this.refresh = function () { this.buildDots(); this.go(Math.min(this.index, this.max()), false); };

    this.buildDots = function () {
      const dots = $('[data-slider-dots]', this.root);
      if (!dots) return;
      const total = this.max() + 1;
      if (dots.children.length !== total) {
        dots.innerHTML = '';
        for (let i = 0; i < total; i++) {
          const b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          b.addEventListener('click', (function (n) { return function () { self.go(n); }; })(i));
          dots.appendChild(b);
        }
      }
      Array.from(dots.children).forEach(function (d, i) {
        d.classList.toggle('is-active', i === self.index);
        d.setAttribute('aria-current', i === self.index ? 'true' : 'false');
      });
    };

    this.paint = function () {
      this.buildDots();
      const cur = $('[data-slider-cur]', this.root);
      const tot = $('[data-slider-total]', this.root);
      if (cur) cur.textContent = String(this.index + 1);
      if (tot) tot.textContent = String(this.slides.length);
      const prev = $('[data-slider-prev]', this.root);
      const next = $('[data-slider-next]', this.root);
      if (prev) prev.disabled = this.slides.length <= this.perView();
      if (next) next.disabled = this.slides.length <= this.perView();
    };

    on($('[data-slider-next]', this.root), 'click', function () { self.next(); stop(); });
    on($('[data-slider-prev]', this.root), 'click', function () { self.prev(); stop(); });

    /* drag / swipe */
    let down = false, startX = 0, startY = 0, delta = 0;
    on(this.root, 'pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      down = true; startX = e.clientX; startY = e.clientY; delta = 0;
      self.track.style.transition = 'none';
    });
    on(window, 'pointermove', function (e) {
      if (!down) return;
      delta = e.clientX - startX;
      if (Math.abs(delta) > 4) self.track.style.transform = 'translateX(' + (-self.slides[self.index].offsetLeft + delta) + 'px)';
    });
    on(window, 'pointerup', function () {
      if (!down) return;
      down = false;
      self.track.style.transition = '';
      const w = self.slides[0].getBoundingClientRect().width || 1;
      if (Math.abs(delta) > w * 0.18) { delta < 0 ? self.next() : self.prev(); }
      else self.go(self.index);
    });

    /* autoplay (reviews only) */
    let timer = null;
    function start() {
      if (reduceMotion || !root.classList.contains('slider--reviews')) return;
      stop();
      timer = setInterval(function () { self.index >= self.max() ? self.go(0) : self.next(); }, 5500);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    on(this.root, 'mouseenter', stop);
    on(this.root, 'mouseleave', start);
    on(this.root, 'focusin', stop);
    this._start = start;

    this.refresh();
    start();
    on(window, 'resize', function () { self.refresh(); }, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { self.refresh(); });
  }

  $$('[data-slider]').forEach(function (root) { root.__slider = new Slider(root); });

  /* --------------------------------------------------------------- counters */
  (function counters() {
    const els = $$('[data-count]');
    if (!els.length) return;
    if (reduceMotion) { els.forEach(function (el) { el.textContent = el.dataset.count; }); return; }

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.dec || '0', 10);
        const suffix = el.dataset.suffix || '';
        const dur = 1400;
        const t0 = performance.now();
        (function step(now) {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = target * eased;
          el.textContent = (dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US')) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    }, { threshold: 0.35 });

    els.forEach(function (el) { io.observe(el); });
  })();

  /* ----------------------------------------------------------- reveal on scroll */
  (function reveal() {
    const els = $$('[data-reveal]');
    if (!els.length) return;
    if (reduceMotion) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
    els.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  })();

  /* ------------------------------------------------------------------ stars */
  $$('[data-stars]').forEach(function (el) {
    const n = parseInt(el.dataset.stars, 10) || 5;
    let html = '';
    for (let i = 0; i < 5; i++) {
      html += '<svg viewBox="0 0 24 24" class="' + (i < n ? 'on' : 'off') + '" aria-hidden="true">' +
              '<path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.4l6-.8L12 3z" fill="currentColor"/></svg>';
    }
    el.innerHTML = html;
  });

  /* ------------------------------------------------------------------ modal */
  const MODAL_COPY = {
    hero:    { title: 'hero.cardTitle', sub: 'm.sub',      btn: 'hero.btnBook' },
    learn:   { title: 'hero.btnLearn',   sub: 'm.sub',      btn: 'form.submit' },
    room:    { title: 'rooms.cta',       sub: 'm.sub',      btn: 'form.submit' },
    offer:   { title: 'of.cta',          sub: 'm.sub',      btn: 'form.submit' },
    consult: { title: 'ct.cta',          sub: 'm.sub',      btn: 'form.submit' },
    footer:  { title: 'ftr.title',       sub: 'ftr.sub',    btn: 'form.submit' },
    video:   { title: 'm.vTitle',        sub: 'm.vSub',     btn: 'm.vBtn', video: true }
  };

  const modal = $('#modal');
  let lastFocus = null;

  function updateModalCopy(reason) {
    if (!modal) return;
    const copy = MODAL_COPY[reason] || MODAL_COPY.hero;
    const ttl = $('#modalTitle');
    const sub = $('.modal__sub', modal);
    const btn = $('.lead-form--modal button[type="submit"]', modal);
    const mediaBox = $('[data-modal-media]', modal);
    if (ttl && t(copy.title)) ttl.textContent = t(copy.title);
    if (sub && t(copy.sub)) sub.textContent = t(copy.sub);
    if (btn && t(copy.btn)) btn.textContent = t(copy.btn);
    if (mediaBox) mediaBox.hidden = !copy.video;
    const form = $('.lead-form--modal', modal);
    if (form) form.hidden = !!copy.video;
    const ok = $('[data-lead-ok]', modal);
    if (ok) ok.hidden = true;
  }

  function openModal(reason) {
    if (!modal) return;
    lastFocus = document.activeElement;
    updateModalCopy(reason);
    modal.hidden = false;
    document.body.classList.add('modal-open');
    // force a reflow so the CSS transition actually plays
    void modal.offsetHeight;
    modal.classList.add('is-open');
    const first = $('input, button:not(.modal__x)', modal);
    if (first && reason !== 'video') setTimeout(function () { first.focus(); }, 60);
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    setTimeout(function () { modal.hidden = true; }, 240);
    if (lastFocus) lastFocus.focus();
  }

  on(document, 'click', function (e) {
    const open = e.target.closest('[data-open-modal]');
    if (open) { e.preventDefault(); openModal(open.dataset.openModal); return; }
    if (e.target.closest('[data-modal-close]')) closeModal();
  });
  on(document, 'keydown', function (e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab' && modal && !modal.hidden) {
      const f = $$('a[href], button:not([disabled]), input', modal)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ------------------------------------------------------------- lead forms
     No backend yet. Drop in one line to connect a real endpoint:
       window.AURORA_FORM_ENDPOINT = 'https://...';
     (Cloudflare Worker, Formspree, Google Apps Script, mailto handler …)     */
  window.AURORA_FORM_ENDPOINT = window.AURORA_FORM_ENDPOINT || '';

  async function sendLead(form, data) {
    const url = window.AURORA_FORM_ENDPOINT;
    const body = Object.assign({ page: location.pathname, lang: current, ts: new Date().toISOString() }, data);
    if (url) {
      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      } catch (err) {
        console.warn('[Aurora] lead endpoint failed', err);
      }
    } else {
      console.info('[Aurora] lead captured locally — set window.AURORA_FORM_ENDPOINT to send it somewhere:', body);
    }
  }

  $$('[data-lead-form]').forEach(function (form) {
    on(form, 'submit', async function (e) {
      e.preventDefault();
      const fields = $$('input, textarea, select', form);
      let valid = true;
      fields.forEach(function (input) {
        const bad = input.required && !input.value.trim();
        input.classList.toggle('is-bad', bad);
        if (bad) valid = false;
      });
      if (!valid) { const first = $('.is-bad', form); if (first) first.focus(); return; }

      const btn = $('button[type="submit"]', form);
      const label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = '…'; }

      await sendLead(form, {
        source: form.dataset.leadForm,
        name: (form.elements.name && form.elements.name.value) || '',
        phone: (form.elements.phone && form.elements.phone.value) || ''
      });

      if (btn) { btn.disabled = false; btn.textContent = label; }
      form.hidden = true;
      const ok = form.parentElement.querySelector('[data-lead-ok]');
      if (ok) ok.hidden = false;
      form.reset();
    });

    $$('input', form).forEach(function (input) {
      on(input, 'input', function () { input.classList.remove('is-bad'); });
    });
  });

  /* ------------------------------------------------------------------ misc */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* --------------------------------------------------------------- go ahead */
  applyI18n();
})();