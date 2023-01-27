let numbers = [3,6,4,2,1];
let summ = 0;

numbers.forEach(function(number) {
  if (number % 3 === 0) {
    summ += number;
  }
});

console.log(summ);
