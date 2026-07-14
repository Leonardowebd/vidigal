# Fazenda Vidigal — Design System

## Source

Built from a single mounted Figma file, **"Vidigal.fig"**:
- Page `/Fazenda` → frame `Desktop - 1` (the full marketing-site mockup, 1440×6349) and a plain-text copy doc frame (`Fazenda Vidigal — Copy do Site`) listing every section's nav/hero/body copy verbatim.
- Page `/Evento` — present in the file but empty (no frames).
- The file defines **no component library, no Figma Variables/token collections, and no text styles** (METADATA.md's inventories for those are empty) — it is a single hi-fi mockup, not a component system. Everything under `components/` here is therefore an **intentional addition**, reverse-engineered from the repeating visual patterns in that one page (see "Intentional additions" below), not a 1:1 copy of a source component set.

## Who is Fazenda Vidigal

A family-run coffee farm in Barra do Choça, Planalto da Conquista, Bahia (Brazil). Three threads run through the copy: a multi-generation family farm (Valéria Vidigal + Giano Brito, and their children), a working coffee producer with national awards, and a cultural/tourism destination — Valéria's paintings (as "V. Vidigal"), guided farm tours ("Rota do Café"), and an annual industry gathering the family hosts, the "Encontro Nacional do Café" (running since 2007).

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens.
- `components/core/` — reusable primitives: **Button, SectionIntro, PhotoTile, FeatureCard, Navbar, Footer**. Card: `core.card.html`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius/shadow, brand logos, photography).
- `assets/` — the two real logo files + all farm/product/portrait photography used in the mockup (`assets/photos/`).
- `templates/marketing-site/` — `MarketingSite.dc.html`, a full landing-page recreation consuming projects can start from.

## Intentional additions

The source file has zero component instances or variables, so these primitives were extracted from the *repeated visual patterns* in the single mockup page, not copied from a defined library:
- **Button** — the pill-radius CTA shape reused ~7× in the mockup (2 visual variants seen: solid maroon, and white hairline-outline-on-photo). A cream-surface outline variant (`secondary-onlight`) and a small size were added for practical reuse — the source only ever shows the outline variant on top of a photo.
- **SectionIntro** — the eyebrow + italic headline + body paragraph stack repeats identically at the top of 5 sections; extracted as one component.
- **PhotoTile / FeatureCard / Navbar / Footer** — same reasoning: each is a pattern the mockup repeats (photo grid tile, photo-with-floating-panel, logo+links+CTA header, photo-backed closing band), packaged for reuse.

No icon system, UI-state variants (hover/disabled/etc. beyond what's visible), or additional pages exist in the source — none were invented beyond the hover/press states noted below, which follow the same maroon-darkens / opacity-fades logic implied by the button's role as the site's only interactive control.

## Content fundamentals

- **Language:** Brazilian Portuguese, first person plural implied ("nossa fazenda") rarely stated outright — mostly third-person storytelling about the family, occasional direct address to the visitor ("Você pode passar a vida bebendo café...").
- **Tone:** warm, literary, unhurried — short editorial sentences that read like a magazine profile, not marketing bullet points. Headlines lean on contrast/paradox ("entre a ciência e a arte", "antes que o grão exista").
- **Structure:** every section follows the same rhythm — a small bold category eyebrow, an italic semibold or bold-italic headline making an emotional claim, then 1–2 short plain paragraphs with the factual/biographical detail, then (sometimes) a CTA button.
- **Casing:** sentence case throughout, no all-caps shouting; em/en dashes (—) used often for a mid-sentence turn ("ela com a arte, ele com a ciência do campo").
- **No emoji, no exclamation-heavy copy** — the one exception is a single CTA, "Quero fazer a rota do café!", which reads as enthusiastic-but-earned.
- **Buttons** are written as first-person requests from the visitor ("Agendar Visita", "Quero fazer a rota do café!", "Conhecer o Encontro Nacional do Café") rather than imperative commands.

## Visual foundations

- **Color:** a warm cream page surface (`#F6F2E7`) throughout, punctuated by one saturated brand color — a deep maroon/oxblood (`#6B1310`) — used exclusively for the primary CTA and the logo mark. A muted olive-green family (`#ACBA71` and neighbors) washes one full section and tints small leaf accents. Text is a near-black warm charcoal (`#373435`), never pure black.
- **Type:** Inter only, but leaned hard into italic bold/semibold weights as the "display" voice — headlines and pull-quotes are Bold Italic 48px, sub-heads SemiBold Italic 24/20px, body copy is plain Regular 24px, and category eyebrows are Bold (non-italic) 24px. The italic-heavy display pairing on top of a very ordinary grotesk is the system's signature move — like a handwritten aside inside a plainspoken page.
- **Imagery:** full-bleed, warm, sun-lit documentary photography of the plantation, harvest and family — plus two of Valéria's oil paintings used as hero imagery in place of photos in two sections. No stock-photo gloss; everything reads as on-location. A busy edge-to-edge 5-column photo grid (no gutters) appears once as a "wall of moments."
- **Backgrounds:** alternating cream sections and full-bleed photo sections (with a dark 52% scrim for text legibility) — no gradients as decoration, only the exact overlay-scrim gradient over photography and one flat olive photo-wash.
- **Cards / panels:** a single recurring shape — a solid cream (or olive) rounded rectangle (20px radius) floated on top of a full-bleed photo, carrying that section's copy. No borders, no drop shadows anywhere in the source.
- **Buttons:** solid maroon fill (16px radius) as primary; a 1px white inset hairline outline (`shadow: inset 0 0 0 1px white`, no fill) as secondary, used only over photography. No shadow, no gradient. Hover/press states (maroon darkens on hover, secondary fades to 75% opacity, both shrink 2% on press) were added in this system since the static mockup can't show them — kept intentionally minimal, consistent with the flat, shadow-free visual language.
- **Radii:** 16px (buttons), 20px (photo/text panels), 34px (hero image), 37px (bottom corners of the closing footer band) — all bespoke, not a shared scale.
- **Shadows:** none, except the inset hairline button outline above.
- **Transparency/blur:** only the flat-color scrim over hero/footer photography (`rgba(35,1,0,0.52)`) — no blur/glass anywhere.
- **Animation:** none in the source (it's a static mockup); this system uses only simple color/opacity/scale transitions on interactive elements, matching the flat, non-decorative visual language.
- **Layout:** single-column, generous full-bleed sections, alternating text-left/photo-right and text-right/photo-left compositions — no fixed/sticky chrome observed.

## Iconography

The source file defines **no icon system** — no icon font, no SVG icon set, no emoji, no unicode-glyph icons. The only non-photographic vector graphic in the whole file is a single hand-drawn play-button triangle (an exact path lifted from the file, used once on the hero to suggest video). If a consuming project needs icons, pick a plain single-weight SVG set (e.g. Lucide) and flag the substitution — do not invent a bespoke icon language for this brand from scratch.

## Logos

Two real marks exist in the source file (extracted as PNGs, not redrawn):
- `assets/logo-fazenda-vidigal.png` — the primary lockup: a leaf/coffee-cherry emblem + "Fazenda Vidigal" wordmark + a loose olive brush-stroke underline.
- `assets/logo-v-vidigal.png` — Valéria Vidigal's personal signature logotype, "V. Vidigal," used to sign her art/gallery sections.

No other brand marks (favicon, app icon, etc.) exist in the source.
