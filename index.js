homeScore = document.getElementById("home-score");
guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

function incOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount
}

function incTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount
}

function incThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount
}

function incOneGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount
}

function incTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount
}

function incThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount
}