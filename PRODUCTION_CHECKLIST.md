# Production checklist — y[AI]r studio

A short, practical pre-ship checklist. Run through this before publishing any new surface (site update, deck, case study, carousel, mock).

> The brand is **always** written **`y[AI]r studio`** — lowercase `y` and `r`, **uppercase `AI`** inside square brackets. Never `y[ai]r`, `Yair Studio`, `y-AI-r`, or `y — AI — r`.

---

## Brand

- [ ] Every occurrence of the brand reads `y[AI]r studio`.
- [ ] `AI` is uppercase everywhere it appears (wordmark, copy, alt text, page titles, OG metadata, file names).
- [ ] No deprecated logo variant (`y — AI — r` / `y-AI-r`) is used as the primary mark.
- [ ] No Hebrew transliteration (`יאיר`, `יאיר סטודיו`) is used to refer to the studio in Hebrew copy.

## CSS

- [ ] `colors_and_type.css` validates (no missing braces, no unclosed comments).
- [ ] No hardcoded hex values in components — all colors come from `--bg-*`, `--fg-*`, `--accent*`, `--rule*`, `--ok`/`--warn`/`--err`.
- [ ] No broken selectors (`.foo .` with trailing dot, double `..`, etc.).
- [ ] Class names referenced in HTML/JSX exist in CSS (and vice versa).

## Logo / SVG

- [ ] `assets/wordmark.svg` (and variants) render correctly in `<img>`, inline, and PDF.
- [ ] No empty or misleading `<defs>` blocks; every SVG has explicit `fill` per `<text>`.
- [ ] Logo is legible at small size (compact mark ≥ 64px wide, full wordmark ≥ 88px wide).
- [ ] Logo retains identity at large size (no aliasing, brackets stay tight to `AI`).
- [ ] Right variant for the background: `wordmark.svg` on dark, `wordmark-light.svg` on light.

## Typography

- [ ] English surfaces use **Inter** (body) + **Geist Mono** (technical labels) — `--font-body-en` / `--font-mono-en`.
- [ ] Hebrew surfaces use **Assistant** (body) + **IBM Plex Mono** (small technical labels only) — `--font-body-he` / `--font-mono-he`.
- [ ] **Hebrew body never uses monospace.** Mono is reserved for `.mono`, `.code-label`, `.system-label`, `.metadata`, code blocks, and ≤14px technical labels.
- [ ] No deprecated JetBrains Mono + IBM Plex Sans pairing introduced in new work (legacy decks/case-studies excepted).
- [ ] No deprecated Miriam Libre Hebrew pairing introduced in new work.
- [ ] Type scale uses `--fs-*` tokens, not raw px.

## RTL / LTR

- [ ] English page root: `<html lang="en" dir="ltr">`.
- [ ] Hebrew page root: `<html lang="he" dir="rtl">`.
- [ ] Mixed Hebrew/English runs wrap LTR islands in `<span class="ltr-inline">` (or `dir="ltr"`): wordmark, `[AI]` motif, AI tool names, URLs, version numbers, dates, arrows (`→`), file paths.
- [ ] Layout uses logical properties (`start`/`end`, `inset-inline-*`) rather than physical (`left`/`right`) where direction matters.
- [ ] Hebrew section index reads `שירותים — 01` (label, en-dash, number) — not `01 — שירותים`.
- [ ] No `text-align: left` / `text-align: right` literally — use `start` / `end`.

## Carousel (LinkedIn)

- [ ] Slide canvas is **1080 × 1350 px** (LinkedIn portrait).
- [ ] Internal margins: 64px horizontal, 96px vertical.
- [ ] English slides are LTR. Hebrew slides are RTL with `<html lang="he" dir="rtl">`.
- [ ] Body text reads on mobile (Hebrew body ≥ 20px, English body ≥ 20px).
- [ ] Hebrew display headlines downsized ~6% from English equivalents (see `HEBREW.md` §18.1).
- [ ] Footer wordmark is Latin LTR; numeric page counter (`01 / 06`) wrapped in `dir="ltr"`.
- [ ] Page count in `.page-num` and `.slide-stamp` matches the actual deck length.
- [ ] Exported as a single multi-page PDF for the LinkedIn document post.

## Website

- [ ] Mobile (≤ 767px): single-column, nav wraps, no horizontal overflow.
- [ ] Tablet (768–1023px): 2-col services, 2×2 metrics.
- [ ] Desktop (≥ 1024px): full layout, 4-col metrics, 12-col grid honored.
- [ ] No horizontal overflow at any breakpoint.
- [ ] Single primary CTA visible above the fold on desktop and mobile.
- [ ] Hebrew variant (`index.he.html`) verified at the same three breakpoints.

## Accessibility

- [ ] Wordmark has `aria-label="y[AI]r studio"` (or `"y[AI]r"` for the bare lockup).
- [ ] Skip link is the first focusable element on every page.
- [ ] Visible focus state on every interactive element (universal `:focus-visible` rule — don't override).
- [ ] All buttons / links keyboard-reachable; no click-only `<div>`s.
- [ ] Tap targets ≥ 44px (height) for touch surfaces.
- [ ] `prefers-reduced-motion: reduce` honored — animations collapse to ~0.001ms; state-change feedback still works.
- [ ] Color contrast: body text on background ≥ 4.5:1 (WCAG AA); accent on background ≥ 4.5:1 for the `[AI]` knockout. Status colors paired with a glyph (`✓` / `✗`) — never color alone.
- [ ] Form labels real `<label>` elements; errors announced via `aria-live="polite"`.
- [ ] Images (if any) have descriptive `alt` (or `alt=""` for purely decorative).

## Docs

- [ ] Docs match the actual implementation (no claims about features that don't exist).
- [ ] No placeholder Hebrew content (`Lorem...`, untranslated English, etc.) remains in shipped docs.
- [ ] No conflicting instructions across `README.md`, `SKILL.md`, `HEBREW.md`, and the per-kit READMEs.
- [ ] Deprecated tokens / variants are explicitly marked deprecated, not silently kept.

---

## How to use this checklist

1. Open the surface you're shipping (site, deck, carousel, document).
2. Walk down the list, ticking each item.
3. Anything that fails is a blocker — fix it, then re-tick.
4. Brand spelling and font rules are non-negotiable; everything else is a quality gate.
