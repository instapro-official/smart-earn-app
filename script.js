// App State variables
let userCoins = 952;
let dailyAdLimit = 5;
let adsWatchedToday = 0;

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

// 3. Quiz System Logic with Next Button & Colors
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
    },
    {
        question: "भारत की राजधानी क्या है?",
        options: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
        answer: 2
    },
    {
        question: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
        options: ["मंगल", "बृहस्पति (Jupiter)", "पृथ्वी", "शनि"],
        answer: 1
    },
    {
        question: "विश्व की सबसे लंबी नदी कौन सी है?",
        options: ["अमेज़न", "नील (Nile)", "गंगा", "मिसीसिपी"],
        answer: 1
    }
];

let currentQuizIndex = 0;
let answerSelected = false;

function openQuiz() {
    document.getElementById('quizModal').style.display = 'flex';
    loadQuizQuestion();
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}

function loadQuizQuestion() {
    answerSelected = false;
    const q = quizData[currentQuizIndex];
    document.getElementById('quizQuestion').innerText = `Q. ${q.question}`;
    
    // Result text aur Next button reset karein
    document.getElementById('quizResult').innerText = '';
    document.getElementById('nextQuizBtn').style.display = 'none';

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, clickedBtn) {
    if (answerSelected) return; // Ek baar click karne ke baad block kar do
    answerSelected = true;

    const q = quizData[currentQuizIndex];
    const allButtons = document.querySelectorAll('.option-btn');

    if (selectedIndex === q.answer) {
        clickedBtn.style.background = '#2ea44f'; // Green for correct
        clickedBtn.style.borderColor = '#2ea44f';
        userCoins += 10;
        updateCoinDisplay();
        document.getElementById('quizResult').innerHTML = "<span style='color: #2ea44f; font-weight: bold;'>🎉 Sahi Uttar! +10 Coins Mile!</span>";
    } else {
        clickedBtn.style.background = '#da3633'; // Red for wrong
        clickedBtn.style.borderColor = '#da3633';
        allButtons[q.answer].style.background = '#2ea44f'; // Sahi uttar Green dikhao
        document.getElementById('quizResult').innerHTML = `<span style='color: #da3633; font-weight: bold;'>❌ Galat Uttar! Sahi uttar: ${q.options[q.answer]}</span>`;
    }

    // Next question button dikhao
    document.getElementById('nextQuizBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
    loadQuizQuestion();
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
