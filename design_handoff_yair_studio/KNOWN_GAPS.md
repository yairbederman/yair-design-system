# Known Gaps — y[AI]r studio Design System

> Explicit list of things that are NOT in the handoff and need to be resolved during implementation. Read this before starting any build.

The design system is internally consistent and ready for implementation, but it is a **net-new identity** with known unknowns. These gaps are normal for a brand at this stage; the goal of this document is to make them visible so they don't surprise you mid-build.

---

## 1. Hebrew voice samples need native-speaker review

**Where:** `HEBREW.md §9`

The five sample sentences use the correct §10 vocabulary (verbs match the brand: `להעלות לייצור` / `מעלים לייצור`), but the **cadence and naturalness have not been reviewed by a native Hebrew tech writer**. A native speaker may flag awkward phrasing, register mismatches, or idiomatic alternatives.

**Action:** before any Hebrew-language public surface ships (LinkedIn carousel, marketing page, deck), run the samples past a native Hebrew technical writer. Edit in place; commit back to the design system.

**Severity:** blocking for public Hebrew copy. Not blocking for English-only work.

---

## 2. Hebrew vocabulary list is partially unreviewed

**Where:** `HEBREW.md §10`

The "use" and "avoid" word lists are starter translations. Some entries are confident (`אפיון` for spec, `דמו` for demo); others are best-guesses (`לתכנן ארכיטקטורה` for "architect" as a verb may sound clinical to native ears).

**Action:** native-speaker review pass on the full §10 table. Likely 1–2 hours of work for someone in the tech industry.

**Severity:** same as §1 — blocking for public Hebrew, not blocking for English.

---

## 3. Form components beyond `.input` are not specified

**Where:** `colors_and_type.css` — only `.input` exists.

The system specifies single-line text inputs but not:
- `<textarea>`
- `<select>` (and its dropdown panel)
- `<input type="checkbox">`
- `<input type="radio">`
- File upload
- Form validation states (success, error, warning)
- Field groups, label/help-text composition
- Date pickers, autocomplete, multi-select

**Action:** when building forms, extrapolate from `.input`'s pattern (1px `--rule` border, `--bg-1` background, `--accent` focus border) for all field types. Status states: `--err` border for error, `--ok` for success, inline error message in `--err` mono caption below. Document your decisions and commit them back to the system as `.textarea`, `.select`, `.checkbox`, `.radio` classes for the next consumer.

**Severity:** non-blocking but needs design judgment. Expect 1–2 days of design work to formalize.

---

## 4. Light mode is defined but unproven

**Where:** `colors_and_type.css` — `:root[data-theme="light"]` block.

Light mode tokens are defined (`--bg-0: #FAFAF7`, `--fg-1: #0A0A0B`, etc.) but **none of the UI kits or preview cards render in light mode**. The case-study document is print-bound and will be the first real test.

Likely gaps to surface:
- `--accent` contrast on light mode is 4.6:1 — passes WCAG AA for large text only. Body-size accent text will fail.
- `--edge-top` highlight uses `rgba(0,0,0,0.03)` in light mode. May be invisible on some surfaces.
- The wordmark's black `AI` text on orange background is unchanged in light mode. The flanking `y` and `r` change from off-white to off-black. Verify this doesn't break the visual lockup.

**Action:** when shipping any light-mode surface, render it in both modes side-by-side and flag token gaps as you find them. Commit fixes back to the design system.

**Severity:** non-blocking but needs vigilance.

---

## 5. Iconography requires Lucide selections

**Where:** `README.md` iconography section.

The system specifies "use Lucide at 1.5px stroke, no fills, `currentColor`" but does not enumerate which specific icons map to which UI roles. For example: which icon is "open menu"? Lucide has `menu`, `align-justify`, `more-horizontal`, `more-vertical`, `panels-left`, etc. — five reasonable choices.

**Action:** as you build, maintain a `icons.md` file listing each role → Lucide name pair (`menu → menu`, `close → x`, `external link → arrow-up-right`, etc.). Commit it back to the design system.

**Severity:** non-blocking but ensures consistency across surfaces.

---

## 6. Interaction states defined but not exercised end-to-end

**Where:** `colors_and_type.css` — hover, focus, press, disabled tokens defined.

The CSS specifies what `:hover`, `:focus-visible`, `:active`, and `:disabled` look like for `.btn`, `.input`, `.chip`. But:
- The preview cards show static states only.
- The UI kits don't have working hover/focus interactions wired up beyond the default CSS.
- Loading states are described in prose ("a hairline progress bar in `--accent`, no spinners") but no implementation exists.
- Empty states, error states (page-level 404, 500) are not specified.

**Action:** implement interaction states from the CSS spec, not by reverse-engineering screenshots. Build a `states.html` file demonstrating every state for every component as you go.

**Severity:** non-blocking for marketing surfaces; blocking for any product UI.

---

## 7. Motion library beyond easing tokens is undefined

**Where:** `colors_and_type.css` — `--ease`, `--dur-fast/--dur/--dur-slow` defined.

The system specifies easing and durations but no concrete motion patterns:
- Page transitions
- Component entrance / exit (cards, modals, drawers)
- Scroll-linked animation
- Loading transitions
- Stagger / sequencing for lists

Voice rule: "fades and small translates only — no bounces, no scale-in, no parallax." That's the floor. Anything beyond it is a judgment call.

**Action:** when motion is required, default to fade + translate ≤ 8px, duration `--dur` (160ms), easing `--ease`. Commit recurring patterns back to the system as `.fade-in`, `.slide-up` utility classes.

**Severity:** non-blocking. Most surfaces don't need motion beyond what the existing CSS provides for hover.

---

## 8. SVG asset rendering tested only on developer machine

**Where:** `assets/*.svg`

A wordmark SVG bug (serif fallback in Chrome headless because the actual file shipped without `<defs><style>` despite the contract saying otherwise) was identified and fixed in revision 3. The fix pattern (inline `@import` + explicit class-based `font-family` + `fill` color + system-mono fallback chain) is now actually present in `wordmark.svg`, `wordmark-light.svg`, `wordmark-compact.svg`, `wordmark-mono.svg`, `avatar.svg`, and `favicon.svg`. **The fix is verified visually in `preview/logo-variants.html` but has not been run through the actual carousel pipeline yet.**

**Action:** before declaring SVG assets shipped, run them through the carousel pipeline's Chrome headless and visually verify against the CSS preview. See `RENDERING_CONTRACT.md` for the test procedure.

**Severity:** medium. The fix is correct in theory but pipeline-tested is better than locally-tested.

---

## 9. No design tokens in JSON / Style Dictionary format

**Where:** tokens exist only in CSS.

If the implementing codebase uses Tailwind, Style Dictionary, Tokens Studio, or any token-pipeline tool, the CSS variables need to be transcribed to that tool's format. There is no `tokens.json` shipped.

**Action:** at integration time, run a token export. The `:root` block in `colors_and_type.css` is the source — convert it to whatever format your stack uses. Commit the converted file back to the codebase, not the design system.

**Severity:** non-blocking, normal integration work.

---

## 10. No accessibility audit beyond color contrast

**Where:** not addressed in any file.

The design system implies a clean a11y posture (focus-visible rings, semantic HTML, mono UI labels) but has not been audited for:
- Screen reader behavior on the wordmark (`y[AI]r` with bracket pseudo-elements)
- Focus order in complex layouts (deck slides, case study)
- Reduced-motion preference (`prefers-reduced-motion`) — no media query exists in the CSS
- High-contrast mode behavior
- Keyboard navigation in the deck UI kit

**Action:** add a `prefers-reduced-motion` media query to `colors_and_type.css` that disables transitions. Audit each UI kit for keyboard navigation. Add `aria-label` to the wordmark so screen readers announce "y A I r studio" not "y dash A I dash r studio."

**Severity:** non-blocking for static decks and PDFs; blocking for any interactive product UI.

---

## Summary

| # | Gap | Severity | Blocks |
|---|---|---|---|
| 1 | Hebrew voice samples unreviewed | high | public Hebrew copy |
| 2 | Hebrew vocab partially unreviewed | high | public Hebrew copy |
| 3 | Form components beyond `.input` | medium | any product UI with forms |
| 4 | Light mode unproven | medium | print, light-mode marketing |
| 5 | Lucide icon selections undefined | low | none — needs ongoing decisions |
| 6 | Interaction states unexercised | medium | product UI |
| 7 | Motion patterns undefined | low | none — defaults are sufficient |
| 8 | SVG assets pipeline-untested | medium | carousel pipeline |
| 9 | No JSON tokens export | low | normal integration work |
| 10 | No a11y audit | medium | interactive product UI |

**Nothing here blocks starting implementation.** Items 1, 2, and 8 should be resolved before public shipping. Everything else is normal in-flight design work that gets resolved by doing the build.
