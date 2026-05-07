# Website UI kit — y[AI]r studio

Single-page marketing site. Sticky nav, hero with cursor-blink wordmark, four-section narrative (services → approach → work → contact), thin footer.

## Components

### English (LTR) — `index.html`
- `Nav.jsx` — sticky top bar, brand + nav + primary CTA
- `Hero.jsx` — title + lead + meta strip with dot-grid background
- `Services.jsx` — 2×2 indexed cards
- `Approach.jsx` — ASCII pipeline diagram + 4 outcome metrics
- `Work.jsx` — case-study list with status chips
- `Contact.jsx` — 5-field form + footer

### Hebrew (RTL) — `index.he.html`
Parallel set of components: `Nav.he.jsx`, `Hero.he.jsx`, `Services.he.jsx`, `Approach.he.jsx`, `Work.he.jsx`, `Contact.he.jsx`. Same shape, translated copy, `dir="ltr"` islands for the wordmark, AI tool names, numerics, arrows, dates, and emails per `HEBREW.md` §1, §6.

### Preview harness — `preview.html`
Side-by-side device frame switcher: language (en/he), viewport (mobile 375 / tablet 768 / desktop 1280 / fluid), reduced-motion simulation, and a focus-ring overlay for keyboard audits. Use this to sanity-check layouts before shipping.

## Patterns demonstrated

- Section indices (`01 — services`)
- Bracketed wordmark with cursor blink on hero
- ASCII flow diagrams as a hero motif
- Metric type with `−80%` style deltas
- All buttons in lowercase mono, bracketed via `::before/::after`

---

## Phase 5 — Responsive, RTL, and accessibility

### Breakpoints (defined in `site.css`)

| Range | Behavior |
|---|---|
| **≤ 767px** mobile | Single-column. Hero `64 → 56px`. Nav links wrap to a second row under the brand. Services, work, contact form, footer all stack. |
| **768–1023px** tablet | 2-col services, 2×2 metrics. Work rows collapse from 4 cols to 3 (role merges into meta block). |
| **≥ 1024px** desktop | Full layout. 2×2 services, 4-col metrics, 4-col work rows. |

### How to preview

1. Open `preview.html` for the harness. Toggle language and viewport from the sidebar.
2. Standalone: `index.html` (English) / `index.he.html` (Hebrew).
3. To check a real device, open the standalone files and resize the browser — there are no JS-only breakpoints; everything is CSS.

### How to test Hebrew RTL

- Open `index.he.html` directly, **or** flip the language toggle in `preview.html`.
- Verify the wordmark stays Latin LTR in both nav and footer (per `HEBREW.md` §1).
- Verify `[AI]` knockout in the wordmark + ASCII diagram both stay LTR.
- Verify `−80%` style metrics keep the `−` prefix on the *number* side, not flipped (the `dir="ltr"` wrap on the metric block handles this; see §6).
- Verify the section index reads `שירותים — 01` (label, en-dash, number) — not `01 — שירותים`.
- Verify body alignment anchors to the right (reading-start), not left.

### Accessibility rules

| Rule | Implementation |
|---|---|
| Skip link | First focusable element on every page; `.skip-link` in `site.css`. |
| Wordmark a11y label | `aria-label="y[AI]r studio"` on the `<a className="brand">` element + `.sr-only` text in the hero stack. |
| Visible focus | Universal `:focus-visible` rule in `colors_and_type.css` — 2px accent outline, 2px offset. Don't override per-component. |
| Keyboard nav | All interactive elements are real `<a>` / `<button>` / form controls — no click-only divs. |
| Tap targets | `.btn`, nav links, footer links enforce `min-height: 44px` regardless of font size. |
| Form labels | Every input is wrapped in a `<label>` with a `.label-mono` caption. |
| Color contrast | Body text `#A0A0A8` on `#0A0A0B` ≥ 7:1 (AAA). Accent `#FF4B1F` on `#0A0A0B` ≥ 4.5:1 (AA). |
| Color-alone | Status chips combine color + `✓` glyph + status text — never color alone. |
| Form errors | `aria-live="polite"` region in the contact submit row for status messages. |
| Alt-text guidance | The site is typographic — no images. If portraits/screenshots are added, every `<img>` needs descriptive `alt` (or `alt=""` for purely decorative). |

### Reduced motion

The brand has light motion (cursor blink, hover transitions, smooth scroll). All of it is gated by:

```css
@media (prefers-reduced-motion: reduce) { … }
```

…in `colors_and_type.css`. Animations collapse to `0.001ms` (effectively off) but state-change feedback (hover color, focus outline) still works. The cursor-blink in the hero stops blinking — the underscore stays visible.

To test without changing OS settings: `preview.html` → check **reduced motion**.

### Brand spelling rule

The brand is **always** written `y[AI]r studio`:

- lowercase `y` and `r`
- **uppercase** `AI` inside square brackets — never `ai`, never `[ai]`, never `[בינה]`
- lowercase `studio`
- in Hebrew copy, the wordmark is wrapped in `dir="ltr"` so the brackets render in the correct visual order

---

## Notes

- Form is non-functional (sets local state on submit). Wire up to a real endpoint when productionised.
- No images used — brand is typographic.
- Hebrew components import the same `site.css`. Direction-specific rules live under `[dir="rtl"]` selectors in the same file (single source of truth).
