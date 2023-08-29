$(document).ready(function() {
  tabMenu("#tabmenu1", onSelectItem);
});

function tabMenu(selector, callback) {
  var $tabMenu = null;
  var $menuItems = null;
  var $selectedMenuItem = null;

  function init(selector) {
    $tabMenu = $(selector);
    $menuItems = $tabMenu.find("li");
  };

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

    if(callback != null) {
      callback($selectedMenuItem.index());
    }
  };
  init(selector);
  initEvent();
}

function onSelectItem(index) {
  $("#info").html(index);
};


