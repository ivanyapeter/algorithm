var slasher = function(arr, howMany) {
  return arr.splice(howMany, arr.length);
};

slasher([1, 2, 3], 2); // [3]
slasher([1, 2, 3], 0); // [1, 2, 3]
slasher([1, 2, 3], 9); // []
slasher([1, 2, 3], 4); // []
slasher(["burgers", "fries", "shake"], 1); // ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // ["cheese", 4]
