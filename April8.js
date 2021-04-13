// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

var secondHighest = function (s) {
  var array = s
    .split("")
    .map((el) => parseInt(el))
    .filter((el) => !isNaN(el));
  var max = Math.max(...array);
  var maxRemoved = array.filter((el) => el != max);
  return maxRemoved.length == 0 ? -1 : Math.max(...maxRemoved);
};

// console.log(secondHighest("dfa12321afd")) //2
// console.log(secondHighest("abc1111")) //-1

