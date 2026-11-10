# Kura website redesign — merchant-first, brand-book aligned

A self-contained multi-page HTML/CSS/JavaScript prototype aligned to Kura Brand Book V3, created November 2026.

## Preview

Open `index.html` in a desktop or mobile browser. Use the top menu to navigate between `merchants.html`, `businesses.html`, `organizations.html`, `families.html`, `about.html`, and `contact.html`.

No build step or dependencies are required, beyond a network connection to Google Fonts if you want to load the prescribed Urbanist family. If offline, the site falls back to system fonts.

## Positioning

This version treats merchants as the core customers and the local merchant network as the product's connective infrastructure. It structures payments by merchant value and sources of customer demand rather than centering diaspora sponsorship.

**Homepage content order**

1. Merchant-first hero and onboarding CTA
2. Merchant payment capabilities — acceptance, reach, visibility, self-custody
3. How the merchant workflow works
4. Channels bringing payments to participating merchants: digital POS, programs, sponsorships, business trade (live)
5. Merchant story and product benefits
6. Upcoming business payments, global accounts, cards (clearly marked as planned)
7. Community impact, FAQs, and merchant conversion CTA

**Navigation**

Merchants → Business payments → Organizations → For families → About us. The right-hand primary CTA is **Become a merchant**.

## Brand-book implementation

- Kura lockup and K-shaped app mark sourced from the uploaded Kura Brand Book V3 (logo examples, pages 10–11). The PNG is a raster extraction **for prototype presentation**. Replace with the original approved high-resolution SVG from Kura's own branding folder before launch. Do not trace, recolor, restyle, or modify the official source logo.
- Typography: **Urbanist**, from Brand Book page 15.
- Colors: approved green (`#28A54E`), teal (`#00B2B1`), and blue/navy brand fields, with the bright lime-and-teal gradients used in the brand book. Precise gradient stop values should be matched against the original design files in implementation.
- Brand book imagery: images included are extracted from the provided brand-book PDF and used as prototype artwork. For live deployment, obtain original production-resolution licensed files from Kura.
- Curved ribbons / circular geometry and navy/green contrasts reflect the applications on pages 1, 4, 9, and 16.

## Status and caveats

- The website is **not deployed** and does not modify kuratek.com.
- Contact form opens a pre-filled mailto message; connect to an approved backend/CRM before launch.
- Merchant interface and transaction amounts displayed in the prototype are *illustrative*, not actual merchant records or a screenshot of Kura's current production interface.
- Merchant payments are presented as the primary offering; general availability, onboarding and withdrawal options require market-specific validation.
- Business-to-business invoices are presented as **live**. Global accounts and cards are presented as **planned**, not launched.
- No unverified transaction metrics, license claims, partner logos, or guarantees have been added.

## Suggested implementation path

1. Confirm this merchant-led information architecture and homepage copy with leadership.
2. Replace extracted logo/people images with approved vector and production-photo assets.
3. Port `assets/style.css` into the Next.js frontend design tokens, retaining accessible semantic HTML and responsive states.
4. Make the contact form submit server-side with spam protection and analytics. Define merchant onboarding CTAs by market and route to the correct flow.
5. Verify product, regulatory and country availability claims with compliance and operations; review terms/privacy links.
6. Test at mobile widths, add real UI screenshots/product video, audit Core Web Vitals/SEO/accessibility, and then deploy to a staging domain.

This is a brand-faithful design prototype and developer handoff, not a launch-ready production application.


## Full-site visual refinement (Nov 2026)

All public pages now load `assets/polish.css` after the legacy stylesheet. The homepage uses a purely CSS ambient mint glow (no faded merchant photography) around the merchant payment UI. Supporting pages share white/mint hero styling and more consistent spacing. The payment journey uses keyboard-operable, user-controlled tabs instead of automatic advancement. See `docs/VISUAL-REFINEMENT.md` for design decisions and release checks.
