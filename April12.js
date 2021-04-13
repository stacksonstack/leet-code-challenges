// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

var judgeCircle = function (moves) {
  return [...moves]
    .reduce(
      (acc, curr) => {
        if (curr === "L") acc[0] = acc[0] - 1;
        else if (curr === "R") acc[0] = acc[0] + 1;
        else if (curr === "U") acc[1] = acc[1] - 1;
        else if (curr === "D") acc[1] = acc[1] + 1;
        return acc;
      },
      [0, 0]
    )
    .every((el) => el === 0);
};

console.log(judgeCircle("UD")); //true
console.log(judgeCircle("LL")); //false

var _judgeCircle = function (moves) {
  return [...moves]
    .reduce(
      (acc, curr) => {
        curr === "L" || curr === "R"
          ? (acc[0] = curr === "L" ? acc[0] - 1 : acc[0] + 1)
          : (acc[1] = curr === "U" ? acc[1] - 1 : acc[1] + 1);
        return acc;
      },
      [0, 0]
    )
    .every((el) => el === 0);
};

console.log(_judgeCircle("UD")); //true
console.log(_judgeCircle("LL")); //false
