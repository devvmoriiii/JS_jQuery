var cnt = 0;
var $score = null;
var $fish = null;
var play = false;
var timerID = null;

$(document).ready(function() {
  init();
  initEvent();
});

function init() {
  $score = $("#score");
  $fish = $("#fish");
};

function initEvent() {
  $("#start").click(function() {
    startGame();
  });

  $("#fish").click(function() {
    addScore();
  });
};

function startGame() {
  if (play == false) {
    checkEndGame();
    play = true;
    timerID = setInterval(function() {
      moveFish();
    }, 800);
  }
};

function checkEndGame() {
  setTimeout(function() {
    play = false;
    clearInterval(timerID);
    alert("게임이 종료되었습니다.");
  }, 5000);
    cnt = 0;
};

function addScore() {
  if (play == true) {
    cnt ++;
    $score.html(cnt);
  }
};

function moveFish() {
  // 물고기 크기 120*70
  // 패널 크기 600*400
  // 물고기 x 이동 범위 0~480 (600 - 120)
  // 물고기 y 이동 범위 0~330 (400 - 70)
  var x = parseInt(Math.random() * 480);
  var y = parseInt(Math.random() * 330);

  $fish.css({
    "left" : x,
    "top" : y
  });
};
