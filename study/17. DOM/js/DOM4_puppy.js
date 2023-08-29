var pic = document.querySelector("#pic");
pic.addEventListener("mouseover", changePic, false);
pic.addEventListener("mouseout", originPic, false);

function changePic() {
  pic.src = "resources/kitty.jpg"
};

function originPic() {
  pic.src = "resources/puppy.jpg"
}