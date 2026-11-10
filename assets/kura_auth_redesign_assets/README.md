# Kura authentication redesign — developer asset pack

These assets are intended for the **Sponsor** and **Merchant** authentication pages that follow the role-selection entry screen, not the entry screen itself.

## What's included

- `illustrations/sponsor-hero.svg` and `illustrations/merchant-hero.svg`: **editable vector hero scenes** built for integration and scaling. These are newly recreated, stylistically matching assets, not recovered hidden layers from the AI mockups.
- Corresponding high-resolution PNG and compressed WebP exports.
- `icons/*.svg`: reusable vector UI icons (phone, merchant, check, heart, QR, globe, arrow, mail, shield).
- `references/`: generated full-page inspiration and role-specific visual references, including the phone-first layout.
- `styles/kura-auth-tokens.css`: suggested styling variables and responsive scaffold.
- `developer/IMPLEMENTATION_PROMPT.md`: integration instructions and copy.

## Important caveats

The original reference mockups were **flattened AI-generated images** and don't contain individual SVG layers. The vector hero scenes in this bundle were authored separately to give developers actual scalable assets; they won't be pixel-identical to those mockups.

Use the **existing real Kura logo** from the project / brand book; do not use the logo rasterized into a screenshot. The Google logo should come from your existing OAuth button/provider asset; it is not recreated here.

**Do not change authentication behavior**. Phone + OTP remains primary, with Google and email as existing alternatives.

## Suggested use

Use `sponsor-hero.svg` / `merchant-hero.svg` in the right-hand mint panel as decorative artwork. Keep the text as real UI content, not part of the SVG. Use `object-fit: contain` and position towards the panel bottom. Hide or reduce the hero art on narrow screens.

Visual tokens are approximate, not official brand specifications. Verify against Kura's brand book before release.
