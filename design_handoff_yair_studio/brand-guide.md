# y[AI]r studio — Design System

> Note: this is a frozen handoff snapshot. For the current design system rules, see /README.md and /HEBREW.md.

> AI isn't coming. It's here. Most teams are still experimenting; we ship.

This is the design system for **y[AI]r studio**, the independent AI systems practice of Yair — an R&D leader with 20+ years building engineering teams, now helping organizations move from AI demos to production.

The wordmark itself is the brand idea: **y[AI]r**. The "ai" sits inside the name, bracketed and accented, so the specialism is unmistakable at a glance.

---

## Brand context

- **Practitioner:** Yair — R&D Manager (Lognet Systems, ex-Rakuten Viber, ex-888.com), Independent AI Systems Architect
- **Promise:** ship AI systems that survive contact with production. Verification gates, human-in-the-loop, error handling — not demos.
- **Headline services:**
  - Agentic Feature Lifecycle (intake → spec → tasks → implementation → QA)
  - Spec-to-code acceleration (Claude Code, Antigravity, Copilot)
  - AI-first engineering culture & process retrofit
  - Personal/internal AI agents (RAG, scheduling, content)
- **Audience:** engineering leaders, CTOs, founders, R&D managers in mid-market and enterprise teams that have piloted AI and now need it to land.
- **Voice:** direct, opinionated, slightly contrarian. Plain English. No hype words.

## Sources used

This system was built without an existing codebase, Figma file, or prior brand assets. It is a **net-new identity** derived from the founder's bio (LinkedIn-style résumé pasted into the brief) and selected defaults:

- Personality: Sharp & technical (terminal/developer aesthetic)
- Color: Dark-first with a single electric accent
- Typography: Mono-led — JetBrains Mono headings + IBM Plex Sans body
- Logo direction: bracketed `y[AI]r` with `[AI]` accented
- Imagery: abstract / generative (grids, dot patterns, ASCII, system diagrams)

If/when real assets exist (a custom logo file, brand photography, an actual marketing site), drop them in `assets/` and update the relevant tokens in `colors_and_type.css`.

---

## Index

```
README.md                  ← you are here
SKILL.md                   ← agent skill manifest
colors_and_type.css        ← tokens (color + typography), import this
fonts/                     ← webfonts (loaded via Google Fonts CDN; see notes)
assets/                    ← logos, marks, generative bg pieces, favicon
preview/                   ← Design System tab cards (700×~150)
ui_kits/
  website/                 ← marketing site (yair.studio)
  deck/                    ← pitch deck template (16:9)
  case-study/              ← proposal / case study document template
```

### Quickstart for designers / agents

1. Import tokens: `<link rel="stylesheet" href="../colors_and_type.css">`
2. Use semantic vars (`--fg-1`, `--bg-1`, `--accent`, `--font-display`) — never raw hex.
3. Render the wordmark with the `.wordmark` class so `[AI]` gets the accent automatically.
4. Pull components from `ui_kits/website/` or `ui_kits/deck/`. Don't redraw what already exists.
5. For new screens, follow Visual Foundations (below). When in doubt: more whitespace, less chrome, mono > sans, accent sparingly.

---

## Content fundamentals

**Voice:** first-person singular ("I help…"), occasionally first-person plural for the studio ("we ship"). Address the reader as **you**.

**Tone:** direct, slightly contrarian, confident without bragging. Stand for something. Specifically: against AI hype theatre, against demos that don't ship, against process for process's sake.

**Casing:**
- Headlines: **sentence case** (not Title Case, not ALL CAPS).
- Wordmark: lowercase `y[AI]r`. Never capitalise the Y.
- Acronyms: uppercase (AI, R&D, RAG, QA, CI/CD).
- UI labels and nav: sentence case.

**Punctuation:**
- Em dashes — used liberally for rhythm and qualification, like this.
- Periods at the end of sentences in body copy. Headlines may omit.
- No exclamation marks. None. Ever.
- Use the en-dash for ranges (2020–2026), em-dash for asides.

**Numbers, claims & metrics:** lead with the number. "Reduced rework 80%." "Cut bugs 25%." Always include the **before → after** when possible: `50% → 10%`. Never round up.

**Words to use:** ship, validate, gate, verify, in production, pragmatic, demo, leverage (verb only), bridge, throughput, throughput, predictability, retrofit, architect (verb).

**Words to avoid:** revolutionary, cutting-edge, world-class, synergy, leverage (noun), unleash, supercharge, game-changing, "AI-powered" as a marketing phrase. Avoid the word "solution" — say what it actually is.

**Emoji:** none in marketing. Light use allowed in case-study captions only (✓ for shipped, ✗ for didn't ship).

**Examples (use these as the template for new copy):**

> AI isn't coming — it's here, and most organizations are falling behind. I help teams stop experimenting and start shipping.

> No spec, no code. Validated requirements before a single keystroke — rework dropped 80%.

> 20 years of leading engineering teams taught me what ships and what stays a demo.

Avoid:

> ❌ Unleash the power of AI to revolutionize your workflows!
> ❌ Our cutting-edge AI solutions deliver world-class results.

---

## Visual foundations

### The central idea

The brand is built on the **bracketed `[AI]`** — typographic, not pictorial. Whenever the wordmark appears, the `[AI]` is set in the accent color, and often in a slightly heavier weight. Brackets are square, never round, never curly. This is the only "logo" — there is no separate icon mark. (If a square avatar is needed, set the bracketed `[AI]` alone, centered, on `--bg-2`.)

### Color

Dark-first. Two backgrounds, two foregrounds, one electric accent, one warning red. That's it.

| Token | Hex | Use |
|---|---|---|
| `--bg-0` | `#0A0A0B` | page background |
| `--bg-1` | `#111114` | card / surface |
| `--bg-2` | `#17171C` | elevated surface, modal |
| `--bg-3` | `#1F1F26` | hover surface |
| `--fg-1` | `#F5F5F2` | primary text (off-white, never pure) |
| `--fg-2` | `#A0A0A8` | secondary text |
| `--fg-3` | `#5A5A63` | tertiary, captions |
| `--accent` | `#FF4B1F` | the `[AI]`, links, focus rings, single CTA per view |
| `--accent-soft` | `#FF4B1F` @ 12% | accent backgrounds |
| `--rule` | `#26262E` | hairlines, dividers |
| `--ok` | `#7AE0A1` | shipped / passed |
| `--warn` | `#F5C518` | caution |
| `--err` | `#E5484D` | error |

A light-mode pair is provided in `colors_and_type.css` (`--mode: light`) but the brand defaults to dark. If a deck or doc is printed, switch to light mode — never print on the dark background.

### Typography

- **Display / headings:** JetBrains Mono — weights 400, 500, 700. Tight tracking on big sizes (`-0.02em`). Lowercase preferred.
- **Body:** IBM Plex Sans — weights 400, 500, 600. Reading size 16–17px, line-height 1.55.
- **UI labels / metadata / numbers:** JetBrains Mono 500, uppercase, tracked +0.08em, 11–12px.
- **Inline code & inline metrics:** JetBrains Mono 500, 0.92em of surrounding text, no background tint unless inside a code block.

Type scale (rem, base 16):
`12 / 13 / 14 / 16 / 18 / 21 / 28 / 36 / 48 / 64 / 88`

> Both fonts are loaded via Google Fonts (see `colors_and_type.css`). If/when self-hosted .woff2 files arrive, drop them in `fonts/` and the `@font-face` declarations are already wired.

### Spacing

8-point grid: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`. Section paddings on the marketing site are 96 / 128. Card paddings 24 / 32.

### Borders, radii, shadows

- **Borders:** 1px hairlines in `--rule`. Used to compose layouts (think: schematic, terminal box-drawing). Frequent.
- **Radii:** sparing. `--r-sm: 2px` (chips, code), `--r-md: 4px` (buttons, inputs, cards). Never above 8px. The brand reads "engineered" not "soft."
- **Shadows:** essentially none. Elevation comes from background lightness, not blur. The one exception: a 1px inner top highlight on elevated surfaces (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.04)`) to give a subtle "metal" quality.

### Layout & grid

