// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].


var shuffle = function (nums, n) {
    const cordArray = [];
    for (let x = 0; x < n; x++) {
      cordArray.push(nums[x], nums[x + n]);
    }
  
    return cordArray;
};

// console.log(shuffle([1,2,3,4,5,6],3)) //[1,4,2,5,3,6]

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};

// console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) //true
