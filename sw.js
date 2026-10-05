// 앱 설치용 최소 서비스워커 — 저장(캐시)은 하지 않음. 같은 사이트 파일만 그대로 받아오고, 구글·알림 요청은 건드리지 않음
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
