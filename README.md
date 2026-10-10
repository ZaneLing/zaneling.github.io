# Ziyang Ling · Personal Homepage

A simple bilingual personal website for GitHub Pages. It is plain HTML, CSS, and JavaScript; no build step is needed.

## Content

- English and Chinese, with an automatic browser-language default and a manual switch
- Short bio, selected work, and contact information
- Links to ORCID, Google Scholar, LinkedIn, and GitHub
- Responsive layout for desktop and mobile

## Preview locally

From this folder, run `python3 -m http.server 8765` and open `http://localhost:8765`.

## Publish on GitHub Pages

In this repository's **Settings → Pages**, choose **Deploy from a branch**, `main`, and `/ (root)`. The homepage will be available at `https://zaneling.github.io/` after GitHub finishes deploying.

## Edit the site

- `index.html` contains the page structure and profile links.
- `script.js` contains the English and Chinese text.
- `style.css` contains layout and colors.

The existing `assets/Ziyang_Ling_CV.pdf` is kept in the repository but is not linked from the homepage. Review and update it before making it public again: its publication list includes a 2025 biomedical named entity recognition paper whose published author list does not include Ziyang Ling.
