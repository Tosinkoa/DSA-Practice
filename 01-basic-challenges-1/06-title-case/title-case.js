// My solution
function titleCase(str) {
  // Split initial letter to different words in an array
  const splittedStrArr = str.split(" ").map((eachWord) => eachWord.toLowerCase());

  //   Loop through words
  const capitalizedSentence = splittedStrArr.map((eachWord) => {
    // Split words into characters loop through
    // Characters and capitalized first letters, then join characters
    const chars = eachWord.split("");
    const capitalizedFirstWord = chars
      .map((char, i) => {
        if (chars[0] === char[i]) char = char.toUpperCase();

        return char;
      })
      .join("");

    return capitalizedFirstWord;
  });

  return capitalizedSentence.join(" ");
}

// Lecture solution
// function titleCase(str) {
//   const words = str.toLowerCase().split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// }

module.exports = titleCase;
