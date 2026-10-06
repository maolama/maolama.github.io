# Personal website

A bilingual (English LTR / Persian RTL) personal website in Material 3 style.
It's static HTML, CSS and JS with no build step, served by GitHub Pages.

Pages: Home · About · Projects · Writing · Resume · Contact (hash routes such as `#/about`).

- `assets/js/content.js`: **all content, in both languages**. This is the only file you need to edit for text.
- `assets/js/site.js`: shared engine (routing, language/RTL, light/dark theme, ripple, animations, shared pages)
- `assets/css/material.css`: Material 3 foundation (type scale, buttons, cards, chips, lists, motion)
- `designs/<name>/`: candidate designs (workspace, constellation, story); each sets its own colours, layout, home and about pages
- `assets/img/`: photo (set its path in `content.js`)
- `assets/cv.pdf`: CV file for the "Download CV" button
- `index.html`: for now, a gallery for comparing designs; the chosen design will replace it

Fonts: Roboto Flex (English) and Vazirmatn (Persian), with Material Symbols icons. Only the icons used are downloaded.

Local preview: `python3 -m http.server 8765`, then open http://localhost:8765
