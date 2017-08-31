function add() {

fx = new Audio();
fx.src = "assets/sounds/bell.mp3";
fx.play();
localStorage.clear("sound3");
}

function eat() {

fx = new Audio();
fx.src = "assets/sounds/chew.wav";
fx.play();
localStorage.clear("sound2");
}

function flush() {

fx = new Audio();
fx.src = "assets/sounds/flush.mp3";
fx.play();
localStorage.clear("sound");

}

$(document).ready(function() {
    if (localStorage.sound3 === "flush"){
      flush();
    }
    else if (localStorage.sound === "add"){
      add();
    }
    else if (localStorage.sound2 === "eat"){
      eat();
    }
});

$('#addBtn').on("click", function(event){
  localStorage.setItem("sound", "add");
});

$('#eatBtn').on("click", function(event){
  localStorage.setItem("sound2", "eat");
});

$('#poopBtn').on("click", function(event){
  localStorage.setItem("sound3", "flush");
});
