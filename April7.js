// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function (arr) {
    var maxNumber = -1;
    var lastNumber = arr[arr.length - 1];
    var array = [];
    for (let x = arr.length - 1; x >= 0; x--) {
      // O(n)
      let tempNumber = maxNumber;
      maxNumber = Math.max(maxNumber, arr[x]);
      lastNumber == arr[x] && arr.length == x + 1
        ? array.push(-1)
        : array.push(tempNumber);
    }
    return array.reverse();
  };