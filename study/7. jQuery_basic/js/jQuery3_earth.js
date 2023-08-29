$(document).ready(function() {
  var $earth = $("#earth");

  $("#btnStart").on("click", function() {
    $earth.animate({
      left: "480px",
      rotate: "360deg"
    }, 1500);
  })
}) 