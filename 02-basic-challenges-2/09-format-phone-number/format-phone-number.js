// My Solution
function formatPhoneNumber(phoneNumber) {
  const areaCode = phoneNumber.slice(0, 3).join("");
  const prefix = phoneNumber.slice(3, 6).join("");
  const lineNumber = phoneNumber.slice(6, 10).join("");

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

// Lesson Solutions
// const formatPhoneNumber = (phoneNumber) => {
//   const formatted = phoneNumber.join("");

//   return `(${formatted.substring(0, 3)}) ${formatted.substring(3, 6)}-${formatted.substring(
//     6
//   )}`;
// };

// const formatPhoneNumber = (phoneNumber) =>
//   `(${phoneNumber.slice(0, 3).join("")}) ${phoneNumber.slice(3, 6).join("")}-${phoneNumber
//     .slice(6, 10)
//     .join("")}`;

module.exports = formatPhoneNumber;
