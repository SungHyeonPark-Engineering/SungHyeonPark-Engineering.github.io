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

The portfolio uses plain HTML and CSS with optional JavaScript for public visit
counts and browser privacy preferences. Content remains readable without JavaScript.
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

## Free public visit counter

Both homepages load `analytics.js` and display Today / Total visits in the footer.
Set `counterOrigin` to the owner's GoatCounter HTTPS subdomain. No API token or
password belongs in this repository.

Required account settings:
- Dashboard visibility: **Private**.
- **Allow adding visitor counts on your website**: enabled.
- **Data retention in days**: **0** (no automatic deletion).
- **Sessions**: enabled (keep duplicate filtering).

The site records one virtual path per Korean date: `/visits/YYYY-MM-DD`. Both
language pages use this same path. This avoids counting language changes as new
page paths and makes the daily counter use Asia/Seoul rather than UTC. We do not
record the actual page path. Referrers contain only their HTTP(S) origin. Query
strings, fragments, contact details and custom identifiers are not sent.

Today reads `/counter/%2Fvisits%2FYYYY-MM-DD.json`; total reads
`/counter/TOTAL.json`. Use a dedicated GoatCounter site so unrelated page paths
do not inflate the total. Counters are cached by the service for up to four hours;
even "no such daily path" can be cached. The first request waits briefly after
loading the tracker to allow aggregation. The date follows the visitor's device
clock converted to Korea time. The total is since installation, not historical
visits before tracking was enabled.

These are session-based visits, not unique people over all time. Sessions can
expire after eight hours, and a return on a new Korean date counts again.
Network changes, shared networks, bots and blockers can affect the result.
The two counters can have different cache ages. An unavailable count displays
an em dash; a confirmed missing daily path with an available total displays zero.

Do Not Track, Global Privacy Control, and browser exclusion prevent collecting a
visit. Public aggregate numbers may still load. The preference page itself is not
tracked. Use `privacy.html` to exclude your maintenance browser. Each device and
browser must be configured separately. Clearing site data removes the preference.

Detailed statistics remain in the owner's GoatCounter account. Enabling the public
counter reveals aggregate path counts, not dashboard access. Keep the dashboard
private; there is no client-side password or public API credential.

Deployment files: `index.html`, `ko.html`, `styles.css`, `analytics.js`,
`analytics-preferences.js`, `privacy.html`, and `README.md`. Existing PDF/image
assets are unchanged. To disable collection, remove the homepage analytics script
tags (the counters will also stop updating).

Official references:
- https://www.goatcounter.com/
- https://www.goatcounter.com/help/visitor-counter
- https://www.goatcounter.com/help/sessions
- https://www.goatcounter.com/help/js
- https://github.com/arp242/goatcounter/blob/main/tpl/settings_main.gohtml



## Research photographs (2026-10-08, revision 2)

The bilingual portfolio groups photographs into four research cases: Overlay testing and crack observation, epoxy mixture performance, porous pavement field measurement, and low-temperature binder testing. Each case describes the research question and the owner's verified contribution, distinguishing performed tests from supporting roles.

The original portrait remains. Nine research images replace the preparation-focused gallery. The Overlay sequence is material C, first test, from Photo 3.14 of the 2023 Godeok Bridge pavement evaluation report. The setup image is illustrative of the test arrangement, not asserted to show that exact specimen. Epoxy images illustrate ITS loading and reported Cantabro test stages; a matched before/after specimen identity is not asserted. Full reports, raw datasets, local paths, and private review documents are not published.

Web images preserve the complete source composition, with responsive WebP encoding and no EXIF, GPS, or XMP metadata. No specimen features or experimental observations are generated or retouched. Alternative text and image links are available without JavaScript; the dialog supports Escape, closing, and focus restoration. The existing portrait, analytics, and privacy implementation are retained. Previous image assets remain available for history but are not used in the new gallery.
