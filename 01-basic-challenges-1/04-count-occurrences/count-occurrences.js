// My Solution
function countOccurrences(str, char) {
  let occurence = 0;

  for (const eachLetter of str) {
    if (eachLetter === char) occurence++;
  }
  return occurence;
}

// Lecture Solutions
// function countOccurrences(str, char) {
//   let count = 0;

//   for (i = 0; i < str.length; i++) {
//     if (str[i] === char) count++;
//   }
//   return count;
// }

// const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;
