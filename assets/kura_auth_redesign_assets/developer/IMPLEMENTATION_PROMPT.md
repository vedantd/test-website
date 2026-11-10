# Kura role-specific authentication redesign: implementation brief

Redesign the **Sponsor** and **Merchant** authentication screens reached **after** the role-selection gateway. Do not modify that gateway.

## Experience

Use a shared responsive shell, form panel on white (about 45% desktop width), branded illustration panel on very light mint (55%), real Kura logo, existing locale switcher, and existing support widget. Sponsor and Merchant share exact layout and auth controls but have role-specific label, copy, and the `sponsor-hero` / `merchant-hero` artwork provided here.

Sponsor hero headline: **Support your loved ones, wherever they are.**  
Sponsor description: **Send support to family and friends so they can pay participating local merchants.**

Merchant hero headline: **Accept payments. Grow your business.**  
Merchant description: **Accept digital payments, manage your wallet, and keep your business moving with Kura.**

## Critical auth requirement

**Keep PHONE NUMBER as primary authentication**; country-code picker and OTP flow must stay intact. Preserve Google login and Login via email as their existing alternatives. The generated screenshots are design references, **not instructions to implement email/password login**. Do not introduce new passwords, sign-up methods, or auth providers. Keep the link `Not a Sponsor/Merchant? Choose another role` to the existing gateway.

## Engineering guardrails

- Inspect and use existing app routing, forms, auth hooks, localization, Kura logo, and UI primitives.
- Use SVG illustrations in `illustrations/`; raster PNG/WebP included if SVG isn't suitable in the app.
- Keep text as real semantic HTML/JSX, never baked into artwork.
- Form controls need full labels, proper validation, clear errors, loading states, and keyboard focus.
- A mobile layout should show the form first and hide the large illustration to shorten the path to auth.
- Use official Kura brand tokens if available; values in `styles/kura-auth-tokens.css` are approximations.
- Test Sponsor and Merchant routes, OTP, Google, email navigation, language persistence, mobile widths, and accessibility.

## File usage

```tsx
const heroByRole = {
  sponsor: '/assets/kura-auth/sponsor-hero.svg',
  merchant: '/assets/kura-auth/merchant-hero.svg',
};
// <img src={heroByRole[role]} alt="" aria-hidden="true" />
```

Avoid `aria-label` on decorative inline SVGs if they are hidden from screen readers. Use the SVG files as normal images or remove their built-in role/label for decorative inlining.
