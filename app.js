if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((regi) => console.log("Service worker registered", regi))
    .catch((error) => console.log("Service worker not registered", error));
}
