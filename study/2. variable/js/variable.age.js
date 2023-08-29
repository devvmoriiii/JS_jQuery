function calc() {
  var currentYear = 2023;
  var birthYear = prompt("출생년도를 입력하세요.", "YYYY");
  var age;
  age = 0;
  age = currentYear - birthYear + 1;
  document.querySelector("#result").innerHTML =
    "당신의 나이는<b>" + age + "</b>세입니다.";
}
