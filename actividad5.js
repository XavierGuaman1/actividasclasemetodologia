let numbers = [12,3,5,7];
let summ = 0;

numbers.forEach(function(number) {
  if (number % 3 === 0) {
    summ += number;
  }
});

console.log(summ);
