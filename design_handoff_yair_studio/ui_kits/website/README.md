# Website UI kit — yair.studio

Single-page marketing site. Sticky nav, hero with cursor-blink wordmark, four-section narrative (services → approach → work → contact), thin footer.

## Components

- `HdfNav.jsx` — sticky top bar, brand + nav + primary CTA
- `HdfHero.jsx` — title + lead + meta strip with dot-grid background
- `HdfServices.jsx` — 2×2 indexed cards
- `HdfApproach.jsx` — ASCII pipeline diagram + 4 outcome metrics
- `HdfWork.jsx` — case-study list with status chips
- `HdfContact.jsx` — 5-field form + footer (defines `HdfContact` + `HdfFooter`)

## Patterns demonstrated

- Section indices (`01 — services`)
- Bracketed wordmark with cursor blink on hero
- ASCII flow diagrams as a hero motif
- Metric type with `−80%` style deltas
- All buttons in lowercase mono, bracketed via `::before/::after`

## Notes

- Form is non-functional (sets local state on submit). Wire up to a real endpoint when productionised.
- No images used — brand is typographic. If portrait of Yair becomes needed, add `assets/yair.jpg` and add a `<figure>` slot in About (currently merged into Work as the "independent" row).
