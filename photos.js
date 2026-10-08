/* Links still open the full image if JavaScript or <dialog> is unavailable. */
(() => {
  'use strict';
  if (typeof HTMLDialogElement === 'undefined') return;
  const links = document.querySelectorAll('.photo-link');
  if (!links.length) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'photo-dialog';
  dialog.setAttribute('aria-labelledby', 'photo-dialog-title');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'photo-dialog-close';
  close.textContent = document.documentElement.lang === 'ko' ? '닫기 ×' : 'Close ×';
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');
  const title = document.createElement('h3');
  title.id = 'photo-dialog-title';
  const description = document.createElement('p');
  caption.append(title, description);
  figure.append(image, caption);
  dialog.append(close, figure);
  document.body.append(dialog);
  let trigger;
  links.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    title.textContent = link.parentElement.querySelector('h3').textContent;
    description.textContent = link.parentElement.querySelector('figcaption p').textContent;
    dialog.showModal();
    document.body.classList.add('photo-open');
    close.focus();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('photo-open');
    trigger?.focus({ preventScroll: true });
  });
})();
