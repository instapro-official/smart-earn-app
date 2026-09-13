// App State variables
let userCoins = 952;
let dailyAdLimit = 5;
let adsWatchedToday = 0;

// Coin Counter Update Helper
function updateCoinDisplay() {
    document.getElementById('coinCount').innerText = userCoins;
}

// 1. Watch Ad Action
function watchAd() {
    if (adsWatchedToday >= dailyAdLimit) {
        alert("Aaj ki daily ad limit (5 Ads) poori ho chuki hai!");
        return;
    }

    alert("Ad Loading... Please 5 seconds wait karein.");

    setTimeout(() => {
        userCoins += 5;
        adsWatchedToday += 1;
        updateCoinDisplay();
        alert(`Badhai ho! Aapko +5 Coins mile. (Today Ads: ${adsWatchedToday}/${dailyAdLimit})`);
    }, 3000);
}

// 2. Daily Bonus Claim Action
function claimDailyBonus() {
    userCoins += 20;
    updateCoinDisplay();
    alert("Daily Bonus Claimed! +20 Coins added.");
}

// 3. Navigation Actions
function openQuiz() {
    alert("Quiz Section Screen Open!");
}

function openReferral() {
    alert("Aapka Referral Code: SMART123\nFriends ko invite karke 100 coins kamayein!");
}

function openWithdraw() {
    alert(`Aapka Current Balance: ${userCoins} Coins.\nMinimum Withdrawal: 1000 Coins (₹100)`);
}

function openProfile() {
    alert("User Profile: Rohit Kumar (ID: 123456)");
}

