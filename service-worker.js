importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log("Workbox installed");
else
    console.log("Workbox did not installed");

workbox.precaching.precacheAndRoute([
    {url: "/index.html", revision: "1"},
    {url: "/fc.html", revision: "1"},
    {url: "/manifest.json", revision: "1"},
    {url: "/css/custom.css", revision: "1"},
    {url: "/css/materialize.min.css", revision: "1"},
    {url: "/img/loading.gif", revision: "1"},
    {url: "/img/MPWA2_Maskable.png", revision: "1"},
    {url: "/img/MPWA2_Non-maskable.png", revision: "1"},
    {url: "/js/api.js", revision: "1"},
    {url: "/js/db.js", revision: "1"},
    {url: "/js/idb.js", revision: "1"},
    {url: "/js/main.js", revision: "1"},
    {url: "/js/fc.js", revision: "1"},
    {url: "/js/materialize.min.js", revision: "1"},
    {url: "/js/sw-register.js", revision: "1"},
]);

workbox.routing.registerRoute(
    new RegExp("/pages"),
        workbox.strategies.staleWhileRevalidate({
            cacheName: "pages"
        })
);

workbox.routing.registerRoute(
    new RegExp("https://api.football-data.org/v2/"),
        workbox.strategies.staleWhileRevalidate({
            cacheName: "API_URL"
        })
)

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

self.addEventListener("push", event => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = "Push Message no payload";
    }

    let options = {
        body: body,
        icon: "../img/MPWA2_Non-maskable.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrived: Date.now(),
            primaryKey: 1
        }
    }

    event.waitUntil(
        self.registration.showNotification("Push Notification", options)
    )
})
