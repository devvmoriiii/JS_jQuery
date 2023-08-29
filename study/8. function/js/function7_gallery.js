var $images = null;

$(document).ready(function () {
  init();
  initEvent();
});

function init() {
  $images = $("#container1 img");
}

function initEvent() {
  $("#btnStart").click(function () {
    showImage();
    bgColor();
  });
}

function showImage() {
  var length = $images.length;

  for (var i = 0; i < length; i++) {
    var $img = $images.eq(i);

    var x = 50 + (i % 3) * 400;
    var y = 50 + parseInt(i / 3) * 300;

    $img.css({
      left: x,
      top: y,
    });
  }
}

function bgColor() {
  $("#container1").css(
    "background-color", "lightyellow"
  );
}
