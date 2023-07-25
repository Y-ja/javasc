let t = true;
let f = false;
console.log();

console.log('---------------');
console.log(!t);

let money = 0;
if(money){
    console.log('집에서 쉼');
}else{
    console.log('쇼핑을 할거야');
}
console.log('---------------');
let food;
money = 1000000000000
// // if(money > 6000){
// //     food = '떡볶이';
// // }else{
// //     food = '라면';
// }
console.log(`선택된 음식: ${money > 6000 ? '떡볶이' : '라면'}`);