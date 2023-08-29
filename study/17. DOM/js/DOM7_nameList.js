function newRegister() {
  var userName = document.querySelector("#userName");
  var newP = document.createElement("p");
  var text = document.createTextNode(userName.value);
  newP.appendChild(text);

  var nameList = document.querySelector("#nameList");
  nameList.appendChild(newP);
  userName.value = "";
}

