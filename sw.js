self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("attendance-cache").then(cache => {
      return cache.addAll(["/", "/index.html"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
