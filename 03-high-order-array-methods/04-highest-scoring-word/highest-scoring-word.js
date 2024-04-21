// My solution
// function highestScoringWord(str) {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     let score = 0;
//     for (const letter of word) {
//       score += letter.charCodeAt(0) - 96;
//     }

//     return score;
//   });

//   let highestScore = scores[0];
//   let highestIndex = 0;
//   scores.some((eachNum, index) => {
//     if (eachNum > highestScore) {
//       highestScore = eachNum;
//       highestIndex = index;
//     }
//   });

//   return words[highestIndex];
// }

// Lesson solution
function highestScoringWord(str) {
  const words = str.split(" ");

  const scores = words.map((word) =>
    Array.from(word).reduce((acc, letter) => acc + letter.charCodeAt(0) - 96, 0)
  );

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

module.exports = highestScoringWord;
