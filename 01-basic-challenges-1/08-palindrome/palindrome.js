function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reversedStr = reversedString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphaNumeric(str) {
  let formattedStr = "";

  for (i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Number 0-9
    (code >= 97 && code <= 122) // Lower case a-z
  );
}

function reversedString(str) {
  let reversed = "";

  for (i = str.length - 1; i >= 0; i--) reversed += str[i];
  return reversed;
}

// Solution 2
// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversedStr = formattedStr.split("").reverse().join("");
//   return formattedStr === reversedStr;
// }

module.exports = isPalindrome;
