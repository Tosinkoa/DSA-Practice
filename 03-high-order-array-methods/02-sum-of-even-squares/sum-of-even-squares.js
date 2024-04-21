// My Solution
function sumOfEvenSquares(arr) {
  if (arr.length < 1) return 0;
  const evenArr = arr.filter((eachNum) => eachNum % 2 === 0);
  const squaredEvenNum = evenArr.map((eachNum) => eachNum ** 2);
  const squaredNumSum = squaredEvenNum.reduce((accumulator, eachNum) => accumulator + eachNum);
  if (squaredNumSum.length < 1) return 0;
  return squaredNumSum;
}

module.exports = sumOfEvenSquares;
