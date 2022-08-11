var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 400);
}

var checkDed = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<38 && blockLeft>5 && characterTop>=130){
        block.style.animation="none";
        block.style.display="none";
        alert("Not good enough, are you?");
    }

}, 10);