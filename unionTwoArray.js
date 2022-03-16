const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

function findUnion(a, b) {
  const obj = {};

  for (let i = 0; i < a.length; i++) {
    obj[arr1[i]] = arr1[i];
  }
  for (let j = 0; j < b.length; j++) {
    obj[arr2[j]] = arr2[j];
  }
  a.length = 0;
  for (const n in obj) {
    a.push(obj[n]);
  }
  return a;
}
console.log(findUnion(arr1, arr2));
