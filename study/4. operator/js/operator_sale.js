function showPrice() {
  var originalPrice = document.querySelector("#originalPrice").value;
  var rate = document.querySelector("#rate").value;

  if (originalPrice > 0 && rate > 0) {
    var salePrice = originalPrice * (rate / 100);
    var finalPrice = originalPrice - salePrice;
  }

  document.querySelector("#showResult").innerHTML =
    "상품의 원 가격은 " +
    originalPrice +
    "원 이며, 할인 가격은 " +
    salePrice +
    "원 입니다. <br /> <span>할인 후 가격은 <b>" +
    finalPrice +
    "</b>원 입니다. </span>";
}
