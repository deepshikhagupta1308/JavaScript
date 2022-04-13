const fruits = ["mango", "apple", "apple", "grapes"];

let obj = {};

for (let i = 0; i < fruits.length; i++) {
  if (obj.hasOwnProperty(fruits[i])) {
    obj[fruits[i]] += 1;
  } else {
    obj[fruits[i]] = 1;
  }
}
console.log(obj);
