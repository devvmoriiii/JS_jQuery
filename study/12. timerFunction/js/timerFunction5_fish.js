var $fish = null;
var step = 50;
var timerID = null;

$(document).ready(function() {
  init();
  initEvent();
});

function init() {
  $fish = $("#fish");
}

function initEvent() {
  $("#btnStart").click(function() {
    start();
  });
  $("#btnStop").click(function() {
    stop();
  });
}

function start() {
  if (timerID == null) {
    timerID = setInterval(function() {
      move();
    }, 100);
  }
}

function stop() {
  clearInterval(timerID);
  timerID = null;
}

function move() {
  var x = $fish.position().left + step;

  if (x >= 430) {
    $fish.attr("src", "resources/fish2.png");
    step = -50;
  };
  if (x <= 50) {
    $fish.attr("src", "resources/fish1.png");
    step = 50;
  };

  $fish.css("left", x);
}