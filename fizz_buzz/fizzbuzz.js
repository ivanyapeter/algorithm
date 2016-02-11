// FizzBuzz
// Divisible by 3, print "Fizz"
// Divisible by 5, print "Buzz"
// Divisible by both, print "FizzBuzz"

var FizzBuzz = function(num) {
  if ( num % 3 === 0 && num % 5 === 0 ) {
    console.log("FizzBuzz")
  } else if ( num % 3 === 0 ) {
    console.log("Fizz")
  }else if ( num % 5 === 0 ) {
    console.log("Buzz")
  }
};

FizzBuzz(9);
FizzBuzz(10);
FizzBuzz(15);
