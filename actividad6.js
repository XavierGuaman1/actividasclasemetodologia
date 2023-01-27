let numberss = [1, 7, 14, 5, 4];
let summs = 0;

numberss.forEach(function(number) {
  if (number % 7 !== 0) {
    summs += number;
  }
});

console.log(summs);
