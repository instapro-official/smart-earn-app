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

// 3. Quiz System Logic
const quizData = [
    {
        question: "भारत का राष्ट्रीय खेल कौन सा है?",
        options: ["क्रिकेट", "हॉकी", "फुटबॉल", "कबड्डी"],
        answer: 1
    },
    {
        question: "1 Dollar mein kitne Cents hote hain?",
        options: ["50", "100", "200", "10"],
        answer: 1
    }
];

let currentQuizIndex = 0;

function openQuiz() {
    document.getElementById('quizModal').style.display = 'flex';
    loadQuizQuestion();
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}

function loadQuizQuestion() {
    const q = quizData[currentQuizIndex];
    document.getElementById('quizQuestion').innerText = `Q. ${q.question}`;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const q = quizData[currentQuizIndex];
    if (selectedIndex === q.answer) {
        userCoins += 10;
        updateCoinDisplay();
        alert("Correct Answer! 🎉 +10 Coins Added!");
    } else {
        alert("Wrong Answer! Sahi uttar Hockey tha.");
    }
    
    currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
    closeQuiz();
}

// 4. Other Actions
function openReferral() {
    alert("Aapka Referral Code: SMART123\nFriends ko invite karke 100 coins kamayein!");
}

function openWithdraw() {
    alert(`Aapka Current Balance: ${userCoins} Coins.\nMinimum Withdrawal: 1000 Coins (₹100)`);
}

function openProfile() {
    alert("User Profile: Rohit Kumar (ID: 123456)");
}
