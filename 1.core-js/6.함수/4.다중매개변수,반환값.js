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
// function addAll06(num) {
//     let total = 0;
//     for(let n of num){
//         total += n;
//     }
//     return total;
// }
// let r2 = addAll06(10,20,30,40,50);
// console.log(`r2: ${r2}`);
console.log('-----------다중반환값-------------');
function oAll(n1,n2) {
    return[n1 + n2,n1 - n2,n1 * n2,n1 / n2 ];
    // return{
    //     minus : n1 - n2;
    //     pius : n1 + n2;
    // multi: n1 * n2, 
    // divide: n1 / n2,
    // }

}
let results = oAll(20,10);
console.log(results);
// console.log(`덧셈결과: ${results.plus}`);
// console.log(`곱셈결과: ${operateAll(4, 5)[2]}`);