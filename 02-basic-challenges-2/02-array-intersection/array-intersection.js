// // My Solution
// function arrayIntersection(arr1, arr2) {
//   let arrInterSec = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) arrInterSec.push(arr1[i]);
//     }
//   }

//   return arrInterSec;
// }

// // Lesson Solution 1
// function arrayIntersection(arr1, arr2) {
//   let intersectionArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
//       intersectionArr.push(arr1[i]);
//     }
//   }

//   return intersectionArr;
// }

// Lesson Solution 2
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const uniqueArr2 = Array.from(new Set(arr2));
  const intersectionArr = [];

  for (let num of uniqueArr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
