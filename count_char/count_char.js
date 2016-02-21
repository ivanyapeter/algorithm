// Counting character on a string
// String must be in the same case with the searched char

var countChar = function(str, char) {
  splitStr = str.split('');
  var count = 0;
  for ( var i = 0; i < splitStr.length; i++ ) {
    if ( splitStr[i] == char ) {
      count++;
    }
  }
  return count;
};

countChar("kakkerlak", "k");
