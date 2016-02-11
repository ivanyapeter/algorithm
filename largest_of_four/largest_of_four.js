var largestOfFour = function(arr) {
  var largestNum = 0;
  var largestArr = [];
  // You can do this!
  for ( var i = 0; i < arr.length; i++ ) {
    for ( var j = 0; j < arr[i].length; j++ ) {
      if ( largestNum < arr[i][j] ) {
        largestNum = arr[i][j];
      }
    }
    largestArr.push(largestNum);
    largestNum = 0;
  }
  return largestArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
