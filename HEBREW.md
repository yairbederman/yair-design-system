# Hebrew / RTL Addendum — y[AI]r studio Design System

> Companion to `README.md` / `brand-guide.md`. Use this when shipping Hebrew or bilingual surfaces (LinkedIn carousels, decks, RTL pages).

The English brand stays as-is. This addendum covers the calls that don't transfer automatically: fonts, the wordmark, RTL motif handling, voice, and execution rules.

---

## §0. The canonical bilingual default — Inter (English) + Assistant (Hebrew)

**Use this for all new work.** The earlier Miriam Libre pairing in §3 is deprecated.

| Role | English token | English family | Hebrew token | Hebrew family |
|---|---|---|---|---|
| Body / UI | `--font-body-en` | **Inter** (400/500/600/700) | `--font-body-he` | **Assistant** (400/500/600/700) |
| Mono / technical labels | `--font-mono-en` | **Geist Mono** | `--font-mono-he` | **IBM Plex Mono** |
| Hebrew fallbacks | — | — | (in body stack) | Heebo, then Noto Sans Hebrew |
| Hebrew mono fallback | — | — | (in mono stack) | Noto Sans Hebrew |

Hard rules:

- **Hebrew body never uses monospace.** Mono is reserved for `.mono`, `.code-label`, `.system-label`, `.metadata`, code blocks, and small (≤14px) technical labels.
- Set `<html lang="en" dir="ltr">` or `<html lang="he" dir="rtl">` once at the page root. The selectors in `colors_and_type.css` swap the body family automatically.
- For mixed-language runs wrap LTR islands in `<span class="ltr-inline">…</span>` (and `.rtl-inline` for the reverse). Always wrap: the wordmark, `[AI]` motif, AI tool names, URLs, version numbers, dates, arrows (`→`), and any expression where direction carries meaning (§6).
- The brand is always written **`y[AI]r studio`** — uppercase `AI` — in both languages. Latin script in both. Never `y[ai]r`, never `יאיר סטודיו`, never `y-AI-r`.

Sample: `preview/bilingual-type.html`. Carousel templates: `ui_kits/linkedin-carousel/{english,hebrew}/`. Bilingual website: `ui_kits/website/index.html` and `index.he.html`.

---

## Phase 3 update — Inter + Assistant default for new bilingual surfaces

**Phase 3 introduces a new bilingual default pairing**, declared as language-scoped tokens in `colors_and_type.css`:

- **English body / UI:** `--font-body-en` &mdash; Inter
- **English mono / accent:** `--font-mono-en` &mdash; Geist Mono (fallbacks: IBM Plex Mono, Space Mono)
- **Hebrew body / UI:** `--font-body-he` &mdash; Assistant
- **Hebrew fallbacks:** Heebo, Noto Sans Hebrew
- **Hebrew mono (technical labels only):** `--font-mono-he` &mdash; IBM Plex Mono (fallback: Noto Sans Hebrew)

Rules:

- **English LTR uses Inter by default.** **Hebrew RTL uses Assistant by default.**
- **Hebrew body text never uses monospace.** Mono is reserved for `.mono`, `.code-label`, `.system-label`, `.metadata`, and code-like elements.
- Set `<html lang="he" dir="rtl">` (or `lang="en" dir="ltr"`) once at the page root; the selectors in `colors_and_type.css` swap the body family automatically.
- For mixed-language runs, wrap LTR islands in `<span class="ltr-inline">…</span>` (and `.rtl-inline` for the reverse). Use this for the wordmark, AI tool names, URLs, and short English phrases inside Hebrew copy.
- The brand is always written **`y[AI]r studio`** &mdash; uppercase `AI` &mdash; in both languages.
- Sample: `preview/bilingual-type.html`.

The Miriam Libre + IBM Plex Sans Hebrew pairing described later in this document remains valid for surfaces that pair with the JetBrains Mono / IBM Plex Sans English brand. Phase 3 supersedes it as the default for **new** bilingual work.

---

