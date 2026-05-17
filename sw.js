// Service worker minimo — necessario per l'installabilità PWA, nessuna cache.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
