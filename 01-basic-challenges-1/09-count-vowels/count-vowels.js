// My Solution
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsFound = 0;

  for (sIndex = 0; sIndex < str.length; sIndex++) {
    for (vIndex = 0; vIndex < vowels.length; vIndex++) {
      if (str[sIndex].toLowerCase() === vowels[vIndex]) vowelsFound++;
    }
  }

  return vowelsFound;
}

// Lesson Solution
// function countVowels(str) {
//   const formattedStr = str.toLowerCase();
//   let count = 0;

//   for (let i = 0; i < formattedStr.length; i++) {
//     const char = formattedStr[i];
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") count++;
//   }
//   return count;
// }

module.exports = countVowels;
