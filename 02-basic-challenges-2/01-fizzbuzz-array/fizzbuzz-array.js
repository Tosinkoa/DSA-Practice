// My Solution
// function fizzBuzzArray(num) {
//   if (!Number.isInteger(num) && num < 1) {
//     throw new Error("Number passed must be an integer and greater than 0");
//   }

//   let fizzBuzzArr = [];
//   for (let i = 1; i <= num; i++) {
//     let threeDivision = i / 3;
//     let fiveDivision = i / 5;

//     if (Number.isInteger(threeDivision) && Number.isInteger(fiveDivision))
//       fizzBuzzArr.push("FizzBuzz");
//     else if (Number.isInteger(threeDivision)) fizzBuzzArr.push("Fizz");
//     else if (Number.isInteger(fiveDivision)) fizzBuzzArr.push("Buzz");
//     else fizzBuzzArr.push(i);
//   }

//   return fizzBuzzArr;
// }

// Lesson Solution
function fizzBuzzArray(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) arr.push("FizzBuzz");
    else if (i % 3 === 0) arr.push("Fizz");
    else if (i % 5 === 0) arr.push("Buzz");
    else arr.push(i);
  }

  return arr;
}

module.exports = fizzBuzzArray;
