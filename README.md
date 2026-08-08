# Ty The Window Guy — Website

Professional, mobile-first, conversion-focused website for **Ty The Window Guy**, residential & commercial window cleaning in Bend and Central Oregon.

**Owner:** Tyson (Ty) Rich  
**NAP:** 61310 Parrell Rd #19, Bend, OR 97702 · (541) 633-8728  
**Hours:** Mon–Fri 8:00 AM – 5:00 PM (Closed weekends)

---

## Quick start

Open `index.html` in a browser, or serve locally:

```bash
# Python
python -m http.server 8080

# Node (if npx available)
npx serve .
```

Then visit `http://localhost:8080`.

### Files

| File | Purpose |
|------|---------|
| `index.html` | Full single-page site: hero, trust bar, services, process, reviews, about, service area, FAQ, contact form, footer, schema |
| `styles.css` | Design system, layout, sticky CTAs, mobile-first responsive styles |
| `script.js` | Mobile nav, form validation, sticky CTA hide-on-contact, smooth scroll |
| `README.md` | This guide — SEO, AIO, launch checklist |

---

## Site structure (single page)

1. **Header** — Logo, nav, click-to-call, sticky  
2. **Hero** — H1, local story subhead, Get Free Quote + Call CTAs  
3. **Trust bar** — 5.0 stars · 15+ years · Locally owned · Fully insured  
4. **Services** — Residential & commercial cards + add-ons (screens, skylights, roof debris, gutters, post-construction)  
5. **How it works** — 4 steps  
6. **Reviews** — 6 social-proof cards (tone from public Yelp/Nextdoor feedback)  
7. **About** — Ty’s local story  
8. **Service area** — Bend, Sunriver, Redmond, Sisters + map placeholder  
9. **Mid-page CTA banner**  
10. **FAQ** — 8 AIO-friendly Q&As + FAQPage schema  
11. **Contact / quote form** — Primary conversion path  
12. **Footer** — Consistent NAP, hours, links  
13. **Sticky mobile bar** — Call Now + Get Free Quote  

---

## Design system

- **Aesthetic:** Bright, airy, premium local service (not corporate)  
- **Colors:** Sky blue (`#1f6a96`), sage green accents, warm sand neutrals, deep ink  
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (display headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (UI/body)  
- **UX:** Sticky header, sticky mobile dual CTAs, large click-to-call phone, high contrast, reduced-motion support  

### Placeholder imagery (replace before launch)

| Location | Suggested real asset |
|----------|----------------------|
| Hero background | Sparkling windows / Bend home exterior with Cascade views |
| About section | Photo of Ty or crew on a job; or finished project |
| Map | Google Maps embed centered on Bend, OR 97702 |
| Open Graph | 1200×630 branded cover for social shares |
| Favicon | Real logo mark |

CSS notes for hero photo swap are commented in `styles.css` under `.hero-bg`.

---

## SEO & AI Overviews (AIO)

### On-page (already implemented)

- **Title:** `Window Cleaning Bend OR | Ty The Window Guy | Residential & Commercial`  
- **Meta description:** Local keywords + phone + value props  
- **H1:** Single homepage H1 with primary keyword intent  
- **H2/H3:** Logical hierarchy for services, process, reviews, area, FAQ  
- **NAP consistency:** Header, contact, footer match GBP-style format  
- **JSON-LD:** `LocalBusiness` + `Service` + `FAQPage` graph in `<head>`  
- **Canonical / OG / Twitter** tags ready (update domain when live)  
- **Semantic HTML:** `address`, `nav`, `section`, `article`, `blockquote`, `details`  
- **Internal anchors:** Ready for future `/services/residential` and location pages  

### Primary keywords targeted

- window cleaning Bend OR  
- window cleaners Bend  
- residential window cleaning Central Oregon  
- commercial window cleaning Bend  
- gutter cleaning Bend (supporting)  
- skylight / roof debris / pine needles (local intent)  

### AIO-friendly FAQ

FAQ answers are written in complete, natural sentences that AI systems can cite (pricing expectations, frequency, inclusions, service area, insurance, how to book). Same content is mirrored in FAQPage schema.

### Recommended next SEO steps

1. **Claim/verify Google Business Profile** and match NAP exactly to the site.  
2. **Set production domain** in canonical, OG, and schema `@id` / `url` (currently `https://www.tythewindowguy.com/` as a placeholder).  
3. **Add real photos** with descriptive `alt` text (e.g. “Clean residential windows Bend Oregon”).  
4. **Embed Google reviews** (Elfsight, EmbedSocial, or GBP posts) in `#reviews`.  
5. **Submit sitemap** once multi-page (create `sitemap.xml` + `robots.txt`).  
6. **Local citations:** Yelp, Nextdoor, Angi, Chamber — consistent NAP.  
7. **Future pages (internal linking):**  
   - `/window-cleaning-bend-or/`  
   - `/commercial-window-cleaning-bend/`  
   - `/sunriver-window-cleaning/`  
   - `/redmond-window-cleaning/`  

---

## Form backend

Quote requests are emailed to **sales@tythewindowguyor.com** via [FormSubmit](https://formsubmit.co).

- AJAX endpoint in `script.js`: `https://formsubmit.co/ajax/sales@tythewindowguyor.com`
- HTML form `action` fallback: `https://formsubmit.co/sales@tythewindowguyor.com`

**Important:** The first submission (or FormSubmit’s activation email) must be **confirmed** in the `sales@tythewindowguyor.com` inbox before live leads are delivered.

---

## Conversion & analytics

| Goal | Implementation |
|------|----------------|
| Phone calls | `tel:+15416338728` links (header, hero, sticky, contact, footer) |
| Quotes | `#contact` form + sticky “Get Free Quote” |
| Tracking | Add GA4 / Google Ads call tracking / callRail if desired |
| Events | Uncomment `gtag` lead event in `script.js` after GA4 install |

---

## Performance (Core Web Vitals)

- No heavy frameworks — static HTML/CSS/JS  
- System-friendly fonts with `display=swap`  
- CSS-only decorative patterns (hero grid) until real images  
- When adding images: use WebP/AVIF, explicit width/height, lazy-load below fold  
- Keep third-party scripts minimal (reviews widget + analytics only)  

---

## Accuracy notes

- **Trust claims used:** 5.0-star rated, 15+ years, locally owned, fully insured — confirm insurance docs and years-in-business before go-live if needed.  
- **Reviews:** Paraphrased in the spirit of public Yelp/Nextdoor feedback (professionalism, shoe covers, pine needles, Sunriver, fair pricing). Prefer linking to live GBP for legal/display freshness.  
- **Existing domain conflict:** `tytythewindowguy.com` currently appears associated with a different Utah listing. Use a dedicated Bend domain or carefully rebrand hosting to avoid NAP confusion.  
- **Email:** Schema uses `info@tythewindowguy.com` as placeholder — replace with real email.  

---

## Launch checklist

- [ ] Replace hero, about, and OG images  
- [ ] Confirm phone, address, hours, insurance language with Ty  
- [ ] Wire form backend + test submission  
- [ ] Update domain in meta, canonical, schema, OG  
- [ ] Add real Google Maps embed  
- [ ] Connect Google Business Profile reviews  
- [ ] Add privacy policy page if collecting emails (recommended)  
- [ ] Set up HTTPS hosting (Netlify, Cloudflare Pages, Vercel, or existing host)  
- [ ] Submit URL to Google Search Console  
- [ ] Test mobile: sticky CTAs, form, click-to-call on iOS/Android  
- [ ] Lighthouse: aim 90+ Performance / SEO / Accessibility  

---

## Contact (business)

**Ty The Window Guy**  
61310 Parrell Rd #19  
Bend, OR 97702  
(541) 633-8728  
Mon–Fri 8:00 AM – 5:00 PM
