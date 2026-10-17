# Aurora Mini-Hotel — website

A **static** website (plain HTML / CSS / vanilla JS). No build step, no dependencies,
no server. Drop the folder on **Cloudflare Pages** and it is live — the free tier
covers this site easily.

---

## 1. Run it locally

Double-click `index.html`, or start a tiny server (recommended, so the JS behaves
exactly like it will in production):

```bash
npx serve -l 4321 .
# then open http://localhost:4321
```

---

## 2. Deploy to Cloudflare Pages (free)

Git repository for this site: **`https://github.com/Scripter-Coder/test`**

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages**
   → **Connect to Git**.
2. Pick `Scripter-Coder/test`.
3. Build settings — **leave everything empty / "None"**:
   | Field | Value |
   |---|---|
   | Framework preset | None |
   | Build command | *(empty)* |
   | Build output directory | `/` (root) |
4. **Save and Deploy.** You get a URL like `https://test.pages.dev`.

### ⚠️ You do NOT need a Worker

If Cloudflare ever asks you for a `worker.js`, or says *"Failed to find Worker"*,
you clicked the wrong thing. This is a **static site** — plain HTML, CSS and JS
files. Cloudflare just serves the files from disk. There is no server code, no
`worker.js`, and nothing to configure.

Checklist if you hit that screen:

* You are probably in **Create → Workers** instead of **Create → Pages**.
* In the left sidebar go to **Workers & Pages → Pages** (the section is literally
  called "Pages"). If you only see Workers listed, you may be on the wrong
  Cloudflare account.
* There is nothing called `worker.js` to create — ignore that prompt and go back.
* The only thing that looks like a Worker is **optional**: the booking-form
  endpoint in section 6. You do not need it to publish the site.

### Updating the site later

```bash
cd "C:\Users\Ryzen 9 5900x\Desktop\Special Website\ScripterHub Website\Website Test"
git add .
git commit -m "new room photos"
git push
```

Cloudflare rebuilds and redeploys automatically, usually in 20–40 seconds.

### Domain (later, when you buy one)

1. Buy a domain (Cloudflare Registrar is cheapest — at-cost, no markup).
2. Pages → your project → **Custom domains** → **Set up a custom domain**.
3. Cloudflare adds the DNS record automatically. SSL is issued free within a minute.

Cloudflare Registrar / Domains is **not** free, but everything else in this setup is.

---

## 3. Project structure

```
index.html              the whole page
404.html                not-found page
robots.txt              crawler rules  (update the sitemap URL)
sitemap.xml             SEO sitemap    (update the <loc> URL)
assets/
  css/style.css         all styling + the dark/light theme
  js/i18n.js            ALL translations (en / ru / uk)  <-- edit content here
  js/main.js            sliders, tabs, modal, theme, language switching
  img/                  put your photos here (see PLACEHOLDERS.md)
  video/                put tour.mp4 here
```

---

## 4. Editing the content

**Text** — nearly all copy lives in `assets/js/i18n.js`, three times (once per
language). Search a key, e.g. `rooms.d1`, and change the value in **all three**
language blocks so nothing goes out of sync.

**Contact details** — phones, email and address appear in two places:

* `assets/js/i18n.js` → `header.phone1`, `header.phone2`, `ct.addr` (translated text)
* `index.html` → the `href="tel:..."`, `href="mailto:..."` and the plain-text
  `<b>` values inside `.ct-list` (not translated — update once)

**Colours** — top of `assets/css/style.css`. The brand gradient is `--grad`,
built from `--teal` and `--teal-2`. Change those two values and the whole site
re-skins (buttons, links, icons, sliders).

**Brand name** — `index.html` (two places: header + footer) and
`assets/js/i18n.js` → `brand.name` / `brand.sub`.

---

## 5. Adding a 4th language

1. `assets/js/i18n.js`:
   * add `{ code: 'de', name: 'Deutsch', flag: 'de' }` to `LANGS`
   * copy the whole `en: { … }` block, paste it as `de: { … }`, translate the values
   * add a flag SVG to the `FLAGS` object in `assets/js/main.js`
2. `index.html`: add one line inside `.lang__menu`

```html
<li><button type="button" role="option" data-set-lang="de">
  <span class="flag" data-flag="de"></span><span>Deutsch</span>
</button></li>
```

That's it. The dropdown, `<html lang>`, the page `<title>` and the meta description
all switch automatically. Missing keys gracefully fall back to English.

---

## 6. Making the booking forms actually send something

The forms currently validate and show a success message, but the data goes to the
browser console. To connect a real backend, set one variable — either inline in
`index.html` before `main.js`, or in any script loaded earlier:

```html
<script>window.AURORA_FORM_ENDPOINT = 'https://your-worker.workers.dev';</script>
```

The payload posted is JSON:

```json
{ "page": "/", "lang": "en", "ts": "2026-01-01T00:00:00.000Z",
  "source": "Promo - 2+ nights", "name": "...", "phone": "..." }
```

Works with a Cloudflare Worker, Formspree, Getform, Google Apps Script, or any
endpoint that accepts a POST.

**Cheapest Cloudflare option:** create a Worker with a free email binding (e.g.
Resend / EmailJS / Cloudflare Email Routing) and POST to it. Workers on the free
plan allow 100 000 requests/day.

---

## 7. Wiring up the video

1. Put the file at `assets/video/tour.mp4`.
2. Replace the contents of `<div class="video">` in `index.html`:

```html
<div class="video">
  <video src="assets/video/tour.mp4" poster="assets/img/tour/poster.jpg"
         controls playsinline preload="metadata"></video>
</div>
```

3. Add `.video video{width:100%;display:block;border-radius:inherit}` to
   `assets/css/style.css`.

For large files host them on Cloudflare Stream instead — free tier included, and
it handles adaptive bitrate streaming for you.

---

## 8. Google Maps

Open Google Maps → your address → **Share → Embed a map** → copy the `src` of the
`<iframe>` and paste it into the `.map` block in `index.html`, replacing the
`<figure class="media …">`. Remember to delete the `data-ph` attribute.

---

## 9. Performance & SEO

Everything is already in place: no frameworks, no jQuery, no web fonts blocking
render, `loading="lazy"` on every image, semantic headings, `alt` text, Open Graph
tags, `sitemap.xml`, `robots.txt`, and a custom `404.html`.

Before going live, update:
* the `<loc>` in `sitemap.xml` and the sitemap line in `robots.txt`
* `og:image` (place a real 1200×630 cover at `assets/img/og-cover.jpg`)
* both `tel:` / `mailto:` links and the real address

Submit the sitemap in **Google Search Console** once the domain is connected.