/**
 * @description - Method to perform calculation based on params
 * @param {Number} a
 * @param {Number} b
 * @param {Function} callback
 * @returns {Number}
 */
function calculator(a, b, callback) {
  // Call when task is completed
  return callback(a, b);
}

/**
 * @description Function to add two value
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function add(a, b) {
  return a + b;
}

/**
 * @description Function to Multiply two value
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * @description Function to Divide two value
 * @param {*} a
 * @param {*} b
 */
function divide(a, b) {
  return a / b;
}

/**
 * @description Function to Subtract two value
 * @param {*} a
 * @param {*} b
 */
function subtract(a, b) {
  return a - b;
}

console.log("Add: ", calculator(1, 2, add)); // 3
console.log("Multiply: ", calculator(3, 4, multiply)); //12
console.log("Divide: ", calculator(4, 2, divide)); // 2
console.log("Subtract: ", calculator(50, 3, subtract)); //47
