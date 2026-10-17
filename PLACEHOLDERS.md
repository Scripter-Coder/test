# Placeholders — where to drop your media

Right now every photo and the video are **placeholders**: styled blocks that show a
dashed frame, a small image icon and a label telling you exactly which file is
missing. They look intentional, not broken.

**You never touch the HTML or the CSS to add media.** Drop a real file at the exact
path below and the placeholder is replaced by your photo automatically — on the
next page load, no build step, no re-uploading of code.

---

## The full checklist

| # | Drop this file here | Used for | Suggested size |
|---|---|---|---|
| 1 | `assets/img/hero/hero.jpg` | Main background behind the hero | 1920 × 1280 |
| 2 | `assets/img/rooms/double-1/1.jpg` | Room "Double 1", slide 1 | 1200 × 900 |
| 3 | `assets/img/rooms/double-1/2.jpg` | Room "Double 1", slide 2 | 1200 × 900 |
| 4 | `assets/img/rooms/double-1/3.jpg` | Room "Double 1", slide 3 | 1200 × 900 |
| 5 | `assets/img/rooms/double-2/1.jpg` | Room "Double 2", slide 1 | 1200 × 900 |
| 6 | `assets/img/rooms/double-2/2.jpg` | Room "Double 2", slide 2 | 1200 × 900 |
| 7 | `assets/img/rooms/double-2/3.jpg` | Room "Double 2", slide 3 | 1200 × 900 |
| 8 | `assets/img/rooms/double-2/4.jpg` | Room "Double 2", slide 4 | 1200 × 900 |
| 9 | `assets/img/rooms/economy/1.jpg` | Room "Economy", slide 1 | 1200 × 900 |
| 10 | `assets/img/rooms/economy/2.jpg` | Room "Economy", slide 2 | 1200 × 900 |
| 11 | `assets/img/rooms/economy/3.jpg` | Room "Economy", slide 3 | 1200 × 900 |
| 12 | `assets/img/rooms/economy/4.jpg` | Room "Economy", slide 4 | 1200 × 900 |
| 13 | `assets/img/rooms/semi-deluxe/1.jpg` | Room "Semi-deluxe", slide 1 | 1200 × 900 |
| 14 | `assets/img/rooms/semi-deluxe/2.jpg` | Room "Semi-deluxe", slide 2 | 1200 × 900 |
| 15 | `assets/img/rooms/semi-deluxe/3.jpg` | Room "Semi-deluxe", slide 3 | 1200 × 900 |
| 16 | `assets/img/rooms/semi-deluxe/4.jpg` | Room "Semi-deluxe", slide 4 | 1200 × 900 |
| 17 | `assets/img/rooms/semi-deluxe/5.jpg` | Room "Semi-deluxe", slide 5 | 1200 × 900 |
| 18 | `assets/img/promo/promo-bg.jpg` | Background of the "save 10%" band | 1600 × 900 |
| 19 | `assets/img/awards/badge.jpg` | Award badge | 600 × 600 |
| 20 | `assets/img/tour/poster.jpg` | Video poster frame | 1920 × 1080 |
| 21 | `assets/img/offers/happy-hours.jpg` | Offer card 1 | 800 × 500 |
| 22 | `assets/img/offers/early-booking.jpg` | Offer card 2 | 800 × 500 |
| 23 | `assets/img/offers/night-rate.jpg` | Offer card 3 | 800 × 500 |
| 24 | `assets/img/contacts/map.jpg` | Map image (see note below) | 1200 × 900 |
| 25 | `assets/img/og-cover.jpg` | Social share preview (Facebook / WhatsApp / Telegram) | 1200 × 630 |

Plus one **video**:

| # | Drop this file here | Used for |
|---|---|---|
| 26 | `assets/video/tour.mp4` | The "Video tour" section and the video modal |

`.jpg` is used everywhere, but `.jpeg`, `.png`, `.webp` and `.avif` work too —
just rename the file **and** update the `src` in `index.html` to match.

---

## The video (one extra step)

1. Put `tour.mp4` in `assets/video/`
2. In `index.html`, replace the whole `<div class="video">…</div>` block with:

```html
<div class="video">
  <video src="assets/video/tour.mp4" poster="assets/img/tour/poster.jpg"
         controls playsinline preload="metadata"></video>
</div>
```

3. In `assets/css/style.css` add:

```css
.video video{width:100%;display:block;border-radius:inherit}
```

For a big video (over ~20 MB) upload it to **Cloudflare Stream** instead — the
free tier handles hosting and adaptive streaming, and you paste a `<video>` tag
with a Stream URL in place of the relative path.

---

## The map (a nicer solution than an image)

`assets/img/contacts/map.jpg` works, but a real interactive map is better:

1. Open Google Maps → your address → **Share → Embed a map** → **Copy HTML**
2. In `index.html`, replace the `<figure class="media … map__ph">…</figure>` inside
   `<div class="map">` with the copied `<iframe …></iframe>`
3. Delete the `data-ph` attribute from it

---

## The logo

The logo is drawn in **SVG** — the star mark is inline in `index.html`, and
`assets/img/favicon.svg` is the browser tab icon. To use a real logo file, replace
the `<span class="brand__mark">…</span>` markup in the header and footer with:

```html
<span class="brand__mark"><img src="assets/img/logo.svg" alt="Aurora"></span>
```

---

## Image tips

* Export at roughly **2×** the displayed size — the rooms display ~600 px wide, so
  1200 px source files stay sharp on retina screens.
* Compress before uploading. [Squoosh.app](https://squoosh.app) is free, or run
  them through `cwebp` for a ~30 % smaller file with identical quality.
* Keep any single image under ~250 KB. Total page weight should stay under 1 MB.
* Consistency matters more than resolution — same colour temperature, same
  lighting, similar framing across all the room shots.
* Landscape (4:3) for rooms, 16:9 for the hero and the video poster. Mismatched
  ratios get cropped by `object-fit: cover`.