
let timeLeft = 60;
let timerId;
function startTimer() {
    document.getElementById('timer-overlay').style.display = 'flex';
    timeLeft = 60;
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('seconds').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            closeTimer();
        }
    }, 1000);
}
function closeTimer() {
    clearInterval(timerId);
    document.getElementById('timer-overlay').style.display = 'none';
}
function generateQuote() {
    const display = document.getElementById('quote-display');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerText = randomQuote;
        display.style.opacity = 1;
    }, 200);
}


function toggleSound(type, btnElement) {
    const audioId = `${type}-audio`;
    const targetAudio = document.getElementById(audioId);
    if (!targetAudio.paused) {
        targetAudio.pause();
        btnElement.classList.remove('active');
        return;
    }
    stopAllSounds();
    targetAudio.play().catch(error => {
        console.error("المتصفح منع التشغيل، اضغط مرة أخرى:", error);
    });
    btnElement.classList.add('active');
}
function stopAllSounds() {
    const allAudios = document.querySelectorAll('audio');
    const allButtons = document.querySelectorAll('.sound-btn');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
}

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});