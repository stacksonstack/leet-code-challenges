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

//   console.log(replaceElements([17,18,5,4,6,1])) // [18,6,6,6,1,-1]


  var replaceElements2 = function (arr) {
    var maxNumber = -1;
    var array = [];
    for (let x = arr.length - 1; x >= 0; x--) {
      array.push(maxNumber);
      maxNumber = Math.max(maxNumber, arr[x]);
    }
    return array.reverse();
  };

//   console.log(replaceElements2([17,18,5,4,6,1])) // [18,6,6,6,1,-1]


// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)
    let output = []
    candies.forEach((candy)=>{
        let extraCandy = candy + extraCandies
        extraCandy >= maxCandies ? output.push(true) : output.push(false)
    })
    return output
};

// console.log(kidsWithCandies([2,3,5,1,3], 3)) // [true,true,true,false,true]


