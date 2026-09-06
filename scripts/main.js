let fadeElements = document.querySelectorAll('.fade-in');

function fadeInElements() {
    for (let i = 0; i < fadeElements.length; i++) {
        let timer = Math.random()*2.85;
        timer = timer.toFixed(2)+'s';
        
        let delay = Math.random()*2.85;
        delay = delay.toFixed(2)+'s';;

        fadeElements[i].style.transition = 'opacity ' + timer + 'ms';
        fadeElements[i].style.opacity = 1;
    }
}

for (let i = 0; i < fadeElements.length; i++) {
    fadeElements[i].style.opacity = 0;
    fadeInElements();
}