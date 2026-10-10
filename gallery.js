(() => {
  'use strict';
  const group = document.querySelector('#gallery-group');
  if (!group) return;
  const stage = document.querySelector('#gallery-stage');
  const search = document.querySelector('#gallery-search');
  const cards = [...document.querySelectorAll('.gallery-card')];
  const sections = [...document.querySelectorAll('.gallery-section')];
  const count = document.querySelector('#gallery-count');
  const ko = document.documentElement.lang === 'ko';
  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const match = (group.value === 'all' || card.dataset.group === group.value)
        && (stage.value === 'all' || card.dataset.stage === stage.value)
        && (!query || card.dataset.search.toLocaleLowerCase().includes(query));
      card.hidden = !match;
      if (match) visible++;
    });
    sections.forEach(section => { section.hidden = !section.querySelector('.gallery-card:not([hidden])'); });
    count.textContent = ko ? `${visible} / ${cards.length}장 표시` : `${visible} of ${cards.length} photographs shown`;
    document.querySelector('#gallery-empty').hidden = visible !== 0;
  }
  group.addEventListener('change', () => { stage.value = 'all'; filter(); });
  stage.addEventListener('change', () => { group.value = 'all'; filter(); });
  search.addEventListener('input', filter);
  document.querySelector('#gallery-reset').addEventListener('click', () => {
    group.value = stage.value = 'all'; search.value = ''; filter();
  });
})();
