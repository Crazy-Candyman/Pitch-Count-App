let countElHome = document.getElementById("count-elHome");
let countElAway = document.getElementById("count-elAway");
let count = 0;

if (
  window.location.href === "https://crazy-candyman.github.io/Pitch-Count-App/"
) {
  let storedPitches = JSON.parse(localStorage.getItem("homepitches"));
  count += storedPitches;
  countElHome.textContent = count;
}

if (
  window.location.href ===
  "https://crazy-candyman.github.io/Pitch-Count-App/pagetwo.html"
) {
  let awayPitches = JSON.parse(localStorage.getItem("awaypitches"));
  count += awayPitches;
  countElAway.textContent = count;
}

function incrementHome() {
  count += 1;
  countElHome.textContent = count;
  localStorage.setItem("homepitches", JSON.stringify(count));
}

function decrementHome() {
  count -= 1;
  countElHome.textContent = count;
  localStorage.setItem("homepitches", JSON.stringify(count));
}

function resetHome() {
  countElHome.textContent = 0;
  count = 0;
  localStorage.removeItem("homepitches");
}

//AWAY TEAM

function incrementAway() {
  count += 1;
  countElAway.textContent = count;
  localStorage.setItem("awaypitches", JSON.stringify(count));
}

function decrementAway() {
  count -= 1;
  countElAway.textContent = count;
  localStorage.setItem("awaypitches", JSON.stringify(count));
}

function resetAway() {
  countElAway.textContent = 0;
  count = 0;
  localStorage.removeItem("awaypitches");
}
