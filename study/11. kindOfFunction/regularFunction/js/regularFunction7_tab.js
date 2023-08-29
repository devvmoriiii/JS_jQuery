$(document).ready(function() {
  tabMenu("#tabmenu1");
});

function tabMenu(selector) {
  var $tabMenu = null;
  var $menuItems = null;
  var $selectedMenuItem = null;

  function init(selector) {
    $tabMenu = $(selector);
    $menuItems = $tabMenu.find("li");
  };/*  */

  function initEvent() {
    $menuItems.click(function() {
      setSelectItem($(this));
    });
  };

  function setSelectItem($item) {
    if ($selectedMenuItem != null) {
      $selectedMenuItem.removeClass("select");
    }
    $selectedMenuItem = $item;
    $selectedMenuItem.addClass("select");  
  
    $("#info").html($selectedMenuItem.index());
  };

  init(selector);
  initEvent();
}


