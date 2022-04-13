function primeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}
console.log(primeNum(6));
