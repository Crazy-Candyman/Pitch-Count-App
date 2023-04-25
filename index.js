let countElHome = document.getElementById("count-elHome");
let countElAway = document.getElementById("count-elAway");
let count = 0;
let storedPitches = JSON.parse(localStorage.getItem("homepitches"));
let awayPitches = JSON.parse(localStorage.getItem("awaypitches"));

if (window.location.pathname === "/index.html") {
  count += storedPitches;
  countElHome.textContent = count;
} else {
  count += awayPitches;
  countElAway.textContent = count;
}

// if (window.location.pathname === "/pagetwo.html") {
//   count += awayPitches;
//   countElAway.textContent = count;
// }

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
