# Visual system refinement (November 2026)

The original multi-page prototype remains static HTML, CSS and a small amount of JS.

## Design direction
- White / pale mint first; dark navy provides deliberate contrast rather than dominating full-screen surfaces.
- Merchant-first hero retains **Get paid digitally. Grow locally.** The approved product illustration is an HTML/CSS *illustrative* phone screen, not a screenshot or a real transaction.
- No faded background photograph behind hero text, no hard blue split, and no image asset with an opaque rectangle floating over a different background.
- Supporting page hero sections share the same light treatment, rounded brand-book imagery, type scale, and button system.
- Merchant, families, organizations and B2B navigation/CTAs are preserved. Cards and global accounts remain presented as planned, not live.

## Implementation
- `assets/style.css` contains the legacy foundation.
- `assets/polish.css` is a deliberately isolated visual layer, loaded **after** the base stylesheet on every page. When porting to a component system, consolidate these rules.
- `assets/site.js` contains mobile navigation, contact mailto behavior, an accessible user-controlled merchant journey, reveal enhancements and the mobile CTA.
- The contact form is a mailto preview only; no backend submission is implied.
- Keep official Kura logo files intact, and replace prototype brand-book raster photos with approved production assets before publication.

## Functional checks before go-live
- Browse all internal links and every page at 390px, 768px, 1440px and 1920px.
- Verify primary Merchant and Sponsor CTAs and existing login routes.
- Verify keyboard navigation, visible focus, mobile menu dismissal, merchant tab arrows and reduced motion.
- Validate product/market-specific wording and approved brand/photography rights.
