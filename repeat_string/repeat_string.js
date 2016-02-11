// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
var repeat = function(str, num) {
  // repeat after me
  var result = "";
  if ( num < 0 ) { return result; }
  while ( num !== 0 ) {
    result += str;
    num--;
  }
  return result;
}

repeat("abc", 3);
