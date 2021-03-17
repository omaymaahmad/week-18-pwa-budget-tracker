// create the variables that name the cache 
var CACHE = "budget-cache";
var DATA_CACHE = "budget-data-cache";

// create an array which stores the urls that we want to save in cache
var applicationUrls = [
    "/",
    "/db.js",
    "/index.js",
    "/styles.css",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE).then(function(cache) {
            return cache.addAll(applicationUrls)
        })
    )
})