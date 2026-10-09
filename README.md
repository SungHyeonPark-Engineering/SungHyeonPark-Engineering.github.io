# Sung Hyeon Park Academic Portfolio

Bilingual research portfolio hosted at https://sunghyeonpark-engineering.github.io/.
English home: `index.html`; Korean home: `ko.html`.

## Site structure

The home page has six sections: introduction, selected research, capabilities,
outputs, background, and contact. Pavement research appears in this order:

1. Low-temperature binder performance
2. Porous pavement field performance
3. Epoxy asphalt mixture performance
4. Mastic asphalt and Overlay testing
5. Anti-icing mixture standardization
6. Binder production and stiffness (published in 2026, after graduation)

The four leading topics link to detailed project pages. Complementary ground-anchor
experience has a separate page linked from the conference outputs. Each detail page
has an English file and a matching `-ko.html` file:

- `low-temperature-binder.html`
- `porous-asphalt-field.html`
- `epoxy-asphalt.html`
- `mastic-asphalt-overlay.html`
- `ground-anchor-validation.html`

The site uses static HTML and CSS. No build step or package manager is needed.
`photos.js` provides optional accessible image enlargement; image links still work
without JavaScript. `styles.css` also supports the existing `privacy.html` page.
`sitemap.xml`, `robots.txt`, canonical and language links support discovery.
`assets/portfolio-share.png` and `assets/favicon.svg` provide sharing and tab graphics.

## Research and publication content

Descriptions distinguish direct testing from support, personal participation from
project periods, and published/presented work from planned outputs. Standardization
reached final review; formal adoption remains incomplete. The October 2026 KSCE
conference entry is explicitly planned and must not be relabeled as completed
without confirmation.

Journal titles, author order, corresponding-author marks, and DOI links retain the
official records. The four public KGS paper/poster PDFs retain their original page
contents; document titles and authors are recorded in PDF metadata. Each conference
has its own record and full-poster thumbnail. Thumbnail links open the PDF.

The CV is available upon request. Keep public contact links working and never add
private source documents, unreviewed CV files, credentials, or internal work records.

## Research images

The portrait and nine research photographs preserve the full source composition.
WebP copies omit image metadata. Research observations are not generated or retouched.
The Overlay sequence is material C, first test, from Photo 3.14 of the 2023 Godeok
Bridge pavement evaluation report. The setup photograph is not asserted to show that
same specimen. Cantabro photographs are representative specimens from separate
photographic records. These distinctions remain in the detail pages and captions.
Full reports, raw videos, and private review material are not website assets.

## Preview and verification

Run `python -m http.server 8766` in the repository and open
http://127.0.0.1:8766/. Verify both homepages and all ten detail pages, language-pair
navigation, photo enlargement and keyboard closing, DOI/PDF links, and narrow screens.
Analytics collection is restricted to the production HTTPS hostname. On production,
use the privacy page to exclude the maintenance browser before testing.

Deploy only the intended site files. Preserve existing unrelated assets and settings.
After deployment, verify the Pages build and the actual published pages and assets.

## Free public visit counter

Both homepages and all research detail pages load `analytics.js` and display Today / Total visits in the footer.
Set `counterOrigin` to the owner's GoatCounter HTTPS subdomain. No API token or
password belongs in this repository.

Required account settings:
- Dashboard visibility: **Private**.
- **Allow adding visitor counts on your website**: enabled.
- **Data retention in days**: **0** (no automatic deletion).
- **Sessions**: enabled (keep duplicate filtering).

The site records one virtual path per Korean date: `/visits/YYYY-MM-DD`. All
language and research pages use this same path. This avoids counting language changes as new
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

Official references:
- https://www.goatcounter.com/
- https://www.goatcounter.com/help/visitor-counter
- https://www.goatcounter.com/help/sessions
- https://www.goatcounter.com/help/js
- https://github.com/arp242/goatcounter/blob/main/tpl/settings_main.gohtml



