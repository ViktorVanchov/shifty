# Shifty

A blue-and-white landing page for Shifty, connecting restaurants looking for staff with people looking for restaurant work. Published with GitHub Pages.

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

## Registration forms

The two registration buttons are intentionally disabled until form URLs are provided. In `index.html`, replace each `button[data-registration]` with an anchor linking to the correct form, remove `disabled`, and update the coming-soon copy and FAQ.

## Brand

`assets/logo.svg` is a blue vector adaptation of the supplied Shifty logo reference. The landing page uses no stock photography.

## Deployment

GitHub Pages serves the root of the `main` branch. Commit and push changes to `main` to update the website automatically.

```sh
git add .
git commit -m "Update website"
git push
```
