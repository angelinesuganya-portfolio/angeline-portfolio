# Dr Rofayda Salem — Academic Portfolio

A responsive, single-page portfolio presenting Dr Rofayda Salem’s work in architecture and environmental design, Mashrabiya research, passive cooling, ceramic evaporative systems, teaching and professional practice.

## Run locally

The site is built with plain HTML, CSS and JavaScript; it has no build step or package dependencies.

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Project structure

- `index.html` — portfolio content and semantic page structure
- `assets/css/style.css` — visual system, layout and responsive styles
- `assets/js/script.js` — mobile navigation and project filtering
- `assets/images/` — project photography and supporting artwork

Google Fonts are loaded when available; system font fallbacks keep the page readable if the font service is unavailable. The local project images do not depend on a remote image host.

## Updating content

Edit the relevant section in `index.html`. Keep project filter values aligned with the card `data-category` values (`research`, `fieldwork`, and `practice`). Store new images under `assets/images/` and use descriptive alternative text.
