# Shifty

A responsive starter website for Shifty, published with GitHub Pages.

**Website:** https://viktorvanchov.github.io/shifty/

## Local development

Open this folder in PyCharm. The website uses plain HTML and CSS, so no dependencies or build step are required.

To preview it locally, run:

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

## Editing

- `index.html` — page content and structure
- `styles.css` — responsive layout and styling
- `favicon.svg` — browser icon
- `.nojekyll` — serves the files directly without Jekyll processing

## Deployment

GitHub Pages serves the root of the `main` branch. Commit and push changes to `main` to update the website automatically.

```sh
git add .
git commit -m "Update website"
git push
```
