// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

var maxProduct = function(nums) {
    var myArray = nums.sort((a,b) => a -b)
    return (myArray[myArray.length-1] - 1) * (myArray[myArray.length - 2] -1)
};

// console.log(maxProduct([10,2,5,2]))

// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

var nextGreatestLetter = function(letters, target) {
    return letters.find(c => c > target) || letters[0];
  };

  console.log(nextGreatestLetter(["c","f","j"], "a"))