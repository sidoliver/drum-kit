// Detecting button press


let numberOfButtons = document.querySelectorAll('.drum').length;

for (var i=0;i<numberOfButtons;i++) {

  document.getElementsByClassName('drum')[i].addEventListener('click', function(){
      
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
  
}

// detecting key press

document.addEventListener('keydown',function(event){
   makeSound(event.key);
   buttonAnimation(event.key)
} );

//creating sound

function makeSound(key) {
  switch (key) {
    case "a":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "s":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "d":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "f":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var tom5 = new Audio("sounds/snare.mp3");
    tom5.play();
    break;

    case "k":
    var tom6 = new Audio("sounds/kick-bass.mp3");
    tom6.play();
    break;

    case "l":
    var tom7 = new Audio("sounds/crash.mp3");
    tom7.play();
    break;

   default:
    break;
  
}
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}