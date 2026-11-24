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
- `language.js` — Macedonian/English translations and language preference
- `favicon.svg` — browser icon
- `.nojekyll` — serves the files directly without Jekyll processing

## Languages

Use the MK / ENG switch in the header to change the full page between Macedonian and English. The selection is saved locally in the visitor's browser. On a first visit, a Macedonian browser uses MK; other browsers use ENG. If browser storage is unavailable, the switch still works for the current visit. English remains available when JavaScript is disabled.

Page copy uses `data-i18n` keys in `index.html`; Macedonian translations are in `language.js`. Accessibility labels, page title, and description also change with the selected language.

## Registration forms

Hero, audience-card, and registration-section buttons link directly to the matching Google Form in the same tab. The header Register button leads to the choice of forms. The forms are questionnaires in Macedonian; the page explains this in both languages.

- [Restaurant/company questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSfoK0FfWm3SF69ETOq4QsDGu4lbcuCc0Rvu7ujj5DT_COLRrA/viewform)
- [Worker questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSdgBvmyeItlzpUliH3jFv2BsTFVbWh77Y2zmos-AJJ7jHS9HA/viewform)

To replace a form, update all three matching `a[data-registration]` links in `index.html`.

## Brand

`assets/logo.svg` is a blue vector adaptation of the supplied Shifty logo reference. The landing page uses no stock photography.

## Deployment

GitHub Pages serves the root of the `main` branch. Commit and push changes to `main` to update the website automatically.

```sh
git add .
git commit -m "Update website"
git push
```
