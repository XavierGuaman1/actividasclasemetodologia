let nuums=[0,2,1,1];
let ssum=0;

for (let i=0;i<nuums.length;i++){
    if (nuums[i]<i){
        ssum += nuums[i];
    }
}
console.log(ssum);