document.addEventListener('DOMContentLoaded', () => {
    const startupScreen = document.getElementById('startup-screen');
    const mainContent = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');

    document.addEventListener('click', () => {
        if (startupScreen) {
            startupScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }
    }, { once: true });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            sections.forEach(section => section.classList.add('hidden'));

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});