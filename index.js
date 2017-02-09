(function() {
  'use strict';
  var stopB = document.getElementById('stopButton');
  var slowB = document.getElementById('slowButton');
  var goB = document.getElementById('goButton');
  var stop = document.getElementById('stopLight');
  var slow = document.getElementById('slowLight');
  var go = document.getElementById('goLight');
  var buttons = document.getElementsByClassName('button');


  stopB.addEventListener("click", function(){
    stop.classList.toggle("stop");
  });
  slowB.addEventListener("click", function(){
    slow.classList.toggle("slow");
  });
  goB.addEventListener("click", function(){
    go.classList.toggle("go");
  });

//Adds an entered/left console log for the doozies.
  var printsEnter = function(button) {
    console.log("Entered " + this.innerText + " button");
  };
  var printsLeave = function(button) {
    console.log("Left " + this.innerText + " button");
  };

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", printsEnter);
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseleave", printsLeave);
  }


//Adds an on/off console log for the doozies.
  var controls = document.getElementById('controls');
  var check = 0;
  var printStat = function(event) {
    if(check === 0){
      console.log(event.target.innerText + " bulb on");
      check -= 1;
    } else {
      console.log(event.target.innerText + " bulb off");
      check += 1;
    }
  };
  controls.addEventListener("click", printStat);


})();
