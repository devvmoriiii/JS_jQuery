$(document).ready(function() {
  alert("5초 간 지구를 클릭해보세요!");

  var cnt = 0;
  var $score = $("#score");
  var play = true;

  $("#earth").click(function () {
    if (play == true) {
      cnt++;
      $score.text(cnt);
    };
  });

  setTimeout(function() {
    play = false;
    alert("게임이 종료되었습니다.");
  }, 5000);
});