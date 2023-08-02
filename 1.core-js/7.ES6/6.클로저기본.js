console.log('--자바그크립트 함수는 또다른 함수 리턴--');
function add(n1 ,n2) {
    return n1 + n2;
}
console.log('--------------------------------------');
function Calculator() {
    console.log('Calculator');
    return (n1,n2) => n1 + n2;
}

const Calculator1 = () => (n1,n2) => n1 + n2;

const result = Calculator();
console.log(result(6,8));

console.log(Calculator()(8,8));

console.log('--카운트를 증가 시키는 함수--');
// const increase = () => ++CountQueuingStrategy;

// console.log(increase());
// console.log(increase());
// count = 999;
// console.log(increase());

// const increase = () =>{
//     let count = 0;
//     return ++count;
// }
// console.log(increase());
// console.log(increase());
// console.log(increase());
console.log('--카운트를 증가 시키는 함수를 리턴하는 클로저를 생성--');
// const increaseClosure = () =>{
//     let count = 0;
//     return() => ++count;
// }
// const increase = increaseClosure();

// console.log(increase());
// console.log(increase());
// count = 900;
// console.log(increase());

console.log('--즉시시행 함수 : 1회성 호출 함수 만들때 사용--');

function add(n1,n2) {
    return n1 + n2;
}
const r1 = (function(n1,n2) {
    return n1 + n2;
})(10,20);
console.log(`r1 : ${r1}`);

console.log('---------------------------');
const increase1 = (() =>{
    let count = 0;
    return() => ++count;
})();

console.log(increase1());
console.log(increase1());
count = 900;
console.log(increase1());