const fadeElements = document.querySelectorAll('.fade-in');

fadeElements.forEach(element => {
    element.style.opacity = 0;
    const delay = (Math.random() * 2.85).toFixed(2);

    element.style.transitionDelay = `${delay}s`;
    
    requestAnimationFrame(() => {
        element.style.opacity = 1;
    });
});