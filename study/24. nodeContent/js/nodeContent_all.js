var $content = null;
var $contentText = null;
var $selectedItem = null;

$(document).ready(function () {
  init();
  initEvent();
});

function init() {
  $content = $("#content");
  $contentText = $("#contentText");
};

function initEvent() {
  $("#add").click(function () {
    addMsg();
    initText();
  });

  $content.on("click", "li", function () {
    selected($(this));
  });

  $("#update").click(function () {
    updateMsg();
    initText();
  });

  $("#remove").click(function () {
    removeMsg();
  });

  $("#removeAll").click(function () {
    removeAllMsg();
  });

  $("#up").click(function() {
    upMsg();
  });

  $("#down").click(function() {
    downMsg();
  });
};

function initText() {
  document.querySelector("#contentText").value = "";
};

function addMsg() {
  var msg = $contentText.val();
  var $newMsg = "<li>" + msg + "</li>";
  $content.append($newMsg);
};

function selected($item) {
  $selectedItem = $item;
  if ($selectedItem != null) {
    $selectedItem.removeClass("select");
  };
  $selectedItem.addClass("select");
};

function updateMsg() {
  if ($selectedItem) {
  var msg = $contentText.val();
  $selectedItem.text(msg);
  }
  else {
    alert("처리할 메세지를 선택해주세요.");
  };
};

function removeMsg() {
  if ($selectedItem) {
  $selectedItem.remove();
  $selectedItem = null;
  }
  else {
    alert("처리할 메세지를 선택해주세요.");
  };
};

function removeAllMsg() {
  $content.html("");
};

function upMsg() {
  if ($selectedItem) {
    var $prevItem = $selectedItem.prev();

    if ($prevItem) {
      $selectedItem.insertBefore($prevItem);
    };
  } 
  else {
    alert("처리할 메세지를 선택해주세요.");
  };
};

function downMsg() {
  if ($selectedItem) {
    var $nextItem = $selectedItem.next();

    if ($nextItem) {
      $selectedItem.insertAfter($nextItem);
    };
  } 
  else {
    alert("처리할 메세지를 선택해주세요.");
  };
};


