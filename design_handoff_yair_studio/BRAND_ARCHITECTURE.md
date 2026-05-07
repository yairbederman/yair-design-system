# Brand architecture — y[AI]r studio

> Status: rule. Applies to all current and future products under the studio.

## The decision

**y[AI]r studio** is a **personal expert / studio brand** — Yair's
consulting practice. It speaks in the first person where appropriate
(_"I help engineering teams ship AI in production"_) and trades on the
practitioner's track record.

A **productized vertical offer** — for example, **VoiceEngine** — is a
different animal. It is a product, not a person. It must not inherit the
studio's first-person consulting voice or distort the studio's identity
by widening it into a generic product brand.

Therefore: **the studio brand stays narrow, and products live alongside
it under a clear "by y[AI]r studio" attribution.**

---

## The two surfaces

| Surface | y[AI]r studio | VoiceEngine (and future products) |
|---|---|---|
| What it is | Expert / studio brand | Productized vertical offer |
| Sells | Consulting · workflow audits · AI systems implementation · strategy + build partnership | A specific product outcome |
| Voice | First person where appropriate ("I help…", "we ship") | Product / outcome language. **Never** "I help…" copy. |
| Naming | `y[AI]r studio` | `VoiceEngine by y[AI]r studio` |
| Visual identity | The studio system in this repo (block AI logo, dark-first, mono-led) | May develop its own product identity. Must clearly attribute to the studio. |
| Distribution | LinkedIn carousels, decks, case studies, the studio website | Product website / landing pages. Cross-link to the studio for credibility. |

### How VoiceEngine should present

- Lockup: **"VoiceEngine by y[AI]r studio"** wherever the parent brand
  is referenced.
- Copy: speaks in **product / outcome language** — what the product
  does, what changes for the customer. Not _"I help you…"_; instead
  _"VoiceEngine handles…"_, _"VoiceEngine ships with…"_.
- Logo / wordmark: VoiceEngine may have its own mark. The studio
  wordmark appears alongside it as the attribution line, in a smaller
  size, using `wordmark-compact.svg` or the inline `.wordmark` span.
- Tone: still technical, premium, practical — the family resemblance is
  intentional. But the first-person consulting voice does **not** carry
  over.

### What the studio does NOT become

- The studio is **not** widened into a generic product brand to make
  room for VoiceEngine.
- The studio's wordmark, voice, and copy patterns do **not** retrofit
  to product positioning.
- Future products do **not** force redesigns of the studio identity.

---

## What is intentionally not in this rule

This document is the **architectural decision** — not a full product
design system. Specifically, this rule does not cover and does not
deliver:

- A VoiceEngine logo or wordmark.
- A VoiceEngine color or type system.
- VoiceEngine UI components.
- A VoiceEngine landing page or marketing kit.

Those should be designed when VoiceEngine actually needs them, as a
separate piece of work. The studio system in this repo continues to
serve y[AI]r studio surfaces only.

---

## Quick test for any new copy / surface

Ask: **does this read as Yair's consulting practice, or as a product?**

- If it's the studio: first person ok, studio voice rules apply, use the
  studio system as-is.
- If it's a product: outcome language only, attribute as "by y[AI]r
  studio", and don't borrow the consulting voice.

When in doubt, attribute. _"VoiceEngine by y[AI]r studio"_ is always
safe; _"y[AI]r studio's VoiceEngine"_ widens the studio in ways this
rule is here to prevent.
