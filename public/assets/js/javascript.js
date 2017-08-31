function add() {

fx = new Audio();
fx.src = "assets/sounds/bell.mp3";
fx.play();
localStorage.clear();
}

function eat() {

fx = new Audio();
fx.src = "assets/sounds/chew.wav";
fx.play();
localStorage.clear();
}

function flush() {

fx = new Audio();
fx.src = "assets/sounds/flush.mp3";
fx.play();
localStorage.clear();

}

$(document).ready(function() {
    if (localStorage.sound === "flush"){
      flush();
    }
    else if (localStorage.sound === "add"){
      add();
    }
    else if (localStorage.sound === "eat"){
      eat();
    }
});

$('#addBtn').on("click", function(event){
  localStorage.setItem("sound", "add");
});

$('#eatBtn').on("click", function(event){
  localStorage.setItem("sound", "eat");
});

$('#poopBtn').on("click", function(event){
  localStorage.setItem("sound", "flush");
});
