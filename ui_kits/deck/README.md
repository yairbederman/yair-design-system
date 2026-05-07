# Deck UI kit — y[AI]r studio pitch deck

8-slide pitch deck, 1920×1080, dark-first. Built on the `deck-stage.js` web component (keyboard nav with ←/→, print-to-PDF, speaker-notes hook).

## Typography — canonical

The deck uses the **canonical Phase 3 typography system** (matches the website + LinkedIn carousel):

| Role | English | Hebrew |
|---|---|---|
| Body / display headlines | **Inter** (`--font-body-en`) — 400/500/600/700 | **Assistant** (`--font-body-he`) |
| Technical labels, slide stamps, metric numerals, captions | **Geist Mono** (`--font-mono-en`) | **IBM Plex Mono** (`--font-mono-he`) — small (≤14px) only |

Rules:

- **Headlines and body are Inter, not JetBrains Mono.** Display weight is 600.
- **Mono is reserved for technical surfaces** — the brand stamp, slide counter, section index numbers (`01 — the problem`), metric numerals (tabular-nums), comparison column headers, diagram `<pre>` blocks, quote citations, and closing-meta keys/values.
- **No body text uses monospace** — including bullet items inside the `.s-compare` columns, content paragraphs, and the title-slide tagline.
- Hebrew deck content (when added) follows the same split: Assistant for body/display, IBM Plex Mono only for ≤14px technical labels.

The deprecated `--font-display` / `--font-body` / `--font-mono` tokens (JetBrains Mono / IBM Plex Sans) are no longer referenced by `slides.css`. Legacy `slides.css` notes that mention them are kept only for historical context.

## Slide types covered

1. **Title** — full bleed wordmark + tagline, dot-grid background
2. **Section divider** — large numbered section title (`01 — the problem`)
3. **Comparison** — two-column ✗ / ✓ checklist
4. **Diagram** — ASCII pipeline as the hero element
5. **Metrics** — 4 big numbers with deltas + before→after
6. **Quote** — large display quote with one accent word
7. **Content** — h2 + 2-column body
8. **Closing** — CTA + contact meta

Common chrome on every slide: top stamp (brand + slide count), optional bottom caption.

## To extend

Add a new `<section class="slide s-{type}">` between `<deck-stage>` and copy the styling from `slides.css`. Slides auto-tag with `data-screen-label` so feedback in the editor pins to the right one.

## Preview / test

Open `ui_kits/deck/index.html`. Use ←/→ to step slides, `p` to print-to-PDF. Verify visually that:

- Headlines render in Inter (not JetBrains Mono).
- Slide stamps, metric numbers, ASCII diagram, and column headers stay in Geist Mono.
- The wordmark logo SVGs (`assets/wordmark.svg`, `assets/wordmark-compact.svg`) still render the block AI lockup unchanged.
