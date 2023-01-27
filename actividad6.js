let nummss=[12, 14, 5, 7];
let suums=0;
for (let i=0;i<nummss.length;i++){
    if (i%7==0){
        suums += nummss[i];
    }
}
console.log(suums);