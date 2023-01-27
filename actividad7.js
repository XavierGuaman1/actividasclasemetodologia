var numberrs = [2,1,4,3];
var suums = 0;

for (var i = 0; i < numberrs.length; i++) {
  if (numberrs[i] === i) {
    suums += numberrs[i];
  }
}

console.log(suums);
