const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num) => num * 2);
console.log("doubledNumbers:", doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("evenNumbers:", evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log("sum:", sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => console.log(num));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const foundNumber = numbers.find((num) => num > 2);
console.log("foundNumber:", foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((num) => num % 2 == 0);
console.log("hasEvenNumber:", hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumsGreaterThanZero = numbers.every((num) => num > 0);
console.log("allNumsGreaterThanZero:", allNumsGreaterThanZero);

/**
 * findIndex: Returns the index of the first array element that satisfies a specified condition.
 */
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log("firstEvenIndex:", firstEvenIndex);

/**
 * flat: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */
const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArray = nestedArray.flat();
console.log("flattenedArray:", flattenedArray);

/**
 * slice: Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 */
const slicedArray = numbers.slice(1, 4);
console.log("slicedArray:", slicedArray);

/**
 * sort: Sorts the elements of an array in place and returns the sorted array.
 */
const sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log("sortedNumbers:", sortedNumbers);
