var bigImg = document.querySelector("#cup");
var smallImg = document.querySelectorAll(".small");

for (var i = 0; i < smallImg.length; i ++) {
  smallImg[i].addEventListener("click", changeImg);
}

function changeImg() {
  var newImg = this.src;
  bigImg.setAttribute("src", newImg);
};
