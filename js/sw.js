const cacheName = "v1";

const resources = [
    "../index.html",
    "../about.html",
    "../css/styles.css",
]

self.addEventListener("install", (event) => {
    console.log("Service worker installed");
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(resources)
        }).then(() => {
            self.skipWaiting()
        }).catch((err) => console.log(err))
    )
});

self.addEventListener("activate", () => {
    console.log("Service Worker Activated");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request).catch(() => {
        caches.match(event.request);
    }));
    console.log("Service worker fetching data");
});