
window.addEventListener('keydown', function(e){
    const audioExists = document.querySelector(`audio[data-key="${e.keyCode}"]`); //es6 templates
    const keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audioExists) return; //stops it if audio does not exists
    audioExists.currentTime = 0; //rewinds to 0 (start)
    audioExists.play();
    keyPressed.classList.add('playing'); //same as key.addClass('playing') in jQuery
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // to generate random colors
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    keyPressed.style.color = randomColors;

});

function removeTransitionFromPressedKeys(e){
    if(e.propertyName !== 'transform') return; // we need only transform property to be reverted

    this.classList.remove('playing'); // remove from current key
    this.style.color = 'white'; // set the color back to white
}

const allKeys = document.querySelectorAll('.key'); //array of elements
allKeys.forEach(key => key.addEventListener('transitionend', removeTransitionFromPressedKeys)); //loop over each array element