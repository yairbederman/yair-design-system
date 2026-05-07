# Handoff: y[AI]r studio — Design System

## Brand spelling — the cardinal rule

The brand is **always** written `y[AI]r studio`:

- lowercase `y` and `r`
- **uppercase `AI`** inside square brackets
- lowercase `studio`, single space after the lockup

**Never** write any of these:

| Wrong | Right |
|---|---|
| `y[ai]r` | `y[AI]r` |
| `Yair Studio` / `yair studio` | `y[AI]r studio` |
| `y-AI-r` / `y-ai-r` | `y[AI]r` (in copy — the dashes belong to the visual logo only) |
| `y — AI — r studio` | `y[AI]r studio` (visual logo uses dashes; written brand never does) |
| `יאיר סטודיו` / `יאיר` | `y[AI]r studio` (Latin in both languages) |

In Hebrew copy the brand stays Latin and is wrapped in `<span dir="ltr">…</span>` so the brackets render correctly. See `HEBREW.md` §1.

---

## Overview

**y[AI]r studio** is the independent AI systems practice of Yair, an R&D leader specialising in moving teams from AI demos to production. This handoff bundles the studio's net-new visual identity — typography, color, components, wordmark, and three reference UI kits (marketing site, pitch deck, case-study document).

The brand idea is the wordmark itself: **y[AI]r** — the specialism is baked into the name. The **primary visual logo** sets `AI` inside a cream knockout block with **black `AI` letters**, flanked by a lowercase `y` and `r` and subtle hairline dashes — all in muted gray. An **accent variant** swaps the cream block for the electric orange block (with cream `AI` letters) and is reserved for emphasis moments only — it is not the default logo color. The **written brand** stays `y[AI]r studio` — square brackets around uppercase `AI` — in all body copy, docs, and accessible labels. The `[AI]` block alone is the avatar / favicon mark.

This package gives a developer everything needed to recreate the system in a real codebase.

## About the design files

The HTML files in this bundle are **design references**, not production code. They are prototypes that show intended look, layout, and behavior. The job is to **recreate these designs in your target codebase's existing environment** (React, Vue, Svelte, SwiftUI, native, etc.) using its established patterns and libraries.

If no codebase exists yet, pick the framework that fits the project (the marketing site is React-friendly; the deck is plain HTML + a small custom element; the case-study document is plain HTML for print).

Use `colors_and_type.css` as the source of truth for tokens — those values are final.

## Fidelity

**High-fidelity (hifi).** All colors are final hex values. Spacing follows an 8-pt grid. Radii, borders, and motion easing are all specified. The reference HTMLs render at production fidelity — implement them pixel-faithfully.

Typography is bilingual. **The canonical pairing for new work is:**

- **English** — Inter (body / UI) + Geist Mono (technical labels, accent text, code)
- **Hebrew** — Assistant (body / UI) + IBM Plex Mono (small technical labels only)

Hebrew fallbacks: Heebo, then Noto Sans Hebrew. Hebrew body text **never** uses monospace.

> **Legacy English tokens** — JetBrains Mono and IBM Plex Sans are kept as `--font-display` / `--font-body` / `--font-mono` so existing English UI kits (the deck and case-study references in this bundle) keep rendering. **Deprecated for new work — use the `--font-body-{en,he}` / `--font-mono-{en,he}` tokens instead.**

All fonts load from Google Fonts (see `colors_and_type.css`).

---

## Design tokens

All tokens live in `colors_and_type.css` as CSS custom properties. **Never hardcode hex values in components — always use the variables.**

### Color (dark, default)

| Token | Hex | Use |
|---|---|---|
| `--bg-0` | `#0A0A0B` | page background |
| `--bg-1` | `#111114` | card / surface |
| `--bg-2` | `#17171C` | elevated surface, modal |
| `--bg-3` | `#1F1F26` | hover surface |
| `--fg-1` | `#F5F5F2` | primary text (off-white, never pure) |
| `--fg-2` | `#A0A0A8` | secondary text |
| `--fg-3` | `#5A5A63` | tertiary, captions |
| `--accent` | `#FF4B1F` | the `[AI]` block, links, focus rings, single CTA |
| `--accent-hover` | `#FF6238` | accent hover |
| `--accent-press` | `#E63E15` | accent press |
| `--accent-soft` | `rgba(255, 75, 31, 0.12)` | accent fill (chips, alerts) |
| `--accent-rule` | `rgba(255, 75, 31, 0.32)` | accent border |
| `--rule` | `#26262E` | hairlines, dividers |
| `--rule-strong` | `#34343E` | stronger borders, button outlines |
| `--ok` | `#7AE0A1` | shipped / passed |
| `--warn` | `#F5C518` | caution |
| `--err` | `#E5484D` | error |

### Color (light, for print)

A `:root[data-theme="light"]` block is in the CSS. Toggle by setting `data-theme="light"` on `<html>`. Use only for printed decks / proposals — the brand defaults to dark.

### Typography (canonical — Phase 3)

The bilingual pairing is the source of truth. Use the language-scoped tokens; they resolve via `[lang]` / `[dir]` selectors in `colors_and_type.css`.

| Role | English | Hebrew |
|---|---|---|
| Body / UI | `--font-body-en` — **Inter** (400/500/600/700) | `--font-body-he` — **Assistant** (400/500/600/700) — fallbacks: Heebo, Noto Sans Hebrew |
| Technical labels, metadata, code-like accents | `--font-mono-en` — **Geist Mono** (400/500/600/700) | `--font-mono-he` — **IBM Plex Mono** (400/500/600) — fallback: Noto Sans Hebrew |

Rules:

- **Body in either language is never monospace.** Mono is reserved for `.mono`, `.code-label`, `.system-label`, `.metadata`, code blocks, and small technical labels (≤14px).
- Set the page root once: `<html lang="en" dir="ltr">` or `<html lang="he" dir="rtl">`. The selectors in `colors_and_type.css` swap families automatically.
- For mixed-language strings, wrap LTR runs in `<span class="ltr-inline">…</span>` (and RTL in `.rtl-inline`). Always wrap the wordmark, AI tool names, URLs, version numbers, dates, and arrows (`→`) inside Hebrew copy.
- The brand is **always** written `y[AI]r studio` — uppercase `AI` — in both languages. See `HEBREW.md`.
- Live sample: `preview/bilingual-type.html`.

#### Deprecated English-only tokens

The original English brand used JetBrains Mono (display/mono) + IBM Plex Sans (body), exposed as `--font-display` / `--font-body` / `--font-mono`. **These are deprecated and kept only so the existing deck and case-study UI kits keep rendering.** New work should use `--font-body-en` / `--font-mono-en` instead. The old tokens still resolve, but they will not get new features.

Type scale (rem, base 16): `12 / 13 / 14 / 16 / 18 / 21 / 28 / 36 / 48 / 64 / 88` — exposed as `--fs-xs` through `--fs-6xl`.

Line heights: `--lh-tight: 1.05`, `--lh-snug: 1.2`, `--lh-body: 1.55`, `--lh-loose: 1.7`.

Tracking: `--tr-tight: -0.02em`, `--tr-tighter: -0.04em`, `--tr-wide: 0.04em`, `--tr-ui: 0.08em`.

Both fonts load from Google Fonts via `@import` in `colors_and_type.css`. Self-host `.woff2` if needed (sources noted in `fonts/README.md`).

### Spacing (8-pt grid)

`--s-1: 4px` · `--s-2: 8px` · `--s-3: 12px` · `--s-4: 16px` · `--s-5: 24px` · `--s-6: 32px` · `--s-7: 48px` · `--s-8: 64px` · `--s-9: 96px` · `--s-10: 128px`

Marketing site section paddings: 96 / 128. Card paddings: 24 / 32.

### Radii

`--r-sm: 2px` (chips, code) · `--r-md: 4px` (buttons, inputs, cards) · `--r-lg: 8px` (rare). Never above 8px.

### Borders & elevation

- 1px hairlines in `--rule`, used to compose layouts (think schematic / terminal).
- **No shadows.** Elevation comes from background lightness only.
- One exception: `--edge-top: inset 0 1px 0 rgba(255,255,255,0.04)` — a 1px inner top highlight for a subtle "metal" quality on elevated surfaces.
- Focus ring: `--focus-ring: 0 0 0 2px var(--bg-0), 0 0 0 4px var(--accent)`.

### Motion

- Easing: `cubic-bezier(0.2, 0, 0, 1)` for everything (`--ease`).
- Durations: `--dur-fast: 120ms`, `--dur: 160ms`, `--dur-slow: 240ms`.
- Restrained motion only. Fades and small translates. **No bounces, no scale-in, no parallax.**
- The button press has a signature: `[` `]` brackets tighten via `letter-spacing: -0.04em` for ~100ms.

### Layout

12-column grid, 24px gutters, max content width 1200px. Asymmetric layouts preferred over centered hero patterns.

---

## Components

These are defined as CSS classes in `colors_and_type.css`. Recreate each in your target framework's component conventions.

> **Note on font references below.** The component classes (`.btn`, `.chip`, `.input`, `.eyebrow`, etc.) currently resolve to the legacy `--font-mono` / `--font-body` (JetBrains Mono / IBM Plex Sans) so the deck and case-study UI kits keep rendering unchanged. New bilingual surfaces (website + LinkedIn carousel) drive these via the `--font-body-{en,he}` / `--font-mono-{en,he}` tokens. When recreating components in production, prefer the language-scoped tokens.

### Wordmark

**The single most important brand element.** Two structures — pick by whether you need the STUDIO caption.

**Lockup only** (the most common form — nav, footer, body copy):

```html
<span class="wordmark" aria-label="y[AI]r">
  <span class="wordmark-y">y</span><span class="wordmark-bracket">[</span><span class="wordmark-ai">AI</span><span class="wordmark-bracket">]</span><span class="wordmark-r">r</span>
</span>
```

**Lockup with STUDIO caption** (hero, deck title, case-study header). Wrap in `.wordmark-group`; add `.wordmark-stack` to put the caption below the lockup instead of beside it:

```html
<span class="wordmark-group wordmark-stack" aria-label="y[AI]r studio">
  <span class="wordmark">
    <span class="wordmark-y">y</span><span class="wordmark-bracket">[</span><span class="wordmark-ai">AI</span><span class="wordmark-bracket">]</span><span class="wordmark-r">r</span>
  </span>
  <span class="wordmark-studio">studio</span>
</span>
```

- `wordmark-y` / `wordmark-r` — JetBrains Mono 500, color `--fg-1` (off-white). The lowercase letters that bracket the mark.
- `wordmark-bracket` — square brackets `[` and `]`, JetBrains Mono 500, color `--accent` (orange). Tight against `AI` — no internal gap.
- `wordmark-ai` — uppercase, JetBrains Mono 700, color `--accent` (orange), letter-spacing −0.02em. Always written `AI`, never `ai`.
- `.wordmark` is `inline-flex` `nowrap` — the lockup is a single tight unit and never wraps. Don't put non-letter children inside it.
- All sizes scale with `font-size` on `.wordmark` or `.wordmark-group` (em-based internals).

`wordmark-studio` — JetBrains Mono 500, 0.32em of parent, uppercase, letter-spacing 0.6em, color `--fg-3`. Lives **outside** `.wordmark`, as a sibling inside `.wordmark-group`.

**Two colors only:** off-white `y` / `r` (`--fg-1`) and orange `[AI]` block (`--accent`). No shadow, no gradient, no third color. This `.wordmark` CSS treatment is the **written brand** form — used in body copy, nav text, footers, accessible labels, anywhere the brand appears as live HTML.

The **visual logo** (block lockup with subtle side dashes) ships as SVG in `assets/wordmark.svg` and variants — see *Assets* below. Use the SVG for hero placements, social sharing, and any surface that should read as a logo rather than text. The block AI is the hero of the visual mark; the side dashes are intentionally muted so they support the lockup without competing.

### Buttons (`.btn`, `.btn-primary`, `.btn-ghost`)

Bracketed, mono, no shadow.

- Font: JetBrains Mono 500, 14px, lowercase, letter-spacing `0.04em`.
- Padding: `12px 18px`. Border: 1px `--rule-strong`. Radius 4px.
- Pseudo-elements `::before` (`[`) and `::after` (`]`) wrap the label in `--fg-3`.
- **Hover:** background `--bg-3`, brackets brighten to `--fg-2`. Border darkens to `--fg-3`.
- **Press:** `letter-spacing: -0.04em` (the bracket-tighten signature). 100ms.
- **Primary variant:** background `--accent`, color `--bg-0`, brackets in black at 60% opacity → 85% on hover. Hover bg `--accent-hover`, press bg `--accent-press`.
- **Ghost variant:** transparent border. Hover gets `--bg-3` background and visible `--rule` border.

### Chips / tags (`.chip`, `.chip-accent`, `.chip-ok`)

- Padding 4px 8px. Font: JetBrains Mono 500, 11px, uppercase, tracking 0.08em.
- Default: `--fg-2` text on `--bg-2` with `--rule` border, 2px radius.
- Accent: `--accent` text on `--accent-soft` with `--accent-rule` border.
- Ok: `--ok` text on `rgba(122,224,161,0.10)` with matching 32% border.

### Inputs (`.input`)

- Font: JetBrains Mono 14px, color `--fg-1`.
- Background `--bg-1`, border 1px `--rule`, radius 4px, padding `10px 12px`, full width.
- Placeholder color `--fg-3`.
- Focus: border becomes `--accent`, no outline.

### Cards (`.card`, `.card-tick`)

- Background `--bg-1`, 1px `--rule` border, 4px radius, 24px padding.
- `--edge-top` inner highlight on top edge.
- `.card-tick` adds `└` and `┘` mono characters in `--fg-3` at the bottom corners. Signature device.

### Section index (`.section-index`)

`<span class="section-index"><span class="num">01</span> — services</span>`

- JetBrains Mono 12px uppercase, tracking 0.08em. Number in `--accent`, dash + label in `--fg-3`. Used to stamp section starts.

### Eyebrow / mono label (`.eyebrow`, `.label-mono`)

JetBrains Mono 500, 12px, uppercase, tracking 0.08em, color `--fg-2`. Used everywhere for nav, metadata, captions.

### Display / lead / metric / caption

- `.display` — JetBrains Mono 500, 88px (`--fs-6xl`), tight tracking. Hero headlines.
- `.lead` — IBM Plex Sans 400, 21px (`--fs-xl`), color `--fg-2`. Intro paragraph after a hero.
- `.metric` — JetBrains Mono 500, 64px, tabular-nums. Big numbers in case studies. `.metric .delta` is `--accent`-colored.
- `.caption` — JetBrains Mono 12px, color `--fg-3`, tracking `0.04em`.

### Dot grid (`.dot-grid`)

`background-image: radial-gradient(circle, var(--fg-3) 1px, transparent 1.5px); background-size: 24px 24px; opacity: 0.18;`

Used behind hero areas. Subtle.

### ASCII diagram (`.ascii-diagram`)

A `<pre>` block with mono font, hairline border, `--bg-1` background, 24px padding. Used for system illustrations as actual text, not images.

### Icons

Lucide (`https://unpkg.com/lucide@latest`) — outlined only, **stroke 1.5px** always (override Lucide's 2px default), color `currentColor` except for status (`--ok`, `--err`). Sizes: 16/20/24/32px for inline/button/nav/feature.

No filled icons. No emoji in UI. Box-drawing characters (`├ ─ └ ┐ ▌ ▎`) are typography and may be used decoratively.

---

## Reference UI kits

Three full-context references are in `ui_kits/`. Treat them as design specs to recreate in your stack.

### `ui_kits/website/` — Marketing site

Single-page React-ish prototype (plain JSX via Babel for the demo; reimplement in your real React/Next/etc setup). Sections: Nav, Hero, Services, Approach, Work, Contact. Files:

- `index.html` — entry point, loads React + Babel + the section JSX files
- `site.css` — site-specific styles on top of the tokens
- `Nav.jsx`, `Hero.jsx`, `Services.jsx`, `Approach.jsx`, `Work.jsx`, `Contact.jsx`
- `README.md` — section-by-section notes

Layout: 12-col grid, 1200px max content width, 24px gutters. Section padding 96–128px. Heavy hairline rules between sections. Section heads stamped with `01 — services` style indices.

### `ui_kits/deck/` — Pitch deck (16:9)

- `index.html` — deck shell using the `<deck-stage>` web component
- `deck-stage.js` — the web component (handles scaling, keyboard nav, slide counter, print-to-PDF)
- `slides.css` — slide-specific styles
- `README.md` — slide structure notes

Each slide is a `<section>` child of `<deck-stage>`. 1920×1080 canvas. Speaker notes via `<script type="application/json" id="speaker-notes">`.

### `ui_kits/case-study/` — Case study document

- `index.html` — print-ready document
- `README.md` — document structure notes

Light mode. A4-ish width. Used for proposals and post-engagement case studies.

---

## Voice & content rules

The handoff includes voice rules because copy is part of the design — don't auto-translate or pad.

- **Voice:** first-person singular ("I help…"), occasionally first-person plural for the studio.
- **Tone:** direct, slightly contrarian, confident without bragging.
- **Casing:** sentence case for headlines and UI labels. The wordmark is always written `y[AI]r studio` — lowercase `y` and `r`, **uppercase `AI`** inside square brackets. Never lowercase the `AI`. Never substitute dashes (`y-AI-r`, `y — AI — r`) for the brackets.
- **No exclamation marks. None. Ever.**
- **Lead with numbers:** "Reduced rework 80%." Always include before → after when possible.
- **Words to use:** ship, validate, gate, verify, in production, pragmatic, retrofit, architect (verb).
- **Words to avoid:** revolutionary, cutting-edge, world-class, synergy, leverage (noun), unleash, supercharge, game-changing, "AI-powered" (as a marketing phrase), "solution".
- **Emoji:** none in marketing. `✓` / `✗` allowed in case-study tables only.

Full content guide is in the project root `README.md` (also included in this handoff).

---

## State management

This is a static design system; there's no app state to specify. When implementing in your codebase:

- **Theme toggle** (dark/light) — set `data-theme` on `<html>`. Persist in localStorage if exposed to users; otherwise default dark.
- **Active nav state** — match by route. Active link gets `--accent` text, no underline.
- **Form validation** — use `--err` for invalid border, `--ok` for valid. Inline error message in `--err` mono caption below the input.
- **Loading states** — replace content with a `<pre class="ascii-diagram">` "loading…" or a hairline progress bar in `--accent`. No spinners.

---

## Assets

Located in `assets/`:

- `wordmark.svg` — **primary visual logo**: block AI lockup `y - [AI block] - r` with STUDIO caption (380×110). Cream-filled block, knockout black `AI`, muted gray `y`/`r` and side dashes.
- `wordmark-accent.svg` — **accent block variant**: same lockup with the AI block in `--accent` orange and `AI` in cream. Use sparingly — hero moments, social cards.
- `wordmark-light.svg` — on-light variant: black-filled block, white `AI`, gray `y`/`r` and dashes.
- `wordmark-compact.svg` — block lockup, no STUDIO caption (300×84) — the **compact mark** in tight spaces.
- `wordmark-mono.svg` — single-color via `currentColor`; the AI block becomes a 2px outlined rect so the lockup still reads on any color.
- `avatar.svg` — square avatar with the `[AI]` outlined block on a dark tile (64×64) — social avatars, app icons.
- `favicon.svg` — `[AI]` outlined block favicon (32×32).

### Logo usage rules

**Visual identity vs written identity** — these are different and must not be confused:

| Surface | Form | Rendered with |
|---|---|---|
| **Visual logo** (hero, header, deck title, social card) | block lockup `y — [AI block] — r` | `assets/wordmark.svg` (or variants) |
| **Written brand** (body copy, docs, nav text, accessible labels) | `y[AI]r studio` (square brackets around uppercase AI) | `.wordmark` CSS span |
| **Avatar / favicon** (social profile, app icon, browser tab) | `[AI]` block on dark tile | `assets/avatar.svg`, `assets/favicon.svg` |

| Rule | Value |
|---|---|
| Primary wordmark | `assets/wordmark.svg` (block lockup, with STUDIO caption) — hero, deck title, header |
| Compact mark | `assets/wordmark-compact.svg` (block lockup, no caption) — nav bars, footers when SVG is preferred |
| Avatar / favicon | `assets/avatar.svg` / `assets/favicon.svg` — social avatars, app icons, favicons |
| Minimum size | Wordmark: **88px wide**. Compact mark: **64px wide**. Below that, switch to the avatar. |
| Clear space | At least **0.5× the cap-height** of the `y` on every side. No other element inside that zone. |
| Dark background | `wordmark.svg` (cream-filled block, knockout black `AI`, muted-gray `y`/`r`) |
| Accent variant | `wordmark-accent.svg` (orange-filled block, cream `AI`) — hero moments only |
| Light background | `wordmark-light.svg` (black-filled block, white `AI`, mid-gray `y`/`r`) |
| Single colour | `wordmark-mono.svg` — set `color:` on the parent; AI block becomes outlined |
| Side-dash treatment | Subtle hairline rects in `--fg-3` (dark) / `#8A8A92` (light). They support the lockup; the AI block is the hero. Do not thicken or recolor them. |
| Accessibility | Visual logo SVGs and `.wordmark` spans both use `aria-label="y[AI]r studio"` so screen readers always read the **written brand**, even though the visual mark uses dashes. |
| Written copy | Always `y[AI]r studio` in prose. Never `y - AI - r studio`, `y — AI — r studio`, or `y-ai-r studio`. |
| What never changes | Two colors only: `--fg-1` for `y`/`r`, `--accent` for the AI block (and brackets in the CSS treatment). No gradient, shadow, third color. |

Every SVG embeds a system-mono `font-family` chain (`ui-monospace, 'SFMono-Regular', 'JetBrains Mono', Menlo, Consolas, monospace`) and explicit `fill` directly on each `<text>` element — no `<defs>`, no `<style>`, no external font dependency — so they render identically in `<img>` tags, Chrome headless, and PDF pipelines without any document-level CSS. Wordmark always reads **y[AI]r studio** with uppercase `AI`.

All assets are net-new for this brand and free to use. There is no proprietary icon set; Lucide is the chosen substitute.

### Tone

The brand reads:

- **Technical** — schematic, mono-led, hairline borders, ASCII diagrams.
- **Premium** — restrained motion, generous whitespace, single accent.
- **Practical** — leads with numbers, before→after framing, no hype words.
- **No hype, no generic AI agency language.** Avoid "revolutionary", "world-class", "AI-powered", "solution".

---

## Files in this handoff

```
README.md                    ← this file
colors_and_type.css          ← all design tokens (CSS variables) — source of truth
brand-guide.md               ← full brand README (voice + visual foundations)
assets/
  wordmark.svg            ← primary visual logo (block, dark bg)
  wordmark-accent.svg     ← accent block variant (orange block)
  wordmark-light.svg      ← on-light variant (black block, white AI)
  wordmark-compact.svg    ← block lockup, no STUDIO caption
  wordmark-mono.svg       ← single-color via currentColor (outlined block)
  avatar.svg              ← [AI] outlined block on dark tile, 64×64
  favicon.svg             ← [AI] favicon, 32×32
preview/                     ← every component rendered in isolation as a small HTML card
  wordmark.html
  buttons.html
  inputs.html
  chips.html
  card.html
  color-surfaces.html
  color-foreground.html
  color-accent.html
  color-status.html
  type-display.html
  type-body.html
  type-mono.html
  type-metric.html
  iconography.html
  spacing.html
  radii-elevation.html
  ascii-diagram.html
  dot-grid-section.html
  logo-variants.html
ui_kits/
  website/                   ← marketing site reference (EN + HE)
  deck/                      ← pitch deck reference (1920×1080)
  case-study/                ← case study document reference
  linkedin-carousel/         ← LinkedIn carousel starter (EN + HE, 1080×1350)
fonts/
  README.md                  ← font sourcing notes
```

## Companion docs

- `HEBREW.md` — Hebrew/RTL addendum (fonts, wordmark behavior, voice, RTL motif rules, print/PDF, carousel geometry).
- `BRAND_ARCHITECTURE.md` — **product-brand architecture rule.** Defines how productized vertical offers (VoiceEngine, future products) sit alongside the y[AI]r studio brand without distorting it. Read before designing any non-studio surface.
- `RENDERING_CONTRACT.md` — how to verify assets render identically across environments (Chrome headless, PDF pipelines, SVG font embedding).
- `KNOWN_GAPS.md` — explicit list of things NOT in the handoff that need to be resolved during implementation.

## Implementation checklist

For the developer picking this up:

1. **Drop `colors_and_type.css` into your project** (or convert the `:root` block into your framework's token system — Tailwind config, theme.ts, design-tokens.json, whatever your stack uses).
2. **Load the fonts** — Google Fonts URL is in `colors_and_type.css`. Self-host `.woff2` if performance/offline matters.
3. **Build the `<Wordmark>` component first** — it's the single most-used branded element. Put it in nav, footer, deck masters, case-study headers.
4. **Build buttons, chips, inputs, cards.** These cover ~80% of the UI surface.
5. **Implement section index + eyebrow utilities.** They're a signature device.
6. **Pick one UI kit reference and recreate it end-to-end** before tackling the other two — that surfaces missing tokens fastest.
7. **Set up Lucide** as the icon system, with `stroke-width="1.5"` enforced.
8. **Set up the dark/light theme toggle** at `<html data-theme>`.

When in doubt: more whitespace, fewer chrome elements, mono > sans, accent sparingly. The brand reads "engineered" not "soft."
