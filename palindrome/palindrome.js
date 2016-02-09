var palindrome = function(str) {
  var st = str.toLowerCase().replace(/[\W+_]/g, '');
  var result = true;
  for ( var i = 0; i < st.length / 2; i++ ) {
    if ( st[i] !== st[st.length - (i+1)] ) {
      return false;
    }
  }
  return result;
}

palindrome("0_0 (: /-\ :) 0-0");
