var isOpen = false;
var view = document.querySelector("#view");
var detail = document.querySelector("#detail");

view.addEventListener("click", function() {
  if (isOpen == false) {
    detail.style.display = "block";
    view.innerHTML = "상세 정보 닫기";
    isOpen = true;
  }
  else {
    detail.style.display = "none";
    view.innerHTML = "상세 정보 열기";
    isOpen = false;
  };
});