**Revision 2** — addresses reviewer feedback: corner-tick anchoring (§5), arrow bidi-mirroring rule (§6), voice samples rewritten to use §10 vocab (§9), retrofit/production vocab fixes (§10), Miriam Libre framing (§3), founder-vs-brand example fix (§1). New sections added: alignment defaults (§13), quotation marks (§14), broader punctuation (§15), date formats (§16), print/PDF (§17), carousel geometry (§18 — concrete sizes, not guesses).

**Sections unchanged from rev 1:** §2, §4, §7, §8, §11. Diff cleanly against rev 1 for those.

---

## 1. Wordmark in Hebrew context — **Latin-only, always**

The wordmark **does not get translated, transliterated, or paired with a Hebrew caption**. `y[AI]r` is treated as an untranslatable brand mark — same convention as Apple, Nike, and IBM use in Hebrew layouts.

- The wordmark is always **LTR** even when embedded in RTL text. Wrap it in `<span dir="ltr" class="wordmark">...</span>` so it doesn't get mirrored by the RTL paragraph context.
- The optional `studio` caption stays in Latin too (`STUDIO`). Do not translate to סטודיו.
- In running Hebrew copy, refer to the studio in writing as **y[AI]r studio** — lowercase `y` and `r`, **uppercase `AI`** inside square brackets. Never lowercase the `AI`. Don't refer to the studio as `יאיר` or `יאיר סטודיו` — that's the founder, not the brand.
- The favicon and avatar SVGs are unchanged.

```html
<!-- Hebrew page, wordmark embedded -->
<p>
  ב־<span dir="ltr" class="wordmark" aria-label="y[AI]r studio"><span class="wordmark-y">y</span><span class="wordmark-bracket">[</span><span class="wordmark-ai">AI</span><span class="wordmark-bracket">]</span><span class="wordmark-r">r</span></span>
  אנחנו לא מנסים, אנחנו מעלים לייצור.
</p>
```

## 2. The bracketed [AI] motif — **stays Latin, embedded LTR in Hebrew text**

*(unchanged from rev 1)*

The `[AI]` motif is part of the brand identity, not a word to translate. When it appears decoratively inside Hebrew copy (section headers, button labels, captions), keep it in Latin and bracket it inline:

```html
<h2>[<span dir="ltr" class="wordmark-ai">AI</span>] שעובד בייצור, לא בדמו</h2>
```

- Always wrap the inline `[AI]` in `dir="ltr"` so the brackets render in the correct visual order in RTL flow.
- The same accent color, weight, and knockout treatment apply.
- Do **not** use a Hebrew calque like `[בינה]` or `[בינ"מ]`. The brand keeps `[AI]` as a recognisable lockup across languages.

## 3. Fonts — **Miriam Libre + IBM Plex Sans Hebrew** *(deprecated — see §0 above)*

> **DEPRECATED.** This section documents the original Hebrew pairing that shipped against the JetBrains Mono / IBM Plex Sans English brand. **Phase 3 supersedes it** with Inter (English) + Assistant (Hebrew). Do not use Miriam Libre for new work. The block below is retained for reference and for any legacy surface still on the old English tokens.

JetBrains Mono has no Hebrew glyphs. **Miriam Libre is a sans, not a mono** — there is no true Hebrew mono that matches the English brand's terminal feel without compromise. Accept the aesthetic shift up front: English reads as **mono / terminal**; Hebrew reads as **engineered sans**. The geometry, square stroke endings, and monolinear weight of Miriam Libre carry the "engineered, not soft" posture across; the literal monospaced grid does not transfer.

Communicate this shift to anyone consuming the system. Do not call Miriam Libre a "mono substitute" in onboarding docs — that misleads. Call it the **Hebrew display family that pairs with the mono English family**.

| Use | English | Hebrew |
|---|---|---|
| Display / headlines | JetBrains Mono 500/700 | **Miriam Libre** 400/700 |
| Body | IBM Plex Sans 400/500/600 | **IBM Plex Sans Hebrew** 400/500/600 |
| UI labels / metadata | JetBrains Mono 500 | **Miriam Libre** 700 |
| Numerals (mixed strings) | JetBrains Mono | JetBrains Mono (always — see §6) |

