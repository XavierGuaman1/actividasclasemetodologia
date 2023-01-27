let arrays = [1, 5, 3, 30, 5];
let sums = 0;

for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] > 10) {
        sums += arrays[i];
    }
}
console.log(sums);
