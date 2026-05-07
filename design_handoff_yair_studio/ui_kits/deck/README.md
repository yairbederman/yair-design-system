# Deck UI kit — y[AI]r studio pitch deck

8-slide pitch deck, 1920×1080, dark-first. Built on the `deck-stage.js` web component (keyboard nav with ←/→, print-to-PDF, speaker-notes hook).

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
