let homeCountEl = document.getElementById("home-count-el");
let count = 0;
let storedHomePitches = JSON.parse(localStorage.getItem("homepitches"));
count += storedHomePitches;
homeCountEl.textContent = storedHomePitches;

function increment() {
  count += 1;
  homeCountEl.textContent = count;
  localStorage.setItem("homepitches", JSON.stringify(count));
}

function decrement() {
  count -= 1;
  homeCountEl.textContent = count;
  localStorage.setItem("homepitches", JSON.stringify(count));
}

function reset() {
  homeCountEl.textContent = 0;
  count = 0;
  localStorage.clear("homepitches");
}
