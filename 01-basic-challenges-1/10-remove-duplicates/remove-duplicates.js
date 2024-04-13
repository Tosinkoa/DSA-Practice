// My Solution 1
// function removeDuplicates(arr) {
//   let uniqueArr = [arr[0]];

//   for (i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i]);
//   }

//   return uniqueArr;
// }

// My Solution 2
function removeDuplicates(arr) {
  let uniqueArr = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let isItemFoundAlready = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isItemFoundAlready = true;
        break;
      }
    }
    if (!isItemFoundAlready) uniqueArr.push(arr[i]);
  }

  return uniqueArr;
}

// Lesson Solution
// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

module.exports = removeDuplicates;
