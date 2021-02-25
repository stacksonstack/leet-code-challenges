// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping
// intervals, and return an array of the non-overlapping intervals that cover all the
// intervals in the input.

const merge = function (intervals) {
  var shouldSkip = false;
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  return intervals.reduce((accumulator, current, index, array) => {
    if (shouldSkip == true) {
      shouldSkip = false;
      return accumulator;
    }
    if (array.length !== index + 1 && current[1] >= array[index + 1][0]) {
      shouldSkip = true;
      if (current[0] > array[index + 1][0]) {
        if (current[1] > array[index + 1][1])
          return [...accumulator, [array[index + 1][0], current[1]]];
        return [...accumulator, [array[index + 1][0], array[index + 1][1]]];
      }
      return [...accumulator, [array[index][0], array[index + 1][1]]];
    } else return [...accumulator, current];
  }, []);
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // [[1,6],[8,10],[15,18]]

let intervals2 = [
  [1, 4],
  [4, 5],
]; // [[1,5]]
let intervals3 = [
  [1, 4],
  [0, 4],
]; // [[0,4]]

let intervals4 = [
  [1, 4],
  [0, 1],
]; // [[0,4]]
// console.log(merge(intervals));
// console.log(merge(intervals2));
// console.log(merge(intervals3));
// console.log(merge(intervals4));

//REFACTORED TO WORK WITH EVERY EDGE CASE
const merge2 = function (intervals) {
  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  var newArray = [];

  for (let x = 0; x < intervals.length; x++) {
    if (newArray.length == 0) {
      newArray.push(intervals[x]);
    } else if (newArray[newArray.length - 1][1] < intervals[x][0]) {
      newArray.push(intervals[x]);
    } else {
      newArray[newArray.length - 1][1] = Math.max(
        newArray[newArray.length - 1][1],
        intervals[x][1]
      );
    }
  }
  return newArray;
};

// You're given strings jewels representing the types of stones that are jewels, and stones
// representing the stones you have. Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let jewelArray = jewels.split("");
  let stoneArray = stones.split("");
  return stoneArray.filter((elm) => jewelArray.includes(elm)).length

};

console.log(numJewelsInStones("aA", "aAAbbbb"));
