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

const numbersN = [5, 3, 9, 30];

const multipleElementByTwoN = (numbersN) => {
  if (!Array.isArray(numbersN)) {
    return "Input is not an array";
  }

  const arr = [];

  for (i = 0; i < numbersN.length; i++) {
    numbersN[i] = numbersN[i] * 2;
  }
  return numbersN;
};
console.log(multipleElementByTwoN(numbersN)); // [10, 6, 18, 60]
