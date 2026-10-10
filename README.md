# Ziyang Ling · Personal Homepage

A bilingual academic homepage for GitHub Pages. It uses plain HTML, CSS, and JavaScript, with no build step. The layout follows [Haolin Yang's homepage](https://tidalharley.github.io/) at the site owner's request; this repository contains its own copy and styling.

## Content

- About section with a personal portrait and English/Chinese introductions
- News, research papers, GitHub projects, education, and experience
- Links to email, Google Scholar, GitHub, ORCID, and LinkedIn
- Responsive section navigation and expandable research figures

## Edit

- `index.html`: page structure, links, and English copy
- `script.js`: Chinese copy, language switch, section navigation, figure preview
- `style.css`: layout and visual design
- `assets/`: portrait, research figures, favicon, and an older unlinked CV

The portrait was copied from the photo supplied by Ziyang Ling with EXIF metadata removed. The THOR diagram comes from the `Theta-Gamma` repository. The PRISMATIC diagram was extracted from the preprint at Zenodo record `23281340`.

The older CV remains unlinked pending a review of its publication list.

## Local preview

Run `python3 -m http.server 8765` and open `http://localhost:8765`.

## Publishing

GitHub Pages deploys from the `main` branch root to `https://zaneling.github.io/`.
