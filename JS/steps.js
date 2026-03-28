//Selects a random exercise from a specific category and displays it in a modal.
function openExercise(type) {
    const list = exercises[type];
    const randomEx = list[Math.floor(Math.random() * list.length)];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2 style="color:#1a237e">${randomEx.t}</h2>
        <p style="font-size:1.2rem; line-height:1.6; margin-top:20px">${randomEx.c}</p>
    `;
    document.getElementById('exerciseModal').style.display = 'flex';
}
//Hides the exercise modal.
function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}
//Closes the modal if the user clicks anywhere outside the modal content.
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal();
    }
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