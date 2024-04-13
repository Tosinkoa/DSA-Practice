// My Solution 1
function reverseString(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

// const reverseString = (string) => string.split("").reverse().join("");

module.exports = reverseString;
