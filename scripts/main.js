const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const delay = Math.random() * 0.8;

        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('visible');

        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(element => {
    observer.observe(element);
});