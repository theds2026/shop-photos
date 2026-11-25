// Shop Photos service worker: lets the app open with no signal.
// When you change any file, bump VERSION so phones pick up the new copy.
const VERSION = 'shop-photos-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The app page: try the network first so updates show up, but give up after 3 seconds
  // (weak shop signal) and open the saved copy instead.
  if (req.mode === 'navigate') {
    const net = fetch(req).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); }
      return r;
    });
    const slow = new Promise(res => setTimeout(res, 3000)).then(() => caches.match('index.html'));
    e.respondWith(
      Promise.race([net.catch(() => caches.match('index.html')), slow])
        .then(r => r || net)
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // Everything else (icons, fonts): saved copy first, then network, saving what comes back.
  if (url.origin === location.origin || url.host.endsWith('fonts.googleapis.com') || url.host.endsWith('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(r => {
        if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return r;
      }))
    );
  }
});
