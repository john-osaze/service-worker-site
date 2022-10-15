if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./js/sw.js").then(() => {
            console.log("Service worker registered")
        }).catch((err) => {
            console.log(err);
        })
    })
}