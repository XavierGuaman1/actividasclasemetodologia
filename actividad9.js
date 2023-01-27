let nuumms=[0,2,1,4];
let sumsss=0;

for (let i=0;i<nuumms.length;i++){
    if (nuumms[i]>i){
        sumsss += nuumms[i];
    }
}
console.log(sumsss);
