let array = [10,50,8,4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        sum += array[i];
    }
}
console.log(sum);
