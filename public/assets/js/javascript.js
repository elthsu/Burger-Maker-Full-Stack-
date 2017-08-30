function add() {

fx = new Audio();
fx.src = "assets/sounds/bell.mp3";
fx.play();
}

function eat() {

fx = new Audio();
fx.src = "assets/sounds/chew.wav";
fx.play();
}

function flush() {

fx = new Audio();
fx.src = "assets/sounds/flush.mp3";
fx.play();

}

$(document).ready(function() {
    if (localStorage.sound === "flush"){
      flush();
      localStorage.clear();
    }
    else if (localStorage.sound === "add"){
      add();
      localStorage.clear();
    }
    else if (localStorage.sound === "eat"){
      eat();
      localStorage.clear();
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
