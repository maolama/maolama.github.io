# Personal academic & professional website

A bilingual (English / Persian) static site with no build step, served by GitHub Pages.

- `assets/js/content.js`: **all content, in both languages**. This is the only file you need to edit for text.
- `assets/js/site.js`: shared language engine (switching, RTL, remembering the visitor's choice)
- `assets/img/`: your photo (set its path in `content.js`)
- `assets/cv.pdf`: your CV (the "Download CV" links point here)
- `designs/<name>/`: four candidate designs (scholar, editorial, bento, swiss), all reading the same content
- `index.html`: for now, a gallery for comparing the designs; the chosen design will replace it

Fonts: Inter for English, Vazirmatn for Persian, with design-specific heading fonts.

Local preview: `python3 -m http.server 8765`, then open http://localhost:8765
