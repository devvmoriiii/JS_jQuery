$(document).ready(function() {
  var $gigu = $("#gigu");
  $("#btnStart").click(function() {
    $gigu.animate({
      left: 500
    }, 3000);
  });
});