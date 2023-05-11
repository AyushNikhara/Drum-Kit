var numberofdrum=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofdrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handclick);
}

//for detecting button pressed

function handclick(){
    var ButtonInnerHTML=this.innerHTML;
    sound(ButtonInnerHTML);
    buttonanimation(ButtonInnerHTML);
}
document.addEventListener("keydown",keypressed);

// detacting keyboard press
function keypressed(event){
    sound(event.key);
    buttonanimation(event.key);
}
 
function sound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;tom3
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(ButtonInnerHTML);
    }    
}

function buttonanimation(currentkey)
{
    var keys= document.querySelector("."+currentkey);
    keys.classList.add("pressed");
    setTimeout(settime,100);

    function settime(){
    keys.classList.remove("pressed")
}
}

