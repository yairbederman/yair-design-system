# y[AI]r studio — Color refinement

> Neutral-warm charcoal + softened copper. A cleaner, warmer, more premium pass
> over the original dark palette — **a refinement, not a new identity.** Structure,
> roles, and token names are unchanged; only values moved.

## Why it moved

The previous palette paired a near-pure black (`#0A0A0B`) with a hot electric
orange (`#FF4B1F`). Flat-black + hot-orange is the "hacker bunker" failure mode:
the black reads dead and cheap, the orange reads like a warning light, and
together they feel grimy under real content. The refinement keeps the technical,
schematic, mono-led identity but:

- lifts the blacks off pure black and gives them a **faint warm cast** so the
  surface ramp reads as engineered metal, not a void;
- warms the foregrounds to a **cream / taupe** family;
- swaps the electric orange for a **softened copper** — a precise signal, not an alarm.

---

## 1. The token set + intent (dark, default)

| Token | Value | Intent — in plain English |
|---|---|---|
| `--bg-0` | `#121211` | **Page background.** Warm near-black charcoal, deliberately lifted off `#000` so the page has depth instead of reading as a dead void. The faint warm cast ties it to the cream text. |
| `--bg-1` | `#1A1A18` | **Card / primary surface.** The first step up. Elevation comes from lightness, not shadow — so every surface tier must be a perceptible step. |
| `--bg-2` | `#242420` | **Elevated surface / modal.** Second step up — popovers, modals, the inside of inset wells. |
| `--bg-3` | `#2E2E29` | **Hover surface.** The background state for hovered buttons, rows, nav items. Never a color shift — just a lift. |
| `--fg-1` | `#F4F1EA` | **Primary text.** Warm cream, never pure white. Pure white on charcoal vibrates; cream feels considered and premium. |
| `--fg-2` | `#B9B3AA` | **Secondary text.** Warm taupe for supporting copy, lead paragraphs, secondary labels. |
| `--fg-3` | `#837D72` | **Muted / tertiary / captions.** The quietest readable text — metadata, captions, disabled-ish labels, corner ticks. |
| `--accent` | `#D96832` | **The signal.** Softened copper. The `[AI]` in the wordmark, links, focus rings, and exactly one primary CTA per view. |
| `--accent-hover` | `#E67E45` | **Accent hover.** A lighter copper for the hovered state of accent surfaces and the link underline. |
| `--accent-press` | `#BE5826` | **Accent pressed.** A deeper copper for the active/pressed state. Doubles as the accessible accent-*text*-on-light color. |
| `--accent-soft` | `rgba(217,104,50,0.12)` | **Accent background.** A low-alpha copper wash for accent chips, callouts, and selected states — tint, not fill. |
| `--accent-rule` | `rgba(217,104,50,0.30)` | **Accent hairline.** Borders on accent chips / accent-bordered cards. |
| `--rule` | `#2A2A26` | **Hairlines & dividers.** The 1px lines that compose the schematic layout — section rules, card borders, table lines. Warm, so they don't read blue-cold against the charcoal. |
| `--rule-strong` | `#3A3A34` | **Stronger rule.** Secondary-button outlines and emphasis dividers. |
| `--focus-ring` | `0 0 0 2px var(--bg-0), 0 0 0 4px var(--accent)` | **Focus ring.** Copper ring, offset by the page color. Unchanged structurally — inherits the new accent. |
| `--ok` | `#6FB58A` | **Shipped / passed.** Muted sage. Restrained on purpose — status color is information, not decoration. |
| `--warn` | `#E0A93B` | **Caution.** Gold, kept distinctly *yellow* so it never gets confused with the copper accent. Use rarely. |
| `--err` | `#D85A52` | **Error / blocked.** Warm muted red, tuned to sit in the same warm family rather than a clinical fire-engine red. |

---

## 2. CSS variables (final)

```css
:root {
  /* Surfaces — warm charcoal ramp */
  --bg-0: #121211;
  --bg-1: #1A1A18;
  --bg-2: #242420;
  --bg-3: #2E2E29;

  /* Foreground — warm cream → taupe → gray */
  --fg-1: #F4F1EA;
  --fg-2: #B9B3AA;
  --fg-3: #837D72;

  /* Accent — softened copper */
  --accent:        #D96832;
  --accent-hover:  #E67E45;
  --accent-press:  #BE5826;
  --accent-soft:   rgba(217, 104, 50, 0.12);
  --accent-rule:   rgba(217, 104, 50, 0.30);

  /* Rules */
  --rule:        #2A2A26;
  --rule-strong: #3A3A34;

  /* Focus */
  --focus-ring: 0 0 0 2px var(--bg-0), 0 0 0 4px var(--accent);

  /* Status — restrained */
  --ok:   #6FB58A;
  --warn: #E0A93B;
  --err:  #D85A52;
}

/* Light (print only) — warm paper */
:root[data-theme="light"] {
  --bg-0: #F6F3EC;
  --bg-1: #FCFAF4;
  --bg-2: #EFEBE1;
  --bg-3: #E4DFD3;
  --fg-1: #1A1916;
  --fg-2: #57534B;
  --fg-3: #8A8479;
  --rule: #DED9CE;
  --rule-strong: #C9C3B6;
}
```

These are live in `colors_and_type.css`. **Never hardcode hex in components — always `var(--*)`.**

---

## 3. Contrast checks (WCAG 2.1, dark theme)

| Pair | Ratio | Verdict |
|---|---|---|
| `--fg-1` cream on `--bg-0` (primary text on page) | **16.6 : 1** | AAA — all sizes |
| `--fg-2` taupe on `--bg-0` (secondary text on page) | **9.0 : 1** | AAA — all sizes |
| `--fg-3` muted on `--bg-0` (captions on page) | **4.6 : 1** | AA normal text |
| `--fg-3` muted on `--bg-1` (muted text on card) | **4.3 : 1** | AA normal text |
| `--fg-2` taupe on `--bg-1` (secondary on card) | **8.4 : 1** | AAA |
| `--accent` copper on `--bg-0` (link / icon / accent text) | **5.3 : 1** | AA normal text, AAA large |
| `--bg-0` charcoal text on `--accent` (dark label on copper CTA) | **5.3 : 1** | AA — the CTA reads cleanly |

Every foreground role clears **AA for body text** on both the page and on cards —
including muted captions, which were the tightest case and still pass at ≥ 4.3:1.
The copper accent clears AA as text *and* works as a CTA fill with dark labels.

**Light-mode caveat:** softened copper on warm paper (`--accent` on `--bg-0` light)
is ~3.2 : 1 — fine for the large `[AI]` knockout and UI accents, short of AA for
body-size links. For accent **text on light**, use `--accent-press` (~4.1 : 1).
On light CTAs, keep the copper as the *fill* with `--fg-1` dark text (clears AA).

---

## 4. Usage rules for the copper accent

**Where copper *should* appear**

- The `[AI]` in the wordmark — always. This is the brand and the single most
  important place the accent lives.
- Exactly **one** primary CTA per view (`.btn-primary`).
- Text links and their hover underline.
- Focus rings (2px, offset).
- The section-index number (`01` in `01 — services`) — one small mark per header.
- Sparingly inside data: a single delta in a metric (`50% → 10%`), one accent chip,
  the active state of a control.

**Where copper should *not* appear**

- Headings and body copy — those are `--fg-1` / `--fg-2`. The accent is a pointer,
  not a highlighter.
- Large fills or panels. No copper hero blocks, no copper section backgrounds.
  Backgrounds are charcoal; copper is a line, a word, a button — never a wall.
- Borders on ordinary cards (use `--rule`). Reserve `--accent-rule` for genuinely
  accented elements.
- Two competing CTAs. If everything is copper, nothing is.
- Status. Shipped/caution/error have their own restrained tokens — don't reach for
  the accent to mean "good" or "bad."

**How much accent is too much**

Rule of thumb: on any given screen, the copper should cover **well under ~10% of
the pixels** — usually far less. If you can't find the accent in a half-second
glance, add one. If your eye is being pulled to three places at once, remove two.
One CTA, the wordmark, links, focus — that's the budget.

---

## 5. Avoiding the terminal / hacker-theme look

The copper-on-charcoal palette *can* slide back toward "bunker" if mishandled.
Keep it premium:

- **Lead with space, not chrome.** Generous section padding (96 / 128) and real
  whitespace are what separate "premium systems studio" from "terminal."
- **Cream, not neon.** Text is warm cream/taupe — never pure white, never a green
  monospace glow. The mono typeface carries the "engineered" read; it doesn't need
  reinforcing with terminal *color*.
- **Hairlines, not boxes-in-boxes.** Use single `--rule` lines to structure the
  page like a spec sheet. Avoid nesting bordered panels three deep.
- **Accent as punctuation.** A precise copper signal on a calm charcoal field reads
  as confidence. Flood the page with accent and it reads as a warning console.
- **No glows, no scanlines, no gradient "terminal" backdrops.** The dot-grid stays
  at ≤ 18% opacity; ASCII diagrams use `--fg-2` on `--bg-1`, with copper reserved
  for at most one highlighted node.

---

## 6. Compatibility

This refinement is value-only — **no token was added, removed, or renamed** — so
everything built on the system keeps working:

- **Dark website** — surfaces, rules, CTAs, links all inherit automatically.
- **Case-study cards** — `--bg-1` card on `--bg-0` page, `--rule` border, copper
  delta in the metric. Muted captions clear AA on the card (4.3:1).
- **CTA buttons** — `.btn-primary` is copper fill + dark label (5.3:1); hover →
  `--accent-hover`, press → `--accent-press`.
- **ASCII / system diagrams** — `--fg-2` linework on `--bg-1`, one copper node max.
- **Technical labels** — mono uppercase in `--fg-2` / `--fg-3`, unchanged.
- **Hebrew / RTL pages** — color is direction-independent; the warm light mode also
  applies to RTL print. (See `HEBREW.md` §17.5 for the accent-on-light note.)

---

## 7. What changed in the repo

- `colors_and_type.css` — dark + light token values.
- `preview/color-{surfaces,foreground,accent,status}.html` — DS-tab swatch cards.
- `assets/*.svg` — favicon, avatar, wordmark variants retinted to the new family.
- `README.md`, `SKILL.md`, `ui_kits/website/README.md`, `HEBREW.md` — doc + contrast notes.

> The `design_handoff_yair_studio/` folder is a **frozen export snapshot** and was
> intentionally left on the old palette. Regenerate it from the live system when a
> fresh handoff is needed.
