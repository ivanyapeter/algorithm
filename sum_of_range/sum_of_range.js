// Sum of range
// Adding a range of integer


// Range function accept 3 arguments, 'start' and 'end' are mandatory arguments while 'step' is optional argument.
// WARNING!! Need refactor!
var range = function(start, end, step) {
  var result = [];
  if ( step === undefined ) {
    do {
      result.push(start);
      start++;
    } while ( start <= end )
  } else {
    do {
      result.push(start);
      start += step;
    } while ( start <= end )
  }

  return result;
};

// Adding an array of integer, return integer.
var sum = function(arr) {
    var result = 0;
    result = arr.reduce(function(a, b) {
       return a + b;
    });
    return result;
};

sum(range(1, 10, 2));
