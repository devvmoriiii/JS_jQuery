$(document).ready(function() {
  var $text = $("h1");

  $("#showText").on("click", function() {
    $text.show();
  });

  $("#hideText").click(function() {
    $text.hide();
  });
})