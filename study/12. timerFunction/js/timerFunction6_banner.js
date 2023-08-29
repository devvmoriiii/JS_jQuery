$(document).ready(function() {
  var bannerList = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg", "banner7.jpg", "banner8.jpg"];

  var index = 0;
  var $banner = $(".banner");

  setInterval(function() {
    index ++;
    if (index >= bannerList.length) {
      index = 0;
    };
    
    var bannerName = bannerList[index];
    $banner.attr("src", "resources/" + bannerName)
  }, 1200);
});