window.onload = function () {
  var btn1 = document.getElementById("btn1");

  if (btn1.attachEvent) {
    btn1.attachEvent("onclick", function () {
      alert("Hi, JS!");
    });
  } else {
    btn1.addEventListener("click", function () {
      alert("Hi, JS!");
    });
  };
};
