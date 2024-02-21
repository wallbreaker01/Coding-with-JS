window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; //stop the function running together
    audio.currentTime = 0; //faster sound
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// pressing a key will remove the transformation
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
})
