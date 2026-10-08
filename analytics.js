/* Public collection ID only. Never put a password or API key in this file. */
(() => {
  "use strict";

  const websiteId = "767ebbe5-9c64-4a0a-b8c4-ac875d20c2ca";
  const productionHost = "sunghyeonpark-engineering.github.io";
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  function excluded() {
    const browserOptOut = [navigator.doNotTrack, window.doNotTrack, navigator.msDoNotTrack]
      .some(value => value === 1 || value === "1" || value === "yes");
    if (browserOptOut || navigator.globalPrivacyControl === true) {
      return true;
    }
    try {
      return Boolean(localStorage.getItem("umami.disabled"));
    } catch {
      // Do not collect when the browser cannot read its opt-out preference.
      return true;
    }
  }

  if (!uuid.test(websiteId) || location.protocol !== "https:" ||
      location.hostname !== productionHost || excluded() ||
      document.getElementById("portfolio-analytics")) {
    return;
  }

  window.portfolioAnalyticsBeforeSend = (_type, payload) => {
    if (excluded()) return false;
    const clean = { ...payload };
    // URL parameters/fragments may contain private data. Keep only the page path.
    try {
      clean.url = new URL(payload.url, location.origin).pathname;
    } catch {
      return false;
    }
    // Referring site is sufficient; do not send its path, query or fragment.
    try {
      const referrer = new URL(payload.referrer);
      clean.referrer = ["http:", "https:"].includes(referrer.protocol) ? referrer.origin : "";
    } catch {
      clean.referrer = "";
    }
    return clean;
  };

  const script = document.createElement("script");
  script.id = "portfolio-analytics";
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.setAttribute("data-website-id", websiteId);
  script.setAttribute("data-domains", productionHost);
  script.setAttribute("data-do-not-track", "true");
  script.setAttribute("data-exclude-search", "true");
  script.setAttribute("data-exclude-hash", "true");
  script.setAttribute("data-before-send", "portfolioAnalyticsBeforeSend");
  document.head.appendChild(script);
})();
