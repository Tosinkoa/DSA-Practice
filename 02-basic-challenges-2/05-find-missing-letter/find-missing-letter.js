const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqursuvwxyx";

// // My Solution
function findMissingLetter(arr) {
  const startIndex = alphabet.indexOf(arr[0]);
  const endIndex = alphabet.indexOf(arr[arr.length - 1]);

  for (let i = startIndex; i <= endIndex; i++) {
    if (!arr.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
}

// Lesson Solution
// function findMissingLetter(arr) {
//   const startIndex = alphabet.indexOf(arr[0]);

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) {
//       return alphabet[startIndex + i];
//     }
//   }

//   return "";
// }

// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt(0);

//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i].charCodeAt(0);
//     if (current - start > 1) {
//       return String.fromCharCode(start + 1);
//     }

//     start = current;
//   }

//   return "";
// }

module.exports = findMissingLetter;
