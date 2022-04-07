// Write a function that accepts an array of numbers as an argument, where each number is given as a string and returns the second maximum value from the input array. If there is no second maximum return -1.

// Here are some examples:
// 1. For array ["3", "-2"] should return "-2"
// 2. For array ["5", "5", "4", "2"] should return "4"
// 3. For array ["4", "4", "4"] should return "-1" (duplicates are not considered as the second max)
// 4. For [] (empty array) should return "-1".
// For ["-214748364801","-214748364802"] should return "-214748364802".


function secondMax(arr) {
    if (arr.length < 1) {
      return -1;
    }
    let max = -Infinity,
      second = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i]) > max) {
        max = parseInt(arr[i]);
      } else if (parseInt(arr[i]) < max && parseInt(arr[i]) > second) {
        second = parseInt(arr[i]);
      }
    }
    if (max == second) {
      return -1;
    }
    return second;
  }
  
  console.log(secondMax(["3", "-2"]));

