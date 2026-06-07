---
name: yair-studio-design
description: Use this skill to generate well-branded interfaces and assets for y[AI]r studio (independent AI systems practice), either for production or throwaway prototypes/mocks/decks/case studies/LinkedIn carousels. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `README.md` within this skill first, and explore the other files. Key entry points:

- `README.md` — brand context, voice, content fundamentals, visual foundations, iconography
- `HEBREW.md` — Hebrew/RTL addendum (fonts, wordmark behavior, voice, motif rules, print/PDF, carousel geometry)
- `colors_and_type.css` — drop-in tokens (CSS vars + base styles + utility classes)
- `assets/` — `wordmark.svg` (block primary), `wordmark-accent.svg`, `wordmark-light.svg`, `wordmark-compact.svg`, `wordmark-mono.svg`, `avatar.svg`, `favicon.svg`
- `preview/` — small HTML cards demonstrating each token cluster
- `ui_kits/website/` — full marketing-site recreation, EN + HE
- `ui_kits/deck/` — 8-slide pitch deck on `deck-stage.js`
- `ui_kits/case-study/` — long-form dark document template
- `ui_kits/linkedin-carousel/` — 1080×1350 LinkedIn carousel starter, EN + HE
- `PRODUCTION_CHECKLIST.md` — short pre-ship checklist

When creating visual artifacts, copy assets out and create static HTML files. Always import `colors_and_type.css`.

**Visual logo vs written brand** — these are different:
- **Visual logo** (header, hero, deck title, social card): use `assets/wordmark.svg` (block lockup `y - [AI block] - r`). For accent moments use `assets/wordmark-accent.svg`.
- **Avatar / favicon**: `assets/avatar.svg` and `assets/favicon.svg` — the `[AI]` block alone.
- **Written brand** (body copy, docs, accessible labels): always `y[AI]r studio` with square brackets around uppercase `AI`. Render inline via the `.wordmark` markup from `README.md`. Visual logo SVGs all carry `aria-label="y[AI]r studio"` so screen readers read the written brand even though the visual mark uses dashes.

For production code, copy `colors_and_type.css` and the relevant `ui_kits/*/` components and adapt; the system is dark-first, mono-led, schematic, with one copper accent (`#D96832`).

If invoked without other guidance, ask what to build (site update? deck slide? proposal doc? carousel? new feature mock?), confirm language (EN, HE, or both), then act as the brand's expert designer.

## Cardinal rules

- **Written brand spelling** is always **`y[AI]r studio`** — lowercase `y` and `r`, **uppercase `AI`** inside square brackets, lowercase `studio`. Never `y[ai]r`, `y-AI-r`, `y — AI — r`, `Yair Studio` in copy. The dash-flanked form belongs to the **visual logo only**, where it's rendered as an SVG block lockup — never as written text.
- The visual logo is the block lockup in `assets/wordmark.svg`. The avatar/favicon is the `[AI]` block alone.
- Sentence case headlines. No exclamation marks. Ever.
- One CTA per view. The accent color is for `[AI]`, links, and that one CTA.
- No filled icons. No emoji in marketing UI. No gradients. No glassmorphism. No bouncy animation.
- Lead with the number when stating outcomes (`−80% rework, 50% → 10%`).
- ASCII diagrams and box-drawing characters are part of the visual language — use them.

## Typography (the short version)

- **English (canonical):** Inter (body / UI) + Geist Mono (technical labels, code, accent text). Tokens: `--font-body-en`, `--font-mono-en`.
- **Hebrew (canonical):** Assistant (body / UI) + IBM Plex Mono (small technical labels only). Tokens: `--font-body-he`, `--font-mono-he`. Fallbacks: Heebo, Noto Sans Hebrew. **Hebrew body never uses monospace.**
- Set `<html lang="en" dir="ltr">` or `<html lang="he" dir="rtl">` once at the page root; `colors_and_type.css` swaps families automatically.
- **Deprecated (do not use for new work):** the legacy English pairing JetBrains Mono + IBM Plex Sans (`--font-display` / `--font-body` / `--font-mono`) is kept only so the deck and case-study UI kits keep rendering. The Miriam Libre Hebrew pairing in `HEBREW.md` §3 is also deprecated — use Assistant.
