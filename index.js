let countElHome = document.getElementById("count-elHome");
let countElAway = document.getElementById("count-elAway");
let count = 0;
let storedPitches = JSON.parse(localStorage.getItem("homepitches"));
let awayPitches = JSON.parse(localStorage.getItem("awaypitches"));

if (window.location.pathname === "/index.html") {
  countElHome.textContent = storedPitches;
  count += storedPitches;
  if (countElHome.textContent === "") {
    countElHome.textContent = 0;
  }
}

if (window.location.pathname === "/pagetwo.html") {
  countElAway.textContent = awayPitches;
  count += awayPitches;
  if (countElAway.textContent === "") {
    countElAway.textContent = 0;
  }
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
