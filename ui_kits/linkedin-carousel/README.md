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
- Mono is allowed on technical labels: page counter, metric context line,
  eyebrow stamps when they contain Latin runs. These labels still follow
  the carousel readability floor (≥ 28 px) — no meaningful carousel text
  renders below 28 px after LinkedIn compression.
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
| Small technical labels (≥ 28 px floor) | **Geist Mono** (`--font-mono-en`) | **IBM Plex Mono** (`--font-mono-he`) — only where the label is genuinely technical / numeric / metadata |

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
- Internal padding tokens (canonical, defined in `shared/carousel.css`):
  - `--pad-x: 96px` (horizontal gutter, both sides)
  - `--pad-top: 112px` (top gutter)
  - `--pad-bottom: 144px` (bottom gutter — pulls the footer above the
    LinkedIn overlay reserve)
  - `--linkedin-bottom-reserve: 120px` (no important content inside this
    bottom band; `--pad-bottom` already accounts for it)
- The slide auto-scales to the viewport on screen but exports at 1:1.
- Safe area: keep important text inside the `.slide-frame` — never let
  body or display copy enter the outer gutter defined by the tokens
  above. The shared rule already enforces this; do not override.
- Readable at LinkedIn feed size: body ≥ 46 px, metadata/footer ≥ 28 px,
  metric hero defaults to 220 px. Don't shrink below these to fit longer
  copy — rewrite the copy instead.

### Authoring constraints (V4)

- **Metric hero (`.metric-hero`).** Default font-size is **220 px**, sized to
  fit the 888 px slide-frame content width for 4–5 character values plus a
  short unit (`1,300/wk`, `12,500/mo`, `−80%`, `$1.4M`). Shorter values
  (≤3 characters, no unit) may inline-override `font-size` up to **280 px**
  on the element. The shared rule applies `white-space: nowrap` and
  `max-width: 100%` defensively but deliberately does **not** clip — if a
  metric still overflows after override, shorten the value or unit.
- **CTA footer left text caps at ~36 characters** at 28 px before it
  visually merges with the page-num at LinkedIn 25 % feed thumbnail.
  Longer handles should wrap, truncate, shorten, or split into a
  wordmark + handle lockup. The shared rule adds a `gap: 32 px`
  between footer ends so short handles never collide; long handles
  must still be authored short.
- **CTA footer in `03-cta.html`.** The footer left text wraps in
  `<span class="wordmark-slot">` to match the other 10 templates. In
  Hebrew, the slot is overridden inline to `direction: rtl` so Hebrew
  copy reads right-to-left while the Latin handle stays isolated as
  `dir="ltr"`. Keep this parity when editing the HE CTA template.

### LinkedIn readability rules (post-compression)

- **Body text** ≥ **46 px**.
- **Metadata, eyebrows, page numbers, footer text** ≥ **28 px**.
- **Metric hero** defaults to **220 px** (see authoring constraint above
  for the 280 px override ceiling).
- **No meaningful carousel text below 28 px** — including mono labels,
  page counters, and metric context lines. The previous "≤ 14 px" mono
  guidance from earlier kits does not apply to LinkedIn carousels.
- **Logo assets** (canonical):
  - Footer logo (every slide except the CTA): `assets/wordmark-compact.svg`.
  - CTA / larger logo lockup (`03-cta.html`): `assets/wordmark.svg`.
  - The bracket text `y[AI]r studio` (`<span class="wordmark">` /
    `shared/inline-written-brand.html`) is the **inline written-brand
    spelling**, used inside running copy. It is **not** used as the
    visual carousel logo on any slide — footers and CTA lockups must
    use the SVG assets above.
- The bottom `--linkedin-bottom-reserve` (**120 px**) of every slide is
  reserved for the LinkedIn overlay UI. No important content, footer,
  or branding may sit inside that band. The shared `--pad-bottom: 144px`
  token already pulls the footer above the reserve — do not override it.
- Side gutters use `--pad-x: 96px`; top gutter uses `--pad-top: 112px`.
- Prefer short chunks over paragraphs when authoring slides.

These rules are enforced in `shared/carousel.css`. Don't edit slide
templates just to reduce text density — that belongs in the
carousel authoring/content rules, not the renderer.

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
only, **not** the visual carousel logo. The bracket text never appears
as the slide logo. For carousel footers use `assets/wordmark-compact.svg`;
for the CTA / larger logo lockup use `assets/wordmark.svg`.

---

## Visual direction

Technical · premium · minimal · dark · sharp · high-contrast · practical.

Avoid generic AI stock visuals, glow-bot imagery, gradients, and viral-hook
tricks. One CTA per carousel, one accent per slide. English and Hebrew
templates share the same visual system — they are not two separate
languages, they are one carousel kit in two scripts.
