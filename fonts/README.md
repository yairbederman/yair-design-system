# Fonts

The brand uses Google Fonts, loaded over CDN in `colors_and_type.css`. All families are SIL Open Font License (OFL) — free for commercial use including embedding.

## English

- **Inter** — body / UI — weights 400, 500, 600, 700 — https://fonts.google.com/specimen/Inter
- **Geist Mono** — technical labels, accent, code — weights 400, 500, 600, 700 — https://fonts.google.com/specimen/Geist+Mono
- **JetBrains Mono** — legacy display/mono for original English UI kits — weights 400, 500, 700 — https://fonts.google.com/specimen/JetBrains+Mono
- **IBM Plex Sans** — legacy body for original English UI kits — weights 400, 500, 600 — https://fonts.google.com/specimen/IBM+Plex+Sans
- **IBM Plex Mono** — fallback for Geist Mono and Hebrew technical labels — https://fonts.google.com/specimen/IBM+Plex+Mono
- **Space Mono** — final fallback — https://fonts.google.com/specimen/Space+Mono

## Hebrew

- **Assistant** — body / UI — weights 400, 500, 600, 700 — https://fonts.google.com/specimen/Assistant
- **Heebo** — fallback — https://fonts.google.com/specimen/Heebo
- **Noto Sans Hebrew** — final fallback — https://fonts.google.com/specimen/Noto+Sans+Hebrew

Hebrew body text **never** uses monospace. Mono is reserved for small technical labels (≤14px) only.

## Self-hosting

For offline / print / regulated environments, drop `.woff2` files here and replace the `@import` lines at the top of `colors_and_type.css` with `@font-face` declarations.

## Substitution flag

No substitutions. All families are loaded from their canonical Google Fonts source.
