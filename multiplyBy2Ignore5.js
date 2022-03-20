// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (print same number)
const multipleElementByTwoButNotFive = (numArr) => {
    return numbers.filter((item) => !!item && item * 2);
  };
  
  console.log(multipleElementByTwoButNotFive(numbers)); // [ 5, 6, 18, 30 ]

  const numbers = [5, 3, 9, 30];

  const multipleElementByTwoAndDeleteIfDivisibleBy5 = (numArr) => {
    return numArr.filter((item) => item%5!==0).map((ele) => ele*2)
  };

    console.log(multipleElementByTwoAndDeleteIfDivisibleBy5(numbers)); // [ 5, 6, 18, 30 ]