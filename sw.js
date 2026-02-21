const CACHE_NAME = 'vip-mj-cache-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap'
];

// Instalação e Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Resposta Offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
