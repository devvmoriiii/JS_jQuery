window.onload = function() {
  var gigu = document.getElementById("gigu");
  var btnStart = document.getElementById("btnStart");

  var left = 50;
  var timerID = 0;

  btnStart.addEventListener("click", function() {
    timerID = setInterval(function() {
      left ++;
      gigu.style.left = left + "px";

      if (left >= 500) {
        clearInterval(timerID);
        timerID = 0;
      };
    }, 10); 
  });
};