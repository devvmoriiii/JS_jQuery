function hello() {
  var rnd1 = Math.floor(Math.random() * 20);
  var rnd2 = Math.floor(Math.random() * 40);
  var rnd3 = Math.floor(Math.random() * 3) + 100;

  $(".text").css({
    "bottom" : rnd1, "left" : rnd2
  });

  $(".hello").css({"background-size" : rnd3 + "%"});
}

setInterval(hello, 10);