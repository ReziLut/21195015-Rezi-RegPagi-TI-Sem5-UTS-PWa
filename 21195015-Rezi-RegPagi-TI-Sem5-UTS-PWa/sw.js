var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/css/style.css',
  '/js/main.js',
  '/img/circle-solid.svg',
  '/img/favicon.png',
  '/img/hello-icon-128.png',
  '/img/hello-icon-144.png',
  '/img/hello-icon-152.png',
  '/img/hello-icon-192.png',
  '/img/hello-icon-256.png',
  '/img/hello-icon-512.png',
  '/img/icon-192.png',
  '/img/icon-512.png',
  '/img/logo.afdesign',
  '/img/logo.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
