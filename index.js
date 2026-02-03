homeScore = document.getElementById("home-score");
guestScore = document.getElementById("guest-score");

homeScoreCard = document.getElementById("home-score-card");
guestScoreCard = document.getElementById("guest-score-card");

let homeCount = 0;
let guestCount = 0;

function highlightLeader() {
  if (homeCount > guestCount) {
    homeScoreCard.style.border = "2px solid white";
    guestScoreCard.style.border = "none";
  } else if (guestCount > homeCount) {
    guestScoreCard.style.border = "2px solid white";
    homeScoreCard.style.border = "none";
  }
}

function incOneHome() {
  homeCount += 1;
  homeScore.textContent = homeCount;
  highlightLeader();
}

function incTwoHome() {
  homeCount += 2;
  homeScore.textContent = homeCount;
  highlightLeader();
}

function incThreeHome() {
  homeCount += 3;
  homeScore.textContent = homeCount;
  highlightLeader();
}

function incOneGuest() {
  guestCount += 1;
  guestScore.textContent = guestCount;
  highlightLeader();
}

function incTwoGuest() {
  guestCount += 2;
  guestScore.textContent = guestCount;
  highlightLeader();
}

function incThreeGuest() {
  guestCount += 3;
  guestScore.textContent = guestCount;
  highlightLeader();
}

function newGame() {
  homeCount = 0;
  homeScore.textContent = homeCount;
  guestCount = 0;
  guestScore.textContent = guestCount;
  homeScoreCard.style.border = "none";
  guestScoreCard.style.border = "none";
}
