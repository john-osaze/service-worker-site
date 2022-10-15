if ("serviceWorker" in navigator){
    window.addEventListener("load", ()=>{
        navigator.serviceWorker.register("/sw2.js").then(() => {
           console.log("service worker registered");
        }).catch((err)=>{
            console.log(err);
        })
    })
}