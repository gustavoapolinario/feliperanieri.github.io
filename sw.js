var CACHE_NAME = 'v0.9';
var urlsToCache = [
  '/',
  '/css/materialize.min.css',
  '/css/my-style.css',
  '/js/materialize.min.js',
  '/fonts/',
  '/administracao.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});