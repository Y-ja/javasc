
// let num = 1234567;
// num = num.toString();
// console.log(`자리수 : ${num.length}`)
// let count  = 0;
// while(true){
//         num = Math.floor(num / 10);
//         count ++;
//         let rest = num % 10;
//         if(rest === 0) break;
// }
// console.log(`자리수 : ${count}`)
let x = 30 , y = 40;
let result  = String(x) + y.toString();
console.log(`result : ${result}`);

let z = '100';
let result2 = +z + 200;
console.log(`result2 : ${result2}`);

let money = 7000;
let hasMoney = !money;
console.log(`돈이 있는가? ${hasMoney}`)