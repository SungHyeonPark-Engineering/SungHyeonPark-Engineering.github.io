/* GoatCounter public site address only; never put an API token here. */
(() => {
  "use strict";
  const counterOrigin = "https://sunghyeonpark-engineering.goatcounter.com";
  const productionHost = "sunghyeonpark-engineering.github.io";
  const isKorean = document.documentElement.lang === "ko";
  const labels = isKorean
    ? { unavailable: "방문 통계를 불러오지 못했습니다.", pending: "방문 통계 연결 준비 중" }
    : { unavailable: "Visit counts are temporarily unavailable.", pending: "Visit counter setup is pending." };
  const totalElement = document.getElementById("visits-total");
  const todayElement = document.getElementById("visits-today");
  const statusElement = document.getElementById("visits-status");
  const dateElement = document.getElementById("visits-date");

  function dayInKorea(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en", {
      timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit"
    }).formatToParts(date);
    const value = name => parts.find(part => part.type === name).value;
    return value("year") + "-" + value("month") + "-" + value("day");
  }

  function excluded() {
    if ([navigator.doNotTrack, window.doNotTrack, navigator.msDoNotTrack]
      .some(value => value === 1 || value === "1" || value === "yes") ||
      navigator.globalPrivacyControl === true) return true;
    try {
      return Boolean(localStorage.getItem("portfolio.analytics.disabled") || localStorage.getItem("umami.disabled"));
    } catch { return true; }
  }

  function referrerOrigin() {
    try {
      const referrer = new URL(document.referrer);
      return ["http:", "https:"].includes(referrer.protocol) ? referrer.origin : "";
    } catch { return ""; }
  }

  async function readCount(path) {
    const response = await fetch(counterOrigin + "/counter/" + encodeURIComponent(path) + ".json", {
      credentials: "omit", referrerPolicy: "no-referrer", signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) return { status: response.status };
    const data = await response.json();
    if (typeof data.count !== "string" || !/^\d[\d,\s]*$/.test(data.count)) throw new Error("Invalid counter");
    const number = Number(data.count.replace(/[,\s]/g, ""));
    if (!Number.isSafeInteger(number) || number < 0) throw new Error("Invalid counter");
    return { status: response.status, number };
  }

  async function displayCounts() {
    if (!totalElement || !todayElement || !statusElement) return;
    const day = dayInKorea();
    if (dateElement) {
      dateElement.textContent = day;
      dateElement.dateTime = day;
    }
    const results = await Promise.allSettled([readCount("TOTAL"), readCount("/visits/" + day)]);
    const total = results[0].status === "fulfilled" ? results[0].value : {};
    const today = results[1].status === "fulfilled" ? results[1].value : {};
    const format = number => new Intl.NumberFormat(isKorean ? "ko-KR" : "en-US").format(number);
    totalElement.textContent = total.number === undefined ? "—" : format(total.number);
    // A missing daily path is zero only after the account's public total is verified.
    const todayNumber = today.number ?? (today.status === 404 && total.number !== undefined ? 0 : undefined);
    todayElement.textContent = todayNumber === undefined ? "—" : format(todayNumber);
    statusElement.textContent = total.number === undefined || todayNumber === undefined ? labels.unavailable : "";
  }

  if (!/^https:\/\/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.goatcounter\.com$/.test(counterOrigin)) {
    if (statusElement) statusElement.textContent = labels.pending;
    return;
  }
  if (location.protocol !== "https:" || location.hostname !== productionHost) return;

  // Reading the public totals does not register a visit, even when opted out.
  let countsRequested = false;
  function showCountsOnce() {
    if (countsRequested) return;
    countsRequested = true;
    displayCounts();
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && dateElement?.dateTime !== dayInKorea()) displayCounts();
  });

  if (excluded() || document.getElementById("portfolio-analytics")) {
    showCountsOnce();
    return;
  }
  window.goatcounter = {
    no_events: true,
    // A shared date path makes language changes/reloads use the same deduplication key.
    // The path's date defines "today" in Korea without relying on UTC query filters.
    path: () => excluded() ? null : "/visits/" + dayInKorea(),
    title: "Portfolio visits (KST)",
    referrer: referrerOrigin,
    no_session: false
  };
  const script = document.createElement("script");
  script.id = "portfolio-analytics";
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.setAttribute("data-goatcounter", counterOrigin + "/count");
  script.onload = () => setTimeout(showCountsOnce, 12000);
  script.onerror = showCountsOnce;
  setTimeout(showCountsOnce, 15000);
  document.head.appendChild(script);
})();
