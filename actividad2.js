let array = [1, 4, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        sum += array[i];
    }
}
console.log(sum);
