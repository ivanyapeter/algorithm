var bouncer = function(arr) {
  var newArr = [];
  arr.filter(function(x) {
    if ( x ) {
      newArr.push(x);
    }
  });
  return newArr;
};

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
bouncer(["a", "b", "c"]); // ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]); // []