**Why these:**
- Miriam Libre is the closest Hebrew sans to the engineered, square aesthetic of JetBrains Mono. It's not a mono — it just shares the visual posture.
- IBM Plex Sans Hebrew keeps body-copy family parity with English.

**Google Fonts URL** (single combined import — drop into `colors_and_type.css` next to the existing `@import`):

```css
@import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&family=IBM+Plex+Sans+Hebrew:wght@400;500;600&display=swap');
```

**CSS — language-scoped font stacks:**

```css
:root {
  --font-display-he: 'Miriam Libre', 'IBM Plex Sans Hebrew', system-ui, sans-serif;
  --font-body-he:    'IBM Plex Sans Hebrew', system-ui, sans-serif;
  --font-ui-he:      'Miriam Libre', 'IBM Plex Sans Hebrew', sans-serif;
}

[lang="he"], [dir="rtl"] { font-family: var(--font-body-he); }

[lang="he"] h1, [lang="he"] h2, [lang="he"] h3,
[lang="he"] h4, [lang="he"] h5, [lang="he"] h6,
[dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3,
[dir="rtl"] h4, [dir="rtl"] h5, [dir="rtl"] h6 {
  font-family: var(--font-display-he);
  letter-spacing: 0;
}
[lang="he"] .eyebrow, [lang="he"] .label-mono, [lang="he"] .caption,
[dir="rtl"] .eyebrow, [dir="rtl"] .label-mono, [dir="rtl"] .caption {
  font-family: var(--font-ui-he);
  letter-spacing: 0.04em;
}
```

**Sizing notes:**
- Miriam Libre runs ~6% larger optically than JetBrains Mono. Step display sizes down ~6% in Hebrew (`88px → 82px`, `64px → 60px`, `48px → 44px`). See §18 for the carousel-specific scale.
- Hebrew has no descenders to balance ascenders. Bump `line-height` from `1.05` → `1.15` for `--lh-tight` in Hebrew display.

## 4. Casing substitute in Hebrew

*(unchanged from rev 1)*

Hebrew has no case. To preserve the same restrained, "quiet" feel:

- Use **Miriam Libre 400** for display (not 700) by default. Reserve 700 for the rare emphatic line.
- Don't use letter-spacing tricks to fake "lowercase" — Miriam doesn't respond well to it. Restraint comes from weight and size, not tracking.
- Avoid all-caps Latin embedded mid-sentence in Hebrew unless it's the wordmark or `[AI]`.

## 5. RTL motif rules — what mirrors, what stays LTR

| Element | Behavior in RTL |
|---|---|
| Wordmark (`y[AI]r`) | **LTR** — never mirrors |
| `[AI]` inline motif | **LTR** — wrap in `dir="ltr"` |
| ASCII / box-drawing diagrams | **LTR**, code-block style — Hebrew flows around them but the diagram is left-anchored. Treat as figures. |
| Card corner ticks (`└` `┘`) | **Anchored to physical corners.** See note below. |
| Section index stamp | Translate label, mirror order — see §11 |
| Bracketed buttons (`[ book a call ]`) | Brackets are CSS pseudo-elements; they render at the visual start/end of the label correctly in RTL. Use `var(--font-ui-he)` for the inside label so the family matches. |
| Lucide directional icons | **Auto-flip** (see §8) |
| Lucide non-directional icons (logo, status, settings) | Do not flip |
| Dot-grid background | Symmetric — no change |
| Rule lines / dividers | Symmetric — no change |
| Hairline corners on schematic boxes | Mirror automatically (logical-property layouts) |

**Corner ticks — corrected.** The original CSS in `colors_and_type.css` uses physical `left:` / `right:` on `::before` / `::after`, so the `└` and `┘` glyphs are anchored to **fixed physical corners** regardless of `dir`. This is intentional: the box-drawing characters happen to read correctly at either physical corner because their visual logic is "frame the card," not "point in a direction." No change required for RTL.