- 12-column grid, 24px gutters, max content width 1200px on the marketing site.
- Heavy use of **rules** (1px lines) to demarcate sections — like a tech spec or a Bloomberg terminal, not a SaaS landing page.
- Section headers are stamped with a small uppercase mono index: `01 — services`, `02 — case studies`. This is a signature device.
- Asymmetric layouts preferred over centered hero patterns.

### Imagery & motifs

No photography. The brand is **typographic and schematic**. Use:

- **Dot grid background** (1px dots, 24px spacing, `--fg-3` at 20% opacity) — subtle, behind hero areas.
- **ASCII / box-drawing diagrams** for system illustrations — copied as text inside `<pre class="ascii-diagram">`.
- **Schematic flow diagrams** — boxes with hairline borders, mono labels, arrows drawn in CSS or inline SVG with stroke `--fg-2`.
- **The bracketed motif** — `[…]` used decoratively around section titles, button labels (`[ book a call ]`), and metadata.

### Animation

Restrained. Easing `cubic-bezier(0.2, 0, 0, 1)` for everything, 160ms default, 240ms for layout. Fades and small translates only — no bounces, no scale-in, no parallax. Cursor blink on the wordmark on the home hero (one element max).

### Hover & press

- **Hover (links, buttons):** background `--bg-3`, no color shift. Underline appears on text links (offset 4px, `--accent`).
- **Press:** the `[ ]` brackets around button labels briefly tighten — `letter-spacing: -0.04em` for 100ms. This is the brand's "physicality."
- **Focus:** 2px outline in `--accent`, 2px offset. Never remove.

### Transparency & blur

Avoid blur. Use opacity for state (disabled = 40%) and for the dot-grid background. Never glassmorphism.

### Cards

A card is a 1px hairline border on `--bg-1`, radius 4px, padding 24–32px. No shadow. No gradient. The corner ticks (`└`, `┘` etc) are a recurring motif — small mono characters in `--fg-3` at the corners of feature cards.

---

## Iconography

The brand uses **Lucide** icons (CDN: `https://unpkg.com/lucide@latest`) for any UI iconography — toolbar icons, list bullets, inline indicators. Lucide is chosen because:

- 1.5px stroke matches the hairline aesthetic
- Outlined-only (no fills) keeps things schematic
- Comprehensive enough that we don't need to draw our own

**Rules:**
- **Stroke 1.5px** always. Override Lucide's default 2px via `stroke-width="1.5"`.
- **Color `currentColor`**. Never colored icons except status (`--ok`, `--err`).
- **Size:** 16px inline with text, 20px in buttons, 24px in nav, 32px+ as feature glyphs.
- **No filled icons. No emoji in UI.** Emoji allowed only as the `✓ / ✗` shorthand in case-study tables.
- **Box-drawing characters** (`├ ─ └ ┐ ▌ ▎`) are used decoratively as part of the visual language — they're typography, not icons.

If a needed icon isn't in Lucide, file an issue — don't draw a one-off SVG. Keeping the family is more important than the perfect glyph.

> **Substitution flag:** The brand has no proprietary icon set. Lucide is the chosen substitute. Replace this section if a custom set is ever commissioned.

---

## Font substitution flag

JetBrains Mono and IBM Plex Sans are both **loaded from Google Fonts**, which is the canonical source for both. No substitution. If you need self-hosted `.woff2` files for a print/offline deliverable, they're available from the official repos (linked in `fonts/README.md`).

---

## Product-brand architecture (rule)

**y[AI]r studio is a personal expert / studio brand.** It is **not** a generic product brand. Productized vertical offers (e.g. **VoiceEngine**) live alongside the studio under a clear "by y[AI]r studio" attribution — they do **not** inherit the studio's first-person consulting voice, and the studio identity is **not** widened to accommodate them.

- y[AI]r studio: consulting · workflow audits · AI systems implementation · strategy + build partner. First person ok.
- VoiceEngine: productized offer. Presented as **"VoiceEngine by y[AI]r studio"**. Speaks in product / outcome language. **No** _"I help…"_ copy.

Full rule, including what is intentionally NOT delivered (no VoiceEngine logo, no VoiceEngine design system) lives in `BRAND_ARCHITECTURE.md`.
