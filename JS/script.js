//Starts a 60-second countdown timer and updates the UI in real-time.
let timer = 60;
let timerId;
function startTimer() {
    document.getElementById('timer-overlay').style.display = 'flex';
    timer = 60;
    timerId = setInterval(() => {
        timer--;
        document.getElementById('seconds').innerText = timer;
        if (timer <= 0) {
            clearInterval(timerId);
            closeTimer();
        }
    }, 1000);
}
//Stops the active timer interval and hides the timer overlay.
function closeTimer() {
    clearInterval(timerId);
    document.getElementById('timer-overlay').style.display = 'none';
}
//Displays a random quote with a smooth fade-in transition effect.
function generateQuote() {
    const displayQuote = document.getElementById('quote-display');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    displayQuote.style.opacity = 0;
    setTimeout(() => {
        displayQuote.innerText = randomQuote;
        displayQuote.style.opacity = 1;
    }, 200);
}
//Handles playing and pausing audio based on user interaction.
function toggleSound(type, btnElement) {
    const audioId = `${type}-audio`;
    const targetAudio = document.getElementById(audioId);
    //If audio is playing, stop it and exit
    if (!targetAudio.paused) {
        targetAudio.pause();
        btnElement.classList.remove('active');
        return;
    }
    // Stop all other active sounds before playing the new one
    stopAllSounds();
    //Play audio and handle browser autoplay restrictions
    targetAudio.play().catch(error => {
        console.error("المتصفح منع التشغيل، اضغط مرة أخرى:", error);
    });
    btnElement.classList.add('active');
}
//Stops all audio elements and resets button states.
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
//Monitors page scrolling to show or hide the "Back to Top" button.
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
//Scrolls the page smoothly back to the top when the button is clicked.
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});