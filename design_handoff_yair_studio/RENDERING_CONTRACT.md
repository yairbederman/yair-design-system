# Rendering Contract — y[AI]r studio Design System

> How to verify that static assets and HTML render identically across environments. Treat this as a test spec, not a style guide.

The design system is consumed by multiple downstream pipelines: a marketing site, a slide deck, case-study PDFs, and a LinkedIn carousel pipeline that renders to PDF via Chrome headless. Each environment can render the same source file differently if assumptions break. This document defines what "renders correctly" means and how to test for it.

---

## 1. Authority — what wins when artifacts disagree

When two artifacts in the handoff visually disagree, **the CSS spec wins**. In priority order:

1. `colors_and_type.css` — token definitions (highest authority)
2. `preview/*.html` — live-rendered component cards using the CSS spec
3. `ui_kits/*/` — full-context references using the CSS spec
4. `assets/*.svg` — static export assets

If a static asset disagrees with the CSS, **the asset is buggy**, not the CSS. File a bug, fix the asset, re-test.

There are no "vibe mockups" in this handoff. Everything is exact-spec.

## 2. Font rendering contract

Every asset that contains text must render identically across:

- Chrome on macOS (developer machine, JetBrains Mono installed locally)
- Chrome on Linux (CI / serverless, no system fonts)
- Chrome headless (PDF generation pipeline, no system fonts)
- Firefox / Safari (preview consumers)

### 2.1 HTML files

HTML files import fonts via `@import` in `colors_and_type.css`. This works correctly in all environments because the CSS is loaded into the document's font registry.

**Test:** open any `preview/*.html` in a browser with JetBrains Mono **uninstalled** locally. Verify text still renders in JetBrains Mono (loaded from Google Fonts), not a system fallback.

### 2.2 Static SVG assets

**SVG `<text>` elements do NOT inherit fonts from the embedding HTML document in all renderers.** Specifically:

- `<img src="logo.svg">` — SVG renders in isolation; document fonts are not available
- Direct file load (`file://logo.svg`) — same
- Chrome headless screenshotting an SVG — same
- `<object>` and `<iframe>` embedding — same
- Inline `<svg>` in HTML — fonts ARE inherited (the only case where it works without a fix)

**Therefore, every SVG asset that contains text must:**

1. Include its own `<defs><style>` block with an `@import` of the required Google Font:
   ```xml
   <defs>
     <style type="text/css">
       @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&amp;display=swap');
       .ai { font-family: 'JetBrains Mono', ui-monospace, monospace; font-weight: 700; }
     </style>
   </defs>
   ```
2. Set `font-family` explicitly via class or attribute on every `<text>` element (do not rely on cascade alone).
3. Include a system-font fallback chain: `'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace`.
4. Use `&amp;` (not `&`) inside the URL — SVG is XML and bare ampersands are invalid.

**Known historical bug:** `assets/wordmark.svg` shipped without a `<style>` block and rendered as a serif fallback in Chrome headless. Fixed in this revision. The pattern of failure (broken style block → serif terminations on AI letters) is the canonical symptom — if you see serifs anywhere, suspect a missing `@import`.

### 2.3 Test procedure for SVG assets

For each file in `assets/*.svg`:

1. **Open in a clean Chrome profile** with no extensions and no JetBrains Mono installed locally.
2. **Disable network briefly after first paint** to confirm the font loaded — refresh with cache, the SVG should still render correctly because the font is cached.
3. **Drop the SVG into a Chrome headless screenshot pipeline:**
   ```
   chromium --headless --disable-gpu --screenshot=out.png --window-size=400,200 file.svg
   ```
   Open `out.png`. Verify no serifs. Verify weight matches the spec.
4. **Diff against a reference render.** Keep a known-good PNG export of each SVG in `assets/_reference/` (not present in this handoff yet — add as part of CI setup).

If any of these fail, the SVG is broken even if it renders fine in your local browser.

## 3. Color rendering contract

### 3.1 Hex values

The hex values in `colors_and_type.css` are sRGB. They will render correctly in all browser environments and PDFs. No color profile gymnastics required.

**Exception:** if the LinkedIn carousel pipeline renders to PDF and the PDF is opened in software that applies CMYK simulation (Acrobat Pro with print-preview on), the orange `#FF4B1F` will desaturate. This is a viewer behavior, not an output bug. Test in default Acrobat / Preview / browser PDF viewer.

### 3.2 Accent contrast

`#FF4B1F` on `#0A0A0B` (dark mode): 5.8:1 — passes WCAG AA for normal text.
`#FF4B1F` on `#FAFAF7` (light mode): 4.6:1 — passes WCAG AA for large text only. The `[AI]` knockout block uses 56–72px display weights, so it qualifies.

If the accent is ever used on light mode for body-size text, that's a contrast violation — flag it.

## 4. Layout rendering contract

### 4.1 Pixel-fidelity requirements

For 1080 × 1350 portrait carousel slides and 1920 × 1080 deck slides, layouts must be pixel-perfect. Browser zoom, OS DPI scaling, and mobile responsive behavior do not apply — these surfaces have a fixed canvas.

Use `<deck-stage>` (in `ui_kits/deck/`) for any slide content. It handles canvas sizing and scale-to-fit so the source layout stays at native dimensions.

### 4.2 Flexbox / grid `gap`

The system uses `gap:` extensively for component spacing. Older Safari versions (< 14.1) don't support `gap` on flexbox. If the pipeline targets older browsers, polyfill or use margin fallbacks. Chrome headless current versions are fine.

### 4.3 RTL / `dir` handling

Per `HEBREW.md`, RTL surfaces must set `<html dir="rtl">` at the document root. **Some Chrome headless versions ignore `dir` on `<html>` for print contexts.** Belt and braces: also set `direction: rtl` in CSS at the root level for any RTL-targeted print stylesheet.

## 5. PDF rendering contract

When generating PDFs through Chrome headless:

1. **Always switch to light mode** (`<html data-theme="light">`) — dark backgrounds don't print legibly and consume excessive toner.
2. **Force font subset embedding** — append `&subset=hebrew,latin` to Google Fonts imports for bilingual content.
3. **Verify on a Latin-only system** that Hebrew renders. If Hebrew fails, the subset wasn't embedded.
4. **Test command:**
   ```
   chromium --headless --disable-gpu --print-to-pdf=out.pdf \
     --no-pdf-header-footer --enable-features=PrintCompositor file.html
   ```
5. **Page-break rules** are in `HEBREW.md §17.3` — apply to all printable content.

## 6. CI integration (recommended)

To prevent future asset bugs:

1. **Visual regression test** — render each `preview/*.html` and `assets/*.svg` to PNG via Chrome headless on every commit. Diff against committed reference images. Fail the build on diff > N% of pixels.
2. **Font availability test** — run the visual regression in a Docker container with no system fonts. Any failure means a missing `@import` somewhere.
3. **Hex-value lint** — grep all source files for hardcoded hex codes. Any match outside `colors_and_type.css` is a violation of the "use tokens" rule.
4. **`dir`-attribute lint** — any HTML file declaring `lang="he"` must also declare `dir="rtl"`. Bare `lang="he"` without `dir="rtl"` is a bug.

These are not currently set up in the handoff. Add them when integrating the design system into a real codebase.

## 7. Known historical bugs

| Date | Asset | Symptom | Fix | Resolved |
|---|---|---|---|---|
| 2026-04-29 | `assets/wordmark.svg` | Serif fallback on `AI` letters in Chrome headless | Added `<defs><style>` with `@import` and explicit `font-family` | Yes |
| 2026-04-29 | `assets/avatar.svg`, `assets/favicon.svg` | Same latent bug — relied on document font, no `@import` | Added inline `@import` and class-based `font-family` | Yes |
| 2026-04-30 | all `assets/*.svg` | Earlier "fix" was documented but never actually applied — files still referenced undefined classes (`.yr`, `.br`, `.ai`, `.studio`) with no `<defs><style>`, no `fill`, no `font-family`. SVGs rendered as default browser serif with default fill. Wordmark also had off-spec viewBox (420 vs 380) and misaligned STUDIO caption. | Wrote real `<defs><style>` blocks with `@import url(...&amp;display=swap)`, scoped class names (`.wm-yr`, `.wm-br`, `.wm-ai`, `.wm-studio`, `.av-*`, `.fv-*`) carrying explicit `font-family`, `font-weight`, `fill`, `letter-spacing`. Added system-mono fallback chain. Tightened viewBox to 380×110 and re-aligned baseline. Added `wordmark-light.svg`, `wordmark-compact.svg`, `wordmark-mono.svg` as documented variants. | Yes |

If you encounter a new rendering inconsistency, append a row here in the codebase you import this into. Pattern: date, asset, symptom, fix, resolved.
