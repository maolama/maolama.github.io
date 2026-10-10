# Personal website: Mohammad Ali Olama

A bilingual (English LTR / Persian RTL) personal website. It's static HTML, CSS and JS with no build step, served by GitHub Pages.

Pages: Home · About · Work · Journey · Blog · Contact (hash routes such as `#/about`).

## Where things live

| Path | What it is |
|---|---|
| `assets/js/content.js` | **All text, in both languages.** The only file you need to edit for content. Items marked `MOCK` are placeholders. |
| `assets/js/site.js` | Shared engine: routing, language/RTL, colour themes, light/dark, animations, shared pages and components |
| `assets/css/base.css` | Shared foundation: colour system (any hue becomes a full light and dark scheme), type scale, Material components |
| `designs/` | Design gallery (`designs/index.html`) and the 20 alternative designs. `designs/final/` redirects to the root. |
| `designs/<name>/` | The 20 candidate designs. Each sets its own layout, fonts, home page and default colour. |
| `designs/_thumbs/` | Gallery screenshots |
| `index.html` | For now, the design gallery. The chosen design will replace it. |
| `assets/img/` | Photos (set the path in `content.js`) |
| `assets/cv-academic.pdf`, `assets/cv-developer.pdf` | CV downloads (to be added) |

## Fonts

- English body text: Roboto Flex, Inter, IBM Plex Sans or Literata, depending on the design. All are chosen for on-screen readability.
- Persian: Vazirmatn everywhere.
- Icons: Material Symbols. Only the icons a page actually uses are downloaded.

## Local preview

```
python3 -m http.server 8765
```

Then open http://localhost:8765
