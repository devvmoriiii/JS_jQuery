window.onload = function() {
  var header = document.querySelector("#header");
  header.style.border = "2px solid #ffd1a4";

  var pArr1 = document.getElementsByTagName("p");
  for (var i = 0; i < pArr1.length; i++) {
    pArr1[i].style.border = "2px solid #badf98";
  }

  // div 의 자식이자, p 태그이자, .test2 클래스명을 가진 노드
  var pArr2 = document.getElementsByClassName("test2");
  for (var i = 0; i < pArr2.length; i++) {
    var varP = pArr2[i];

    if (varP.tagName == "P") {
      if (varP.parentNode.tagName == "DIV") {
        varP.style.backgroundColor = "#e3fdc8";
      };
    };
  };
};

