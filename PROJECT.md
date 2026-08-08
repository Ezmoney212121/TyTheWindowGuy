# PROJECT.md — Ty The Window Guy Website

**Hand-off document for continuing work.** Read this first in a new session before editing.

---

## Status (as of last update)

| Item | State |
|------|--------|
| Site | Complete single-page marketing site (HTML/CSS/JS) |
| Local preview | Served with `npx serve -l 8080 .` → http://localhost:8080 |
| GitHub | https://github.com/Ezmoney212121/TyTheWindowGuy |
| Branch | `main` |
| Hosting | Not deployed yet (GitHub Pages / custom domain pending) |
| Contact form backend | **Wired** — FormSubmit → `sales@tythewindowguyor.com` |
| Real photos / map / reviews widget | Placeholders only |

**Overall:** Ready for content polish, form wiring, images, and launch. Not production-live.

---

## Business

| Field | Value |
|-------|--------|
| **Name** | Ty The Window Guy |
| **Owner** | Tyson “Ty” Rich — sixth-generation Central Oregon native |
| **Address (NAP)** | 61310 Parrell Rd #19, Bend, OR 97702 |
| **Phone** | (541) 633-8728 → `tel:+15416338728` |
| **Hours** | Mon–Fri 8:00 AM – 5:00 PM; **Closed Sat & Sun** |
| **Service area** | Bend + Central Oregon (Sunriver, Redmond, Sisters, Tumalo, Terrebonne, La Pine area, surrounding) |
| **Reputation** | Consistently ~5.0-star; thorough, professional, fair pricing, shoe covers, responsive |

### Core services

- Residential interior & exterior window cleaning  
- Commercial window cleaning  
- Screen cleaning  
- Skylight cleaning  
- Roof debris / pine needle clearing  
- Post-construction cleanups  
- Gutter cleaning  

### Trust claims used on site (confirm before launch)

- 5.0-star rated  
- 15+ years serving Central Oregon  
- Locally owned  
- Fully insured  
- Shoe covers / property care  

### Domain / brand caution

- Public listings for this Bend business: Yelp etc. match the NAP/phone above.  
- **`tytythewindowguy.com`** currently appears associated with a **different Utah** business — do **not** assume that domain is this company. Use a clean Bend domain or carefully rebrand hosting to avoid NAP confusion.  
- Schema/meta currently use placeholder: `https://www.tythewindowguy.com/` — update everywhere when domain is final.  
- Schema email placeholder: `info@tythewindowguy.com` — replace with real email.

---

## Goals

1. Drive **phone calls** and **free quote** form submissions.  
2. Feel trustworthy, local, premium — **not** flashy or corporate.  
3. Strong **local SEO** + **AI Overview (AIO)** friendly FAQ/schema.  
4. Mobile-first; sticky click-to-call + Get Quote CTAs.

---

## Repo & tooling

```
Owner / GitHub user:  Ezmoney212121
Remote:               origin → https://github.com/Ezmoney212121/TyTheWindowGuy.git
Default branch:       main
Local path:           C:\Users\joeuc\OneDrive\Desktop\TyTheWindowGuy
```

### Files

| Path | Role |
|------|------|
| `index.html` | Full single-page site: all sections, meta, JSON-LD schema, form markup |
| `styles.css` | Design system, layout, responsive, sticky mobile CTA |
| `script.js` | Mobile nav, form validation, sticky CTA hide-on-contact, smooth scroll |
| `robots.txt` | Allow all; sitemap URL (update domain) |
| `sitemap.xml` | Homepage only (update domain) |
| `README.md` | Public-facing project readme / launch notes |
| `PROJECT.md` | **This file** — AI/dev continuity handoff |
| `.gitignore` | OS/editor/env noise |

No framework, no build step. Static site only.

### Local git identity (repo-local)

```
user.name  = Ezmoney212121
user.email = Ezmoney212121@users.noreply.github.com
```

### Run locally

```powershell
cd C:\Users\joeuc\OneDrive\Desktop\TyTheWindowGuy
npx --yes serve -l 8080 .
# Open http://localhost:8080
```

Python may not be installed on this machine; prefer `npx serve`.

### Push changes

```powershell
git add .
git commit -m "Describe change clearly"
git push origin main
```

`gh` is authenticated as **Ezmoney212121** (keyring) on this machine as of last session.

---

## Site map (single page)

Anchors / section IDs:

1. `#top` — sticky header (logo “home” uses special scroll-to-0, see bugs fixed)  
2. Hero — H1, dual CTAs  
3. Trust bar  
4. `#services`  
5. `#how-it-works`  
6. `#projects` — photo gallery from Yelp (local copies in `images/projects/`)  
7. `#reviews`  
8. `#about`  
9. `#service-area` (Google Map embed centered on Bend, OR)  
10. Mid-page CTA banner  
11. `#faq`  
12. `#contact` — quote form (primary conversion)  
13. Footer NAP  
14. Sticky mobile bar (hidden when contact is in view)

### Page structure intent

- **H1:** “Crystal-Clear Windows in Bend & Central Oregon”  
- **Primary CTA:** Get a Free Quote → `#contact`  
- **Secondary CTA:** Call `(541) 633-8728`  
- Reviews: paraphrased in spirit of public Yelp/Nextdoor feedback; link out to Yelp; GBP embed placeholder  

---

## Design system (quick ref)

- **Tone:** Bright, airy, high-end local service  
- **Fonts:** Fraunces (display) + DM Sans (UI/body) via Google Fonts  
- **Palette (CSS vars in `styles.css`):**
  - Sky blue primary: `--color-sky-600` `#1f6a96`  
  - Sage accents: `--color-sage-500/600`  
  - Sand neutrals, deep ink text  
- **Mobile sticky CTA height:** `--sticky-cta-h` (body padding-bottom on small screens)  
- **Header height:** `--header-h` + `scroll-padding-top` for in-page anchors  

### Placeholders to replace

| Location | Replace with |
|----------|----------------|
| Hero `.hero-bg` | Photo of sparkling windows / Bend home (see CSS comment) |
| About photo block | Ty / crew / finished job |
| Map `.map-placeholder` | Google Maps embed (Bend 97702) |
| OG image meta | `images/og-cover.jpg` 1200×630 |
| Reviews widget note | Live Google Business Profile embed |
| Favicon | Real logo (currently emoji SVG data-URI) |

---

## SEO / AIO (already in place)

- Title + meta description for local window cleaning keywords  
- Canonical / Open Graph / Twitter tags (placeholder domain)  
- JSON-LD `@graph`: `LocalBusiness` + `Service` (residential/commercial) + `FAQPage`  
- FAQ section answers written for AI citation (pricing, frequency, inclusions, area, insurance, booking)  
- NAP consistent in header contact block + footer  
- `robots.txt` + `sitemap.xml`  

### Primary keywords

- window cleaning Bend OR  
- window cleaners Bend  
- residential window cleaning Central Oregon  
- commercial window cleaning Bend  
- supporting: gutters, skylights, pine needles / roof debris  

### Future internal pages (not built yet)

Suggested later for SEO depth:

- `/window-cleaning-bend-or/`  
- `/commercial-window-cleaning-bend/`  
- `/sunriver-window-cleaning/`  
- `/redmond-window-cleaning/`  

Keep current single-page anchors until multi-page is intentional.

---

## Form behavior (`script.js`)

- Required: name, phone (10+ digits), email, address, ≥1 service checkbox  
- **Destination:** `sales@tythewindowguyor.com` via [FormSubmit](https://formsubmit.co) AJAX  
  - Endpoint: `https://formsubmit.co/ajax/sales@tythewindowguyor.com`  
  - Fallback form `action`: `https://formsubmit.co/sales@tythewindowguyor.com`  
- On success: reset form, show `#formSuccess`  
- On failure: inline error + suggest calling (541) 633-8728  
- Submit button shows “Sending…” while request is in flight  
- **First-time setup:** FormSubmit emails `sales@tythewindowguyor.com` once to **activate** the inbox — someone must click the confirmation link before live leads arrive  
- Optional GA4 `generate_lead` stub commented in JS  

---

## Bugs already fixed

| Issue | Fix |
|-------|-----|
| Logo / “Ty The Window Guy” click only nudged page up | `#top` / `#` links use `window.scrollTo({ top: 0 })` instead of `scrollIntoView` on sticky header (avoids scroll-padding conflict) |

Do not reintroduce logo → `scrollIntoView(#top)` on the sticky `<header id="top">`.

---

## Launch checklist (outstanding)

- [ ] Confirm phone, address, hours, years-in-business, insurance wording with Ty  
- [ ] Replace placeholder images + map  
- [x] Wire form backend (FormSubmit → sales@tythewindowguyor.com)  
- [ ] Activate FormSubmit via confirmation email to sales@ inbox  
- [ ] Test form end-to-end (local + live URL)  
- [ ] Set production domain in: meta canonical, OG, schema `url`/`@id`, robots, sitemap  
- [ ] Real business email in schema/contact  
- [ ] Connect Google Business Profile + live reviews  
- [ ] Deploy (GitHub Pages and/or custom host) + HTTPS  
- [ ] Google Search Console + sitemap submit  
- [ ] Mobile test: sticky CTAs, form, click-to-call (iOS/Android)  
- [ ] Lighthouse 90+ Performance / SEO / A11y target  
- [ ] Privacy policy if collecting PII via form (recommended)  
- [ ] Optional: GA4 / call tracking  

---

## How to continue (for AI / next session)

1. **Read this file** + skim `index.html` section order if changing content.  
2. **Match design tokens** in `styles.css` (`:root`); don’t introduce a second palette.  
3. **Keep NAP identical** everywhere (header phone, contact, footer, schema).  
4. **Prefer static HTML/CSS/JS** unless the user asks for a framework.  
5. **After meaningful changes:** commit on `main` and `git push origin main` (user must approve if policy requires).  
6. **Conversion first:** phone + quote form should stay prominent; don’t bury CTAs.  
7. **Copy tone:** professional, friendly, local — not corporate or hypey.  
8. **Reviews:** prefer linking/embedding live sources over inventing new quotes.  

### Suggested next tasks (priority order)

1. Enable **GitHub Pages** (or other host) so Ty can share a URL  
2. Activate FormSubmit email + test quote form  
3. **Real photography** + map embed  
4. Domain + schema/meta domain sweep  
5. Optional multi-page SEO locations/services  

---

## Contact (canonical NAP for all surfaces)

**Ty The Window Guy**  
61310 Parrell Rd #19  
Bend, OR 97702  
(541) 633-8728  
Monday–Friday 8:00 AM – 5:00 PM  

---

*Update this file when architecture, domain, hosting, or form backend changes so the next session stays accurate.*
