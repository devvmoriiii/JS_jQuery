$(document).ready(function() {
  var $output = $("#output");
  var $input = $("#input");

  $("#confirm").click(function() {
    var value = $input.val();

    var result = rtrim(value);
    $output.html(result);
  });
});

function rtrim(str) {
  if(str.length <= 0) {
    return "";
  }

  var lastChar = str.charAt((str.length - 1));
  if(lastChar != " ") {
    return str;
  }

  var index;

  for(index = (str.length - 1); index >= 0; index --) {
    var ch = str.charAt(index);
    if(ch != " ") {
      index ++;
      break;
    }
  }

  var result = str.slice(0, index);
  return result;
};