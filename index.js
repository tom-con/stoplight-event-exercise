(function() {
  'use strict';
  var stopB = document.getElementById('stopButton');
  var slowB = document.getElementById('slowButton');
  var goB = document.getElementById('goButton');
  var stop = document.getElementById('stopLight');
  var slow = document.getElementById('slowLight');
  var go = document.getElementById('goLight');
  stopB.addEventListener("click", function(){
    stop.classList.toggle("stop");
  })
  slowB.addEventListener("click", function(){
    slow.classList.toggle("slow");
  })
  goB.addEventListener("click", function(){
    go.classList.toggle("go");
  })

})();
