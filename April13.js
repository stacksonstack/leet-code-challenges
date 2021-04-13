// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].


var shuffle = function (nums, n) {
    const cordArray = [];
    for (let x = 0; x < n; x++) {
      cordArray.push(nums[x], nums[x + n]);
    }
  
    return cordArray;
};