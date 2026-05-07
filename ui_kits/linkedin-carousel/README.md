# LinkedIn Carousel Kit — y[AI]r studio

A production-ready kit for posting premium technical LinkedIn carousels in
**English (LTR)** and **Hebrew (RTL)**.

**Eleven** reusable slide types per language, all 1080 × 1350 px, ready to
export and upload as a LinkedIn document post without per-post cleanup.

---

## Template roster (canonical)

| # | Template | When to use |
|---|---|---|
| 01 | **Cover** | Open the carousel. Series eyebrow, hook headline, swipe cue. One per carousel. |
| 02 | **Content** | The default narrative slide — short lede + supporting body + one accent label. |
| 03 | **CTA** | Call to action + wordmark. Placed early in the roster so the deck can close on a punchline; in a real post the CTA still typically appears late. |
| 04 | **Big claim** | One declarative line as the whole slide. Use to break rhythm or stake a position. |
| 05 | **List / framework** | Numbered framework — "five reasons", "three principles", "four steps". Numbered rows. |
| 06 | **Before / after** | Two stacked panels with an "in production" hinge between them. Use for transformations. |
| 07 | **Mistake → correction** | Strike-through wrong take, then the corrected position underneath. Punchy didactic device. |
| 08 | **Process / workflow** | Numbered pipeline of steps with stage gates. Show how the work flows end-to-end. |
| 09 | **Case** | Client + scope + stack + a single hero outcome number. Use sparingly — proof, not bragging. See the permission warning below before publishing. |
| 10 | **Metric / proof** | One giant number as the slide. Before→after context underneath. The strongest single-fact slide. |
| 11 | **Punchline / quote** | Final slide. Display quote with one accent word — closes the carousel. |

> **03-cta exists** as the canonical CTA slide; **11-punchline** is the canonical
> closer. There is no template numbered out-of-sequence and no missing 03 slot.

A single carousel **does not** need to use all 11 slides. A typical post is
**6–10 slides** — choose the templates that match the narrative and renumber
the page counters accordingly.

---

## Case-study usage — permission warning

Before publishing case slides, confirm permission to use named clients,
exact dates, and exact metrics. If permission is missing, anonymize the
client and soften the metric.

---

## Recommended pairings

Each pairing assumes you renumber the page counters (`01 / N`, `02 / N`, …)
to match the actual slide count of the post.

| Post type | Suggested sequence |
|---|---|
| **Thought leadership** | cover · big claim · content · list · punchline |
| **Case study** | cover · content · case · metric · process · punchline |
| **Mistake / lesson** | cover · mistake · big claim · list · punchline |
| **Process breakdown** | cover · content · process · metric · cta · punchline |
| **Offer / CTA-led** | cover · big claim · before-after · case · cta · punchline |

The CTA slide can sit anywhere from slide 3 to the second-last position
depending on the goal of the post. The punchline always closes.

---

## File layout

```
ui_kits/linkedin-carousel/
  index.html                     ← preview all 11 × 2 slides side-by-side
  english/
    01-cover.html
    02-content.html
    03-cta.html
    04-big-claim.html
    05-list.html
    06-before-after.html
    07-mistake.html
    08-process.html
    09-case.html
    10-metric.html
    11-punchline.html
  hebrew/                        ← same 11 templates, RTL, Assistant body
    01-cover.html
    02-content.html
    03-cta.html
    04-big-claim.html
    05-list.html
    06-before-after.html
    07-mistake.html
    08-process.html
    09-case.html
    10-metric.html
    11-punchline.html
  shared/
    carousel.css                 ← role classes (.is-claim, .is-list, …)
    inline-written-brand.html    ← inline written-brand snippet (NOT the logo)
```

Every slide imports two stylesheets:

1. `colors_and_type.css` — the project tokens (root)
2. `shared/carousel.css`  — carousel-only role classes

---

## How to create a new carousel

1. Decide a sequence — pick 6–10 templates from the roster above.
2. Duplicate each template file into a topic folder
   (e.g. `english-shipping-discipline/`).
3. Edit only the copy. The role-class scaffolding stays put.
4. Update `slide-stamp` and `page-num` to match the new total
   (e.g. `01 / 07`, `02 / 07`, …).
5. Open `index.html` for a side-by-side preview, or open each file directly.

---

## Hebrew (RTL) rules — non-negotiable

- Page root **must** be `<html lang="he" dir="rtl">`.
- Slide article **must** keep `dir="rtl"` so direction inheritance survives
  if the slide is dropped into an LTR host.
- Body / headlines / list rows / process labels / case copy / quote copy
  use **Assistant** (`--font-body-he`) — never monospace.
- Mono is allowed only on small (≤14 px) technical labels: page counter,
  metric context line, eyebrow stamps when they contain Latin runs.
- The wordmark stays Latin and **always** wraps in `dir="ltr"` — it's a
  brand mark, not a translatable string.
- Latin runs (AI tool names, URLs, page numbers, the wordmark, percentages
  with a leading minus) wrap in `<span dir="ltr">…</span>` so digits and
  brackets don't reorder.
- `process-step .num`, `list-rows .n`, `case-outcome .num` and
  `metric-hero` are all locked LTR via `unicode-bidi: isolate; direction: ltr`
  in `carousel.css` — leave them alone.
- Hebrew templates are intentionally RTL — not lazy mirrored English.
  List numerals, process arrows, and mistake/correction flow read RTL.
- Brand spelling **always** `y[AI]r studio`. Never `יאיר`. Never `[ai]`.

---

## Font rules (canonical)

| Surface | English | Hebrew |
|---|---|---|
| Body / headlines / list rows / quotes | **Inter** (`--font-body-en`) | **Assistant** (`--font-body-he`) |
| Small technical labels (≤14 px) | **Geist Mono** (`--font-mono-en`) | **IBM Plex Mono** (`--font-mono-he`) — only where the label is genuinely technical / numeric / metadata |

- Hebrew main text **never** uses Geist Mono.
- Hebrew main text **never** uses Inter.
- English technical labels (eyebrow, page counter, mono callouts) use Geist Mono.
- All four font tokens are defined once in `colors_and_type.css` —
  do not redefine them inside the carousel kit.
- The carousel kit uses only the canonical `*-en` / `*-he` tokens. Legacy
  `--font-body` / `--font-mono` tokens are not referenced here.

This matches the canonical Phase 3 typography system used by the website
and the deck.

---

## Slide size & export — 1080 × 1350

- Canvas: **1080 × 1350 px**, dark, full-bleed, portrait.
- Internal margins: 64 px horizontal, 96 px vertical (`HEBREW.md §18.2`).
- The slide auto-scales to the viewport on screen but exports at 1:1.
- Safe area: keep important text inside the `.slide-frame` — never let
  body or display copy touch the outer 64 px / 96 px gutter. The shared
  rule already enforces this; do not override.
- Readable at LinkedIn feed size: body ≥ 28 px, list/process labels ≥ 24 px,
  metric hero ≥ 200 px. Don't shrink below these to fit longer copy —
  rewrite the copy instead.

### Export to PNG / PDF

Recommended — Chrome headless print (one PDF per slide, then merge):

```
chromium --headless --disable-gpu \
  --print-to-pdf=01-cover.pdf \
  --no-pdf-header-footer \
  --window-size=1080,1350 \
  english/01-cover.html
```

Repeat per slide, then merge into a single multi-page PDF for the LinkedIn
document post.

Or simpler — open each slide in Chrome at 1080 × 1350, take a full-page
screenshot (DevTools → ⋮ → "Capture full size screenshot"), upload the PNG
sequence as a LinkedIn carousel.

LinkedIn carousel posts accept a multi-page PDF — combine the per-slide PDFs
in order.

---

## Brand spelling — non-negotiable

The brand is always written **`y[AI]r studio`**:

- lowercase `y` and `r`
- **uppercase `AI`** inside square brackets — never `ai`, never `[ai]`
- `studio` lowercased after a single space
- Latin script in both English and Hebrew copy
- never substitute dashes (`y-AI-r`) or translate to `יאיר`

The reusable inline written-brand snippet is in
`shared/inline-written-brand.html` — typographic spelling for inline use
only, **not** the primary visual logo. For carousel footers and CTA logos,
use the SVG logo assets (`assets/wordmark.svg`, `assets/wordmark-compact.svg`,
`assets/wordmark-accent.svg`).

---

## Visual direction

Technical · premium · minimal · dark · sharp · high-contrast · practical.

Avoid generic AI stock visuals, glow-bot imagery, gradients, and viral-hook
tricks. One CTA per carousel, one accent per slide. English and Hebrew
templates share the same visual system — they are not two separate
languages, they are one carousel kit in two scripts.
