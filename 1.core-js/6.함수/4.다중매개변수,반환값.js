function addAll(num) {
    let total = 0;
    for(let n of num){
        total += n;
    }
    return total;
}
let r1 = addAll([10,20,30,40,50]);
console.log(`r1: ${r1}`);
console.log('------------------------');
function addAll06(num) {
    let total = 0;
    for(let n of num){
        total += n;
    }
    return total;
}
let r2 = addAll06(10,20,30,40,50);
console.log(`r2: ${r2}`);