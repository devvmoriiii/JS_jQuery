$(document).ready(function() {
  tabMenu("#tabmenu1 li");
});

function tabMenu(selector) {
  var $selectedMenuItem = null;

  $(selector).click(function() {
    if($selectedMenuItem != null) {
      $selectedMenuItem.removeClass("select");
    };
    $selectedMenuItem = $(this);
    $selectedMenuItem.addClass("select");
  });
}


