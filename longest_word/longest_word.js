var findLongestWord = function(str) {
  var st = str.split(' ');
  var longest = 0;
  for ( var i = 0; i < st.length; i++ ) {
    if (longest < st[i].length ) {
      longest = st[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