If you later prefer logical anchoring (e.g., to keep `└` always at the *reading-start* corner), update the rule in `colors_and_type.css`:

```css
.card-tick::before { content: "└"; bottom: 4px; inset-inline-start: 4px; }
.card-tick::after  { content: "┘"; bottom: 4px; inset-inline-end:   4px; }
```

Pick one policy and document it. The default policy in this system is **physical anchoring** (no change required, ticks frame the box).

**Implementation:** wrap RTL surfaces in `<html lang="he" dir="rtl">` and the layouts mirror via flex/grid `start`/`end`. The non-trivial cases are the wordmark and `[AI]` (LTR islands), the section-index reordering (§11), and the arrow rule below (§6).

## 6. Numbers and arrows in mixed RTL/LTR strings

The "lead with the number" rule applies in Hebrew too. Mixed strings need explicit handling.

- **Always use Latin/Arabic numerals** (`80%`, not `שמונים אחוז`).
- **Percent sign:** keep `%` adjacent to the number with no space (`80%` not `80 %` or `80 אחוז`).
- **Ranges:** use **en-dash** with no spaces (`2020–2026`).
- **Tabular nums always:** `font-variant-numeric: tabular-nums` for any list of metrics.

**Bidi-mirrored characters — corrected.** The arrow `→` (U+2192) is in Unicode's bidi-mirroring set. In RTL paragraph context the renderer flips it to `←`, which **destroys the semantic meaning** of `before → after`. The rule:

> **Always wrap any metric or transformation string containing a directional arrow (`→`, `←`, `⇒`, `⇐`, `↑`, `↓` when used semantically) in `<span dir="ltr">…</span>`.**

This is mandatory, not advisory. Same wrap also fixes the occasional percent-on-the-wrong-side bug.

```html
<!-- Wrong: arrow flips in RTL flow -->
<p>שיפור מ־<span class="metric">50% → 10%</span> בעבודה כפולה.</p>

<!-- Correct -->
<p>שיפור מ־<span dir="ltr" class="metric">50% → 10%</span> בעבודה כפולה.</p>
```

The same wrapping applies to: code identifiers, URLs, version numbers (`v2.3.1`), file paths, and any expression where direction carries meaning (math, logic, before/after).

## 7. Em-dash policy

*(unchanged from rev 1)*

**Default ruling: keep em-dashes in English; use Hebrew em-dashes (—, U+2014) in Hebrew design copy.** They're part of the brand's rhythm.

If/when this design system feeds into the LinkedIn pipeline whose VoiceEngine bans em-dashes globally, follow the pipeline's rule for that channel — but the design system itself does not enforce a global ban. Treat the LinkedIn ban as a **channel rule**, not a brand rule.

In Hebrew specifically:
- Use the em-dash with a regular space on each side: `אנחנו לא מנסים — אנחנו מעלים לייצור.`
- Don't use the geresh (׳) as a substitute. Different mark, different meaning.

## 8. Iconography flipping

*(unchanged from rev 1 — see auto-flip list and CSS implementation)*

## 9. Voice — same posture, Hebrew-native cadence

The English voice is "direct, opinionated, slightly contrarian, plain language." That posture maps to Hebrew.

- **Register:** lean toward the **direct, conversational register** (כתיבה ישירה, לא מליצית). Avoid the formal/literary register — it reads as bureaucratic.
- **First person:** singular (אני) for personal statements; plural (אנחנו) for studio/team statements.
- **No hype words:** ban the Hebrew tech-hype lexicon (see §10).
- **Sentence length:** short. Match the English brand's clipped rhythm.
- **No exclamation marks. None. Ever.**

> **Note:** voice samples were not provided in the brief. The defaults below are starting drafts. **Run them past a native Hebrew tech writer before any public surface ships** — vocab consistency with §10 has been corrected, but cadence and naturalness still need a native-speaker pass.

**Default sample lines (placeholders — please review):**

> בינה מלאכותית כבר כאן. רוב הצוותים עדיין מתנסים. אנחנו מעלים לייצור.
> *AI is already here. Most teams are still experimenting. We ship.*

> בלי אפיון, אין קוד. ולידציה לפני שורה אחת — ירידה של 80% בעבודה כפולה.
> *No spec, no code. Validation before a single line — 80% drop in rework.*

> 20 שנה של ניהול צוותי פיתוח לימדו אותי מה עולה לייצור ומה נשאר דמו.
> *20 years of leading engineering teams taught me what ships and what stays a demo.*

> [AI] שעובד בייצור, לא בדמו.
> *[AI] that runs in production, not in a demo.*

> אני עוזר לצוותים להפסיק להתנסות ולהתחיל להעלות לייצור.
> *I help teams stop experimenting and start shipping.*

All "ship" senses now use the §10 vocabulary (`להעלות לייצור` / `לעלות לייצור` / `מעלים לייצור`) so the verb carries the production-deployment meaning, not generic "integrate."

## 10. Hebrew vocabulary — use & avoid

**Use these (default translations — review with a native speaker):**

| English | Hebrew | Notes |
|---|---|---|
| ship (verb) | להעלות לייצור / לעלות לייצור | always include the `לייצור` qualifier; bare `לשלב` means "integrate" generically and loses the brand meaning |
| validate | לוודא / לאמת | `לוודא` for process validation |
| gate (noun/verb) | שער / לסנן | technical contexts |
| in production | בייצור | the canonical Hebrew form |
| in production (dev-speak) | בפרודקשן | accepted Anglicism in tech-internal contexts; avoid in marketing copy |
| pragmatic | פרגמטי / מעשי | `מעשי` for general audiences |
| retrofit (verb) | לשדרג בדיעבד / להתאים בדיעבד | **do not use `להתקין מחדש`** — that means "reinstall" |
| architect (verb) | לתכנן ארכיטקטורה / לעצב מערכות | avoid the borrowed `לארכטקט` |
| throughput | תפוקה | |
| predictability | יכולת חיזוי / צפיות | |
| spec / specification | אפיון | standard Israeli tech term |
| QA / verification | בקרת איכות / וידוא | |
| demo | דמו | borrow as-is |

**Avoid these Hebrew tech-hype words and phrases:**

- מהפכני (revolutionary)
- פורץ דרך (groundbreaking / cutting-edge)
- ברמה עולמית (world-class)
- סינרגיה (synergy)
- לרתום / לשחרר את הכוח של (unleash / harness the power of)
- משנה משחק (game-changing)
- חדשני (innovative — overused; prefer specific verbs)
- "פתרון" as a marketing noun (פתרון AI, פתרון חכם) — name what it actually is
- מואץ-AI / מבוסס-AI as marketing prefixes — describe the actual mechanism

## 11. Layout direction & component RTL behavior

*(unchanged from rev 1)*

When `dir="rtl"` is set, flexbox/grid layouts mirror automatically. Verify these specifically:

- **Nav** — wordmark stays at the right edge in Hebrew, nav items running left from it.
- **Section index stamp** — write as `שירותים — 01` (label, en-dash, number) for correct RTL flow.
- **Button alignment** — primary CTA on the right in Hebrew, secondary on the left.
- **Form labels** — above inputs (no mirror needed).
- **Tables** — header row reads right-to-left; first column is rightmost.

## 12. Em-dash policy

*(merged into §7; this section number reserved)*

## 13. Hebrew text alignment defaults

Hebrew RTL surfaces should **right-align by default** for body text (the RTL native behavior), but display headlines have a brand-specific rule.

| Surface | Hebrew alignment | Notes |
|---|---|---|
| Body copy (paragraphs) | `text-align: start` (= right in RTL) | Native RTL convention. |
| Display headlines (`h1`, `.display`) | `text-align: start` (= right in RTL) | The brand's asymmetric layout pattern keeps headlines anchored to the reading-start edge in both languages. |
| Eyebrows / section index stamps | `text-align: start` (= right in RTL) | |
| Captions (`.caption`) | `text-align: start` (= right in RTL) | |
| Metric blocks (`.metric`) | `text-align: start` (= right in RTL) | The number itself is wrapped `dir="ltr"` per §6, but the *block* anchors right. |
| Buttons | Center (unchanged from English) | |
| Cards | Content `text-align: start`; the card frame itself is symmetric. | |
| Quotes / pull-quotes | `text-align: start` (= right in RTL) | |

