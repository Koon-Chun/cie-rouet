let fadeElements = document.querySelectorAll('.fade-in');

function fadeInElements() {
    for (let i = 0; i < fadeElements.length; i++) {
        let timer = (i + 1) * 500; // Delay each element by 500ms;

        fadeElements[i].style.transition = 'opacity ' + timer + 'ms';
        fadeElements[i].style.opacity = 1;
    }
}

for (let i = 0; i < fadeElements.length; i++) {
    fadeElements[i].style.opacity = 0;
    fadeInElements();
}