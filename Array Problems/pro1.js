//Implement a program to read an array elements and print sum of all even numbers in array.

// forloop

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr1 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) arr1 = arr1 + arr[i];
}
console.log(arr1);

//forof loop

const newArr = [1, 2, 3, 4, 5, 6, 7, 8];
let res = 0;
for (let x of newArr) {
  if (x % 2 === 0) {
    res = res + x;
  }
}
console.log(res);
