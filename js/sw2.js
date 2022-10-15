const cacheName = "v2";

self.addEventListener("install", ()=>{
    console.log("May the service worker work in jesus name");
})

self.addEventListener("fetch", (event)=>{
    console.log("service is now fetching data");
    event.respondWith (
        fetch(event.request).then((res)=>{
            const clone = res.clone()

            caches.open(cacheName).then((cache)=>{
               cache.put(event.request, clone)
            })
            return res
        })
        .catch(()=>{
            caches.match(event.request)
        })  
    )
})