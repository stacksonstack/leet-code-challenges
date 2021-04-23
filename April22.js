// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

var maxProduct = function(nums) {
    var myArray = nums.sort((a,b) => a -b)
    return (myArray[myArray.length-1] - 1) * (myArray[myArray.length - 2] -1)
};

console.log(maxProduct([10,2,5,2]))