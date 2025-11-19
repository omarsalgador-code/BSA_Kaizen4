self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Simple fetch passthrough – this app just links out to other URLs
self.addEventListener('fetch', event => {
  return;
});
