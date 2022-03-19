// Task 1 - Multiply every number by 2

//Approach1

const numbers = [5, 3, 9, 30];

const multipleElementByTwo = (numArr) => {
  // Array Map function

  /* return numArr.map(function (current) {
    return current * 2;
  }); */

  return numArr.map((currentElement) => currentElement * 2);
};

console.log(multipleElementByTwo(numbers)); // [10, 6, 18, 60]

//Approach2

const numbers = [5, 3, 9, 30];

const multipleElementByTwo = (numbers) => {
  if (!Array.isArray(numbers)) {
    return "Input is not an array";
  }

  const arr = [];

  for (i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  return numbers;
};
console.log(multipleElementByTwo(numbers)); // [10, 6, 18, 60]
