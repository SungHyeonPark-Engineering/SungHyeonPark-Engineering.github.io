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
- `assets/2025-kgs-fall-paper.pdf` — 2025 KGS Fall conference paper
- `assets/2025-kgs-fall-poster.pdf` — 2025 KGS Fall conference poster
- `assets/2026-kgs-spring-paper.pdf` — 2026 KGS Spring conference paper
- `assets/2026-kgs-spring-poster.pdf` — 2026 KGS Spring conference poster
- `README.md` — project instructions

The portfolio uses plain HTML and CSS, with optional JavaScript for visit analytics
and browser privacy preferences. The portfolio remains readable without JavaScript.
No package manager or build step is required.

## Publication Links

Published journal article titles and DOI identifiers link directly to their DOI records.
Publication metadata is verified against the official journal record before release.

The 2025 and 2026 Korean Geotechnical Society conference entries link to the publicly
approved paper and poster PDFs stored in the repository's `assets` directory.

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
- `assets/2025-kgs-fall-paper.pdf`
- `assets/2025-kgs-fall-poster.pdf`
- `assets/2026-kgs-spring-paper.pdf`
- `assets/2026-kgs-spring-poster.pdf`

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
5. Confirm that the 2026 article shows volume 16, issue 1, pages 1–10, and DOI
   `10.22702/jkai.2026.16.1.1`.
6. Test the English–Korean language links in both directions.
7. Click the public email address and confirm that the email application opens.
8. Confirm that no private phone number, internal company material, or unpublished PDF is present.
9. Open all four conference PDF buttons and confirm that the correct 2025/2026 paper or poster loads.

## Private visit analytics

Both language pages load `analytics.js`. It loads Umami Cloud only on the live HTTPS
domain, after a valid Website ID is configured. An empty ID leaves analytics off.

1. Sign in to your own account at https://cloud.umami.is and add the website
   `sunghyeonpark-engineering.github.io`.
2. Copy its Website ID into the `websiteId` constant in `analytics.js`.
   This collection ID is public; never put an API key or password in this repository.
3. Leave Share URLs disabled and do not grant team access if the statistics must
   remain owner-only. Visit data lives in Umami, not in this public repository.
4. Deploy the changed files and visit both homepages from a browser without an
   exclusion setting. Check the corresponding events in the private Umami dashboard.
   A successful script load alone does not confirm that events were received.
5. Use Sessions to inspect anonymous visit times and activity. Check the dashboard's
   displayed timezone before interpreting timestamps.
6. Open `privacy.html` and choose "Exclude my visits" in each browser used for
   maintaining this site. The page is not tracked.

The private dashboard is https://cloud.umami.is. The site's privacy page is public:
it changes a local browser preference and is not an administrator login.

Collected page URLs omit query strings and fragments, and referrers are reduced to
their origin. This also removes UTM campaign details. Do Not Track, Global Privacy
Control, and the browser's opt-out preference suppress collection. If preference
storage cannot be read, collection is suppressed. Ad blockers and JavaScript being
disabled can also prevent a visit from appearing.

This does not identify visitors by real name, email, or institution, and anonymous
sessions are not an exact count of unique people. It cannot restore pre-installation
visits. PDF requests opened directly and PDF reading time are not tracked.

Files added for this feature: `analytics.js`, `analytics-preferences.js`,
and `privacy.html`. Include these along with the updated homepages when deploying.
Removing the two homepage analytics script tags disables collection.

Official references:
- https://docs.umami.is/docs/collect-data
- https://docs.umami.is/docs/sessions
- https://docs.umami.is/docs/enable-share-url
- https://docs.umami.is/docs/tracker-configuration
- https://docs.umami.is/docs/exclude-my-own-visits
