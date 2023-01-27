let arry = [1, 1, 0, 0];
let sumss = 0;

for (let i = 0; i < array.length; i++) {
    if (arry[i] === 0) {
        sumss += i;
    }
}
console.log(sumss);
