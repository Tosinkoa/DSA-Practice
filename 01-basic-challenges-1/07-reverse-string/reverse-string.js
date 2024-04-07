// // My Solution 1
// function reverseString(string) {

// }

// My Solution 2
function reverseString(string) {
  const theReversedString = string.split("").reverse().join("");

  return theReversedString;
}

module.exports = reverseString;
