# Ziyang Ling — Bilingual Academic Homepage

A compact bilingual academic homepage for GitHub Pages.

## Features

- English and Chinese interface
- Language preference stored in the browser
- Publications and projects displayed as separate rows
- Responsive layout
- No framework or build process
- CV hosted as a static PDF

## Deploy

1. Create or open the public repository `zaneling.github.io`.
2. Upload all files in this directory to the repository root.
3. Open **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Visit `https://zaneling.github.io`.

## Repository structure

```text
zaneling.github.io/
├── assets/
│   ├── favicon.svg
│   └── Ziyang_Ling_CV.pdf
├── index.html
├── script.js
├── style.css
├── .nojekyll
└── README.md
```

The website is intentionally static. Python is not required for GitHub Pages.
For Python research repositories, use the separate Python project template supplied with this site.
