(() => {
  "use strict";
  const status = document.getElementById("analytics-status");
  const exclude = document.getElementById("exclude-visits");
  const resume = document.getElementById("resume-visits");
  if (!status || !exclude || !resume) return;

  function render() {
    try {
      const optedOut = Boolean(localStorage.getItem("umami.disabled"));
      const browserOptOut = [navigator.doNotTrack, window.doNotTrack, navigator.msDoNotTrack]
        .some(value => value === 1 || value === "1" || value === "yes") ||
        navigator.globalPrivacyControl === true;
      status.textContent = optedOut
        ? "Visits from this browser are excluded. / 이 브라우저의 방문을 통계에서 제외합니다."
        : browserOptOut
          ? "Your browser's privacy signal excludes visits. / 브라우저의 추적 거부 설정에 따라 방문을 제외합니다."
          : "Visits can be counted when analytics is connected. / 분석 서비스 연결 후 이 브라우저의 방문이 집계될 수 있습니다.";
      exclude.disabled = optedOut;
      resume.disabled = !optedOut;
    } catch {
      status.textContent = "This browser blocks preference storage; visits will not be counted. / 설정 저장소가 차단되어 방문을 집계하지 않습니다.";
      exclude.disabled = true;
      resume.disabled = true;
    }
  }

  function save(excluded) {
    try {
      if (excluded) localStorage.setItem("umami.disabled", "1");
      else localStorage.removeItem("umami.disabled");
      render();
    } catch {
      status.textContent = "Could not save this preference. / 설정을 저장하지 못했습니다.";
    }
  }

  exclude.addEventListener("click", () => save(true));
  resume.addEventListener("click", () => save(false));
  window.addEventListener("storage", render);
  render();
})();
