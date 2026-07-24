# Sung Hyeon Park Academic Portfolio

This repository contains the English and Korean GitHub Pages portfolio of Sung Hyeon Park.
The site presents research experience in pavement engineering, asphalt materials, field
performance evaluation, and complementary experimental validation work.

## Public Website

- English: <https://sunghyeonpark-engineering.github.io/>
- Korean: <https://sunghyeonpark-engineering.github.io/ko.html>

## Repository Files

- `index.html` — English homepage
- `ko.html` — Korean homepage
- `styles.css` — shared design for both pages
- `hero-engineering-research.png` — shared hero illustration
- `README.md` — project instructions

The site uses plain HTML and CSS. It does not require JavaScript, React, a package
manager, or a build step.

## Publication Links

Published journal article titles link directly to their DOI records. A forthcoming
article is intentionally shown without a link, volume, issue, pages, or publication
date until those details are officially assigned.

## CV and Contact

The current site states that the CV is available upon request. No placeholder CV or
non-working download button should be added. A downloadable CV should be introduced
only after the final PDF has been reviewed for public release.

## Local Preview

### Easiest check

1. Open the repository folder.
2. Double-click `index.html` to check the English page.
3. Double-click `ko.html` to check the Korean page.
4. Confirm that the image, navigation links, language links, DOI links, and email link work.

### More reliable local server

Open a terminal in the repository root and run one of these commands:

```bash
python -m http.server 8766
```

On Windows, if `python` is not recognized, try:

```bash
py -m http.server 8766
```

Then open:

- <http://127.0.0.1:8766/index.html>
- <http://127.0.0.1:8766/ko.html>

Press `Ctrl + C` in the terminal to stop the preview server.

## GitHub Update Checklist

Keep the existing repository and GitHub Pages settings. Upload or commit only the
intended root-level changes:

- `index.html`
- `ko.html`
- `styles.css`
- `README.md`

The existing `hero-engineering-research.png` does not need to be uploaded again unless
the image itself changes. Do not upload an `outputs` folder. If `cv-placeholder.txt`
still exists in the repository, delete it.

Suggested commit message:

```text
Update bilingual academic portfolio and publication links
```

After GitHub finishes processing the commit:

1. Open the English and Korean public URLs listed above.
2. Press `Ctrl + F5` to force the browser to load the latest files.
3. Check both desktop and mobile-width layouts.
4. Click each published paper title and confirm that it opens the correct DOI record.
5. Confirm that the forthcoming paper has no invented DOI or publication details.
6. Test the English–Korean language links in both directions.
7. Click the public email address and confirm that the email application opens.
8. Confirm that no private phone number, internal company material, or unpublished PDF is present.
