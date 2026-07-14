# Handoff — Marketing Site template (Fazenda Vidigal)

Entry: `templates/marketing-site/MarketingSite.dc.html` (+ `Stack.jsx`, `ds-base.js`).
This log records the defects found during the build of the site recreation from the Figma frame (`node 2:3` / hero `7:4` / gallery `7:5` / Giano `26:132` / family `26:99`) and how each was corrected, so a developer picking this up knows the reasoning behind the current markup.

## Issues found & fixed

1. **Design-system bundle stale at load (404).**
   The `_ds_bundle.js` referenced by every `<x-import>` had not recompiled when the page first loaded, so all components fell back to broken placeholders. Resolved by recompiling (`check_design_system` → "counts in sync") before verifying. Not a code bug — a build-timing issue.

2. **Broken logo/photo image paths.**
   `Navbar` and `Footer` components ship default `logo`/`signature`/`photo` props as root-relative strings (`assets/...`). From the template's own directory (`templates/marketing-site/`) those resolved to a non-existent nested path → 404. Fixed by passing explicit `../../assets/...` paths at every call site (template + `core.card.html`).

3. **Nav link wrapping.**
   "Café Vidigal" wrapped to two lines and crowded the CTA. Fixed in `Navbar.jsx` — added `whiteSpace: nowrap` + `flexShrink: 0` to links and the CTA.

4. **Logos color-inverted.**
   Navbar/Footer applied `filter: brightness(0) invert(1)`, flattening the full-color mark (olive leaf, maroon ring, black wordmark) to white. The Figma shows the logo in native color over the dark hero scrim. Removed the filter in all three placements (hero, Navbar, Footer).

5. **Section 3 (Família) had a wrong outer border.**
   Was rendered via `FeatureCard`, which wraps the whole section in a 20px-radius rounded photo container. Source has a **full-bleed** photo with only the inner cream text panel rounded. Rebuilt inline: full-bleed photo bg, cream panel absolutely positioned at `left:50 top:119 696×630 radius:20`.

6. **Section 5 (Galeria) structure.**
   Was a padded grid with the quote **above**. Source is edge-to-edge (no side borders, no gaps), 15 images in a 5×3 grid, with the quote + `V. Vidigal` signature **below** the grid. Rebuilt to match.

7. **Section 5 center image wrong.**
   The center tile (row 2, col 3) was showing a planning **wireframe sketch** (`valeria-painting.png` = Figma `image-1` frame, not part of the site). The intended center image is the **Valéria portrait** (`gallery-07.png`, Figma "Rectangle 10"). Fixed the `galleryFiles` order to `[lead image] + 14 photos`, which centers the portrait at position 7. Removed the wireframe sketch from the gallery.

8. **Section 6 (Giano) sizing/background.**
   Panels were `45% / max-width:560`. Source uses exact `675×768` panels, `30px` padding / `30px` gap, olive wash `rgb(171,186,112)`, portrait positioned `49.624% 35.599% / 132.523% 207.067%`, and a small Fazenda Vidigal mark at `603,693 45×53`. Applied verbatim.

9. **Section 8 (Rodapé) corners + reveal effect + images.**
   Footer had a 37px bottom radius and wrong contents (nav/contact lists). Source footer is a full-bleed photo with the two brand marks centered, **no bottom radius**. Rebuilt inline and set `position: sticky; bottom:0; z-index:0` so it stays pinned and is revealed from behind the last section (which has `z-index:2` + rounded bottom corners) as the page scrolls — the "fixed reveal" effect requested. Outer wrapper `overflow:hidden` removed so sticky works.

## Known caveats / substitutions

- **Rectangle3 default image unknown.** The source gallery's first tile used the `Rectangle3` component's built-in default, which was not extractable after the Figma VFS unmounted. `product-01.jpg` (a real coffee-product photo from the file) stands in as the lead tile. Swap it if the true default is recovered.
- **Stack carousel** is a self-contained plain-React + CSS-transform reimplementation of the React Bits `Stack` (no `motion` dependency) so it runs inside a Design Component. Drag-past-threshold or click sends the front card to the back.
- **Fonts:** Inter throughout (Google Fonts) — matches the source, no substitution.
