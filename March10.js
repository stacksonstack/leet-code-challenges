var runningSum = function(nums) {
    var sum = 0;
    return nums.map((element) => { 
        sum = element + sum 
        return sum
    })
}; 

// time vs. memory 

// We can buy more memory, we can't buy more time. 
// Memory capacity is always being improved, time is always static. 
