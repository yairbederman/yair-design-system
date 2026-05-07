# Fonts

The brand uses two Google Fonts, loaded over CDN in `colors_and_type.css`:

- **JetBrains Mono** (display + mono) — weights 400, 500, 700 — https://fonts.google.com/specimen/JetBrains+Mono
- **IBM Plex Sans** (body) — weights 400, 500, 600 — https://fonts.google.com/specimen/IBM+Plex+Sans

Both are SIL Open Font License (OFL) — free for commercial use including embedding.

## Self-hosting

For offline / print / regulated environments, drop the `.woff2` files here:

```
fonts/
  JetBrainsMono-Regular.woff2
  JetBrainsMono-Medium.woff2
  JetBrainsMono-Bold.woff2
  IBMPlexSans-Regular.woff2
  IBMPlexSans-Medium.woff2
  IBMPlexSans-SemiBold.woff2
```

Then comment out the `@import` at the top of `colors_and_type.css` and uncomment the `@font-face` declarations (TODO: add when needed).

## Substitution flag

Neither family has been substituted. Both are loaded from their canonical Google Fonts source.
