document.querySelectorAll('#rules li').forEach(li => {
    if (li.textContent.includes('금지')) {
        li.classList.add('forbidden');
    }
});
AOS.init({
    duration: 800,
    once: true
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
