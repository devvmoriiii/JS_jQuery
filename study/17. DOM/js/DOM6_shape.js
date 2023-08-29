var rect = document.querySelector("#rect");

rect.addEventListener("mouseover", function() {
  rect.style.backgroundColor= "cornflowerblue";
  rect.style.borderRadius = "50%";
});

rect.addEventListener("mouseout", function() {
  rect.style.backgroundColor= "";
  rect.style.borderRadius = "0%";
});