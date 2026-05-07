# Case study UI kit

A long-form, dark, single-page document template for case studies and project write-ups.

## Anatomy

- Top header: brand + doc metadata (case study number, date, classification)
- Eyebrow + h1 + deck (lead paragraph)
- 4-up meta grid (client / role / duration / stack)
- H2/h3 sectioning with the section "no spec, no code" + "ai-assisted dev, on rails" rhythm
- An ASCII before/after diagram as the hero visual
- 4-up results metrics with `−80%` style deltas
- One pulled quote with accent border
- "what's next" bullet list
- Doc footer

## Variations to add

- **Proposal mode** — swap the eyebrow to `proposal · 004`, the metrics block becomes "scope / timeline / price."
- **Light print mode** — wrap `<article>` in `<html data-theme="light">` for printable PDFs (light tokens already in `colors_and_type.css`).
