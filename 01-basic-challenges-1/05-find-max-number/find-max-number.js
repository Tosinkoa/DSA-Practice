// My Solution
function findMaxNumber(arr) {
  let maxNum = arr[0];

  for (const arrNumber of arr) {
    if (arrNumber > maxNum) maxNum = arrNumber;
  }

  return maxNum;
}

// Lecture Solutions
// function findMaxNumber(arr) {
//   let max = arr[0];

//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }

//   return max;
// }

// function findMaxNumber(arr) {
//   return Math.max(...arr);
// }

module.exports = findMaxNumber;
