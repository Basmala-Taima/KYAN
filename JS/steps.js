
function openExercise(type) {
    const list = exercises[type];
    const randomEx = list[Math.floor(Math.random() * list.length)];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2 style="color:var(--kayan-blue)">${randomEx.t}</h2>
        <p style="font-size:1.2rem; line-height:1.6; margin-top:20px">${randomEx.c}</p>
    `;
    document.getElementById('exerciseModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal();
    }
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