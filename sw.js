// Listen for install of the service worker event
self.addEventListener("install", () => {
  console.log("Service worker successfully installed");
});

// Listen for activate of the service worker event
self.addEventListener("activate", () => {
  console.log("Service worker successfully activated");
});

// Fetch events
self.addEventListener("fetch", (fetch) => {
  console.log("Fetch event", fetch);
});
