var $earth = null;

$(document).ready(function() {
  initialize();
  event_earth();
});

function initialize() {
  $earth = $("#earth");
};

function event_earth() {
  $("#btnStart").click(function() {
    var x = parseInt($("#txtX").val());
    var y = parseInt($("#txtY").val());

    moveEarth(x, y);
});
};

function moveEarth(x, y) {
  if( (x >= 0 && x <= 500) && (y >= 0 && y <= 300) ) {
    $earth.css({
      left: x,
      top: y
    })
  }
  else {
    alert("입력된 값이 범위를 벗어났습니다.");
  };
}

