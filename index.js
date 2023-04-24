let countElHome = document.getElementById("count-elHome");
let countElAway = document.getElementById("count-elAway");
let count = 0;
let storedPitches = JSON.parse(sessionStorage.getItem("homepitches"));
let awayPitches = JSON.parse(sessionStorage.getItem("awaypitches"));

if (window.location.pathname === "/index.html") {
  count += storedPitches;
  countElHome.textContent = count;
  // if (countElHome.textContent === "") {
  //   countElHome.textContent = 0;
  // }
}

if (window.location.pathname === "/pagetwo.html") {
  count += awayPitches;
  countElAway.textContent = count;
  // if (countElAway.textContent === "") {
  //   countElAway.textContent = 0;
  // }
}

function incrementHome() {
  count += 1;
  countElHome.textContent = count;
  sessionStorage.setItem("homepitches", JSON.stringify(count));
}

function decrementHome() {
  count -= 1;
  countElHome.textContent = count;
  sessionStorage.setItem("homepitches", JSON.stringify(count));
}

function resetHome() {
  countElHome.textContent = 0;
  count = 0;
  sessionStorage.removeItem("homepitches");
}

//AWAY TEAM

function incrementAway() {
  count += 1;
  countElAway.textContent = count;
  sessionStorage.setItem("awaypitches", JSON.stringify(count));
}

function decrementAway() {
  count -= 1;
  countElAway.textContent = count;
  sessionStorage.setItem("awaypitches", JSON.stringify(count));
}

function resetAway() {
  countElAway.textContent = 0;
  count = 0;
  sessionStorage.removeItem("awaypitches");
}
