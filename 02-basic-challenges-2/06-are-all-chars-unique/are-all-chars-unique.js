// My Solution
// function areAllCharactersUnique(str) {
//   let newStr = str[0];
//   let duplicate = true;
//   for (let i = 1; i < str.length; i++) {
//     if (newStr.includes(str[i])) {
//       duplicate = false;
//       break;
//     } else {
//       newStr += str[i];
//     }
//   }

//   return duplicate;
// }

// // Lesson Solution
// function areAllCharactersUnique(str) {
//   const charCount = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (charCount[char]) return false;
//     charCount[char] = true;
//   }

//   return true;
// }

function areAllCharactersUnique(str) {
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charSet.has(char)) return false;
    charSet.add(char);
  }

  return true;
}

module.exports = areAllCharactersUnique;
