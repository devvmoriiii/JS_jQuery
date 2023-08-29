$(document).ready(function() {
  var $output = $("#output");
  var $input = $("#input");

  $("#confirm").click(function() {
    var value = $input.val();

    var result = ltrim(value);
    $output.html(result);
  });
});

function ltrim(str) {
  if(str.length <= 0) {
    return "";
  }

  var firstChar = str.charAt(0);
  if(firstChar != " ") {
    return str;
  }

  var index;

  for(index = 1; index <= str.length; index ++)  {
    var ch = str.charAt(index);
    if(ch != " ") {
      break;
    }
  }

  var result = str.slice(index, str.length);
  return result;
};