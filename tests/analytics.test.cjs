// Run: node --test tests/analytics.test.cjs
// Optional: GOATCOUNTER_CLIENT=/path/to/official/count.js runs the same tests
// against the downloaded official client instead of the small contract fixture.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../analytics.js'), 'utf8');
const fixture = `
goatcounter.filter = () => false;
goatcounter.url = () => 'https://sunghyeonpark-engineering.goatcounter.com/count?' +
  new URLSearchParams({p: goatcounter.path(), r: goatcounter.referrer(),
    t: goatcounter.title, q: location.search, b: navigator.webdriver ? '153' : '0',
    s: '1440', rnd: 'test', unexpected: 'private'});
if (!goatcounter.no_onload) navigator.sendBeacon(goatcounter.url());
`;
const client = process.env.GOATCOUNTER_CLIENT
  ? fs.readFileSync(process.env.GOATCOUNTER_CLIENT, 'utf8') : fixture;

function setup(options = {}) {
  const requests = [], scripts = [], events = {}, timers = [];
  const storage = new Map(Object.entries(options.storage || {}));
  const elements = Object.fromEntries(['visits-total', 'visits-today', 'visits-status', 'visits-date']
    .map(id => [id, { textContent: '', dateTime: '' }]));
  const location = {protocol: 'https:', hostname: 'sunghyeonpark-engineering.github.io',
    pathname: '/ko.html', search: '?email=private@example.test&token=secret', hash: '#private',
    ...options.location};
  const document = {
    documentElement: {lang: options.lang || 'en'}, body: {}, title: 'PRIVATE TITLE',
    referrer: 'https://example.test/private?email=private@example.test#secret',
    visibilityState: options.hidden ? 'hidden' : 'visible',
    getElementById: id => scripts.find(s => s.id === id) || elements[id],
    querySelector: selector => selector === 'script[data-goatcounter]' ? scripts[0] : null,
    createElement: () => ({dataset: {}, setAttribute(k, v) { if (k === 'data-goatcounter') this.dataset.goatcounter = v; }}),
    addEventListener: (name, fn) => (events[name] ||= []).push(fn),
    removeEventListener: (name, fn) => { events[name] = events[name].filter(f => f !== fn); },
    head: {appendChild: s => scripts.push(s)}
  };
  const context = {document, location, parent: {location}, navigator: {webdriver: true, ...options.navigator,
    sendBeacon: url => { requests.push({url, beacon: true}); return true; }},
    localStorage: {getItem: k => { if (options.blockedStorage) throw Error('blocked'); return storage.get(k) || null; }},
    fetch: async (url, init) => { requests.push({url, init}); return {ok: true, status: 200, json: async () => ({count: '13'})}; },
    setTimeout: fn => timers.push(fn), console, URL, URLSearchParams, Intl, Date, AbortSignal, screen: {width: 1440}};
  context.window = context;
  vm.createContext(context);
  vm.runInContext(source, context);
  function load() {
    if (!scripts.length) return;
    vm.runInContext(client, context);
    scripts[0].onload();
  }
  function visible() { document.visibilityState = 'visible'; (events.visibilitychange || []).forEach(fn => fn()); }
  return {context, requests, scripts, elements, load, visible, storage,
    countRequests: () => requests.filter(r => new URL(r.url).pathname === '/count')};
}

test('one sanitized request, bot flag preserved, no cookies or Referer', () => {
  const s = setup(); s.load(); s.visible(); s.visible();
  vm.runInContext(source, s.context); // accidental duplicate script inclusion
  assert.equal(s.scripts.length, 1);
  const requests = s.countRequests(); assert.equal(requests.length, 1);
  const r = requests[0], url = new URL(r.url);
  assert.match(url.searchParams.get('p'), /^\/visits\/\d{4}-\d{2}-\d{2}$/);
  assert.equal(url.searchParams.get('r'), 'https://example.test');
  assert.equal(url.searchParams.get('b'), '153');
  assert.equal(url.searchParams.has('q'), false);
  assert.equal(url.searchParams.has('unexpected'), false);
  assert.doesNotMatch(r.url, /private|secret|ko\.html|PRIVATE/);
  assert.equal(r.init.credentials, 'omit');
  assert.equal(r.init.referrerPolicy, 'no-referrer');
  assert.equal(r.init.method, 'POST');
  assert.equal(r.beacon, undefined);
});

test('English and Korean share the KST date path', () => {
  const en = setup(), ko = setup({lang: 'ko'}); en.load(); ko.load();
  assert.equal(new URL(en.countRequests()[0].url).searchParams.get('p'),
    new URL(ko.countRequests()[0].url).searchParams.get('p'));
});

test('hidden page waits until visible and counts only once', () => {
  const s = setup({hidden: true}); s.load(); assert.equal(s.countRequests().length, 0);
  s.visible(); s.visible(); assert.equal(s.countRequests().length, 1);
});

for (const [name, options] of Object.entries({
  owner: {storage: {'portfolio.analytics.disabled': '1'}},
  legacy: {storage: {'umami.disabled': '1'}},
  native: {storage: {skipgc: 't'}},
  DNT: {navigator: {doNotTrack: '1'}},
  GPC: {navigator: {globalPrivacyControl: true}},
  blocked: {blockedStorage: true},
  preview: {location: {hostname: 'localhost'}},
  http: {location: {protocol: 'http:'}}
})) test(name + ' does not load the tracker or record a visit', () => {
  const s = setup(options); s.load(); assert.equal(s.scripts.length, 0);
  assert.equal(s.countRequests().length, 0);
});

test('opting out while tracker loads prevents the request', () => {
  const s = setup(); s.storage.set('portfolio.analytics.disabled', '1');
  s.load(); assert.equal(s.countRequests().length, 0);
});

test('opted-out visitors can still read the aggregate totals', async () => {
  const s = setup({storage: {'portfolio.analytics.disabled': '1'}});
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(s.elements['visits-total'].textContent, '13');
  assert.equal(s.elements['visits-today'].textContent, '13');
  assert.equal(s.countRequests().length, 0);
});
