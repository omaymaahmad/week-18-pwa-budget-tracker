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
});

self.addEventListener("fetch", function(event){
    //implement functionality which will enable all requests coming in on /api routes (if statement)
        // asttempt tp put it into cache if it fits an api request
        // if unsuccessful then its going to try to match with something in cache that already exists

    // if its not an api request then we will check the cache to see if we facilitate such a reuest
    // if the requested url isnt in cache then just return to homepage ("/")

})
