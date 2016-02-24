var chunk = function(arr, size) {
  var result = [];
  while ( arr.length > 0 ) {
    result.push(arr.splice(0, size));
  }
  return result;  
}

chunk(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]].
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