**Rule:** never use `text-align: left` or `text-align: right` literally on Hebrew surfaces. Always use `start` / `end` so the same CSS works in either direction.

The English brand sometimes uses `text-align: left` on display headlines for asymmetric layouts; the Hebrew equivalent uses `text-align: start`, which renders right-aligned and preserves the same visual logic (anchored to the reading-start edge).

## 14. Hebrew quotation marks

Hebrew has its own quotation marks: `״` (U+05F4 GERSHAYIM) and `׳` (U+05D3 GERESH). For brand copy:

- **Use Latin double quotes (`"`) for direct quotes in Hebrew running text.** Modern Israeli typography increasingly uses `"`/`"` (U+201C/U+201D) for quotation; the system follows that convention. Do not use the legacy `„`/`"` German-style pair.
- **Use the Hebrew gershayim (`״`) only as a Hebrew acronym/abbreviation marker** (e.g., `צה״ל`, `ארה״ב`). Never as a quotation mark.
- **Use the geresh (`׳`) only inside Hebrew acronyms** (e.g., `דר׳`). Never as an apostrophe in foreign words — write `Anthropic's` not `Anthropic׳s`.
- **Mixed-quote strings:** when a Hebrew sentence quotes English, use English curly quotes around the English run and let Hebrew run normally outside it. Wrap the English run in `<span dir="ltr">…</span>` so the quotes render on the correct sides.

```html
<!-- Hebrew sentence quoting an English term -->
<p>הוא קרא לזה <span dir="ltr">"shipping discipline"</span>, ואני מסכים.</p>
```

- **Single quotes:** avoid in design copy. If unavoidable, use Latin `'` `'` (U+2018/U+2019). Never the geresh.

## 15. Punctuation conventions

| Mark | Hebrew rule |
|---|---|
| Period (`.`) | End of sentence. Same as English. No space before, single space after. |
| Comma (`,`) | Same usage as English. No space before, single space after. Use serial comma in lists ("ship, validate, and gate") to match English brand style. |
| Ellipsis (`…`) | Use the single-character ellipsis (U+2026), not three periods. No space before. |
| Em-dash (`—`) | See §7. Space on each side. |
| En-dash (`–`) | Numeric ranges only. No spaces. (`2020–2026`) |
| Hyphen (`-`) | Compound words and prefixes. Hebrew also uses **maqaf** (`־`, U+05BE) — the right convention is **maqaf for Hebrew compounds** (`ב־y[AI]r`, `על־ידי`), **hyphen for Latin-letter compounds**. |
| Question mark (`?`) | Same shape, no mirror. Renderer handles position. |
| Sof pasuq (`׃`) | **Do not use.** This is a biblical/liturgical mark. Use the regular period. |
| Quotation marks | See §14. |
| Parentheses `( )` and brackets `[ ]` | Use Latin shapes; renderer mirrors them automatically in RTL flow. The `[AI]` motif is the one exception that stays explicitly LTR (§2). |
| Slash (`/`) | Use sparingly. In ranges/alternatives, prefer en-dash or "or". |
| Apostrophe in foreign names | Latin `'` (U+2019). Never geresh. |

**Spacing around punctuation:** Hebrew follows English conventions — no space before terminal punctuation, single space after. The French-style space-before-punctuation is wrong.

## 16. Date formats

Hebrew uses Latin/Arabic digits per §6. Date formats:

| Context | Format | Example |
|---|---|---|
| Year only | `YYYY` | `2026` |
| Year range | `YYYY–YYYY` (en-dash, no spaces) | `2020–2026` |
| Month + year (case studies, body copy) | `MMMM YYYY` (Hebrew month name) | `ינואר 2026` |
| Full date (case studies) | `D בMMMM YYYY` (with prefix `ב`) | `15 בינואר 2026` |
| Numeric date (metadata, footers) | `DD.MM.YYYY` | `15.01.2026` |
| ISO (technical/code only) | `YYYY-MM-DD` | `2026-01-15` |
| Quarter | `Q[1-4] YYYY` | `Q2 2026` |

**Wrap numeric dates in `dir="ltr"`** when embedded in Hebrew sentences so the digits don't reorder:

```html
<p>הפרויקט עלה לייצור ב־<span dir="ltr">15.01.2026</span>.</p>
```

**Hebrew month names (use these spellings):**
ינואר · פברואר · מרץ · אפריל · מאי · יוני · יולי · אוגוסט · ספטמבר · אוקטובר · נובמבר · דצמבר

Do not use Hebrew calendar dates (תשרי, אדר, etc.) for business-context surfaces. The brand operates in Gregorian time.

## 17. Print / PDF Hebrew behavior

The downstream LinkedIn document carousel pipeline outputs PDF as its only format. This is a **blocker, not an open item**. Concrete rules:

### 17.1 Page geometry (light mode for print)

- **Carousel page:** 1080 × 1350 px (LinkedIn portrait). Use `@page { size: 1080px 1350px; margin: 0; }`.
- **Standalone PDF deck:** A4 portrait, 210 × 297 mm, 24 mm margins. Use `@page { size: A4; margin: 24mm; }`.
- **Always switch to light mode for print:** `<html data-theme="light" lang="he" dir="rtl">`. The dark background does not survive printing — toner-heavy and unreadable on screen viewers' light backgrounds.

### 17.2 Font embedding

Chrome headless (the typical PDF generator) embeds Google Fonts subsets reliably for **Latin, Latin-Extended, and Hebrew ranges**. To force full Hebrew range embedding, add the explicit subset query to the import:

```css
@import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&family=IBM+Plex+Sans+Hebrew:wght@400;500;600&subset=hebrew&display=swap');
```

If self-hosting `.woff2`, ensure the Hebrew subset file is in the bundle. Test the PDF on a Latin-only system (no Hebrew system fonts installed) — if Hebrew renders, embedding worked.

### 17.3 Page-break rules

- `h1`, `h2` — `break-after: avoid;` (don't break right after a heading)
- `.metric` — `break-inside: avoid;` (don't split a number across pages)
- `.card`, `.ascii-diagram` — `break-inside: avoid;`
- Slide-style decks with `<deck-stage>` — each `<section>` is `break-after: page;`

### 17.4 Chrome headless RTL quirks

- **Print stylesheets must explicitly set `direction: rtl`** on `html` and `body`. Some headless renderers ignore the `dir` attribute on `<html>` for print contexts.
- **CSS columns and Hebrew don't mix well in print.** Avoid `column-count` for Hebrew body text — use single-column layouts.
- **Bullet-list markers position incorrectly in some headless versions.** Use custom `::marker` styling rather than relying on default bullets.
- **Embedded SVG with Hebrew text:** ensure the SVG has `font-family` set explicitly to one of the imported families; SVG doesn't inherit document fonts in all renderers.
- **Test command for the pipeline:**
  ```
  chromium --headless --disable-gpu --print-to-pdf=out.pdf \
    --no-pdf-header-footer --enable-features=PrintCompositor file.html
  ```

### 17.5 Light-mode RTL specifics

The English light mode (`:root[data-theme="light"]` in `colors_and_type.css`) works for Hebrew without modification. No additional tokens needed — the RTL behavior is layout, not color.

Verify: the `[AI]` knockout treatment on light uses **dark `AI` letters on the copper block** (`--accent` `#D96832` fill, `--fg-1` text) — the contrast that matters is text-on-accent, which clears AA (≥ 5:1). For accent *text* set directly on a light background (links), use `--accent-press` (`#BE5826`, ≈ 4.1:1 on `#F6F3EC`) rather than `--accent` itself, since softened copper on warm paper sits at ~3.2:1 — fine for large/UI, short of AA for body links.

## 18. Carousel page geometry — concrete sizes

The pipeline is fixed at **1080 × 1350 px portrait**. Replace any `clamp()`-based advice with the concrete Hebrew scale below.

### 18.1 Hebrew type scale at 1080 × 1350

The English brand's 16:9 deck scale (88/64/48/36/28/21/18/16) was sized for 1920 × 1080. For 1080 × 1350 portrait, scale to fit the narrower canvas. Hebrew applies the additional ~6% downsize from §3.

| Role | English (px) | Hebrew (px) | Notes |
|---|---|---|---|
| Display hero | 96 | **88** | One line, max two |
| Display | 72 | **66** | |
| H1 | 56 | **52** | |
| H2 | 44 | **40** | |
| H3 | 32 | **30** | |
| H4 | 24 | **22** | |
| Body lead | 24 | **22** | |
| Body | 20 | **20** | Same — body sizes don't downsize; readability over consistency |
| UI label / eyebrow | 14 | **14** | Same |
| Caption | 12 | **12** | Same |

**Line heights for Hebrew display at this canvas:**
- Display hero: `line-height: 1.10` (English uses `1.05`)
- Display / H1: `line-height: 1.15`
- H2 / H3: `line-height: 1.20`
- Body: `line-height: 1.55` (unchanged)

### 18.2 Margins and grid

- **Horizontal margin:** 64 px each side (gutter content area = 952 px).
- **Vertical margin:** 96 px top, 96 px bottom (content area = 1158 px tall).
- **Grid:** 6 columns at 1080 portrait, 16 px gutters. (Down from the 12-column desktop grid.)
- **Wordmark watermark:** bottom-left corner, 32 px from each edge, opacity 1.0 (it's a brand mark, not a watermark; use full opacity). Stays Latin LTR per §1.
- **Slide counter:** bottom-right corner, mono, 12 px, in `--fg-3`. Format `01 / 06` — digits stay Latin in both languages.

### 18.3 Bilingual vs parallel decks

- **Parallel decks (recommended default):** separate English and Hebrew decks, one language per file. Set `<html lang="he" dir="rtl">` once at the top; all components below behave correctly. This is the cleaner option and what the pipeline should target.
- **Bilingual single-deck:** if a single deck must carry both languages on the same slide, set the slide root to `dir="ltr"` and explicitly mark Hebrew runs with `<span lang="he" dir="rtl">…</span>`. Don't rely on auto-detection. Reserve this pattern for cover slides and bilingual quote treatments only.

### 18.4 Density rules at 1080 × 1350

- **Maximum 60 Hebrew characters per line** in body copy (vs ~75 for English at the same width). Hebrew letters are visually wider on average.
- **Maximum 8 lines of body copy per slide.** More than that, split the slide.
- **Display headlines: maximum 6 words / 2 lines.**
- **One metric block per slide max.** The brand's "lead with the number" rule means the metric is the slide.

---

## Quick implementation checklist

1. Add the Hebrew Google Fonts `@import` (with `&subset=hebrew`) to `colors_and_type.css`.
2. Add the `--font-*-he` variables and the `[lang="he"]` / `[dir="rtl"]` selectors.
3. Wrap any Hebrew page in `<html lang="he" dir="rtl">`.
4. For embedded Latin runs in Hebrew copy (the wordmark, `[AI]`, code, URLs, dates, metric arrows), use `<span dir="ltr">…</span>`.
5. Build a `<DirectionalIcon>` wrapper that flips per the §8 list when nested under `[dir="rtl"]`.
6. Add the §17.3 page-break rules to the print stylesheet.
7. Use the §18.1 fixed sizes for the 1080×1350 carousel pipeline (don't `clamp()`).
8. Replace placeholder voice samples (§9) and review vocab (§10) with a native Hebrew tech writer before any public surface ships.

---

## Open items / not yet decided

- **Voice samples (§9)** — placeholders only; native-speaker pass required.
- **Vocabulary list (§10)** — placeholders for some entries; native-speaker review pass required.

(Print/PDF and carousel geometry are no longer open — see §17, §18.)
