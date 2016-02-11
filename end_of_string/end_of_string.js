// Check if a string (first argument) ends with the given target string (second argument).
var end = function(str, target) {
  var strLength = str.length;
  var targetLength = target.length;
  if ( str.substr(strLength - targetLength, targetLength) === target ) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n");
