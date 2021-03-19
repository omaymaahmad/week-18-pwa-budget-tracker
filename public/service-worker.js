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
            console.log("Cache working")
            return cache.addAll(applicationUrls)
        })
    )
});

self.addEventListener("fetch", function(event){
if(event.request.url.includes("/api/")){
    event.respondWith(
        caches.open(DATA_CACHE).then((cache) => {
            return fetch(event.request).then((response) => {
                if(response.status === 200){
                    cache.put(event.request.url, response())
                }
                return response;
            }).catch((err) => {
                return cache.match(event.request)
            })
        }).catch((err) => console.log(err))
    ).catch; return; 
}

event.respondWith(
    fetch(event.request).catch(function(){
        return caches.match(event.request).then((response)=>{
            if(response){
                return response;
            } else if (event.request.headers.get('accept').includes("text/html")){
                return caches.match("/")
            }
        });
    })
)



})
