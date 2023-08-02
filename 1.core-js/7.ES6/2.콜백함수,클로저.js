function calculate(func) {
    console.log('계산기입니다');
    const result = func(10,20);
    return result;
}
function add(n1,n2) {
    return n1 + n2;
}
const r = calculate(add);
console.log(`r --> ${r}`);
console.log('---------------------------');
const r2 = calculate(function(n1,n2){
    return n1-n2;
})
console.log(`r2 --> ${r2}`);
console.log('---------------------------');
const r3 = calculate((n1,n2) => n1 * n2);
console.log(`r3 --> ${r3}`);

console.log('------정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력 하는 함수--------');
function showEvenNumber(n) {
    for (let i= 1; i < n; i++) {
        if(i % 2 === 0)console.log(i);
        
    }
}
showEvenNumber(8);
console.log('---------------------------');
function showOddOrEvenNumber(n, isOdd) {
    const delim = isOdd ? 1 : 0;
    for (let i= 1; i < n; i++) {
        if(i % 2 === delim)console.log(i);
        
    }
}
showOddOrEvenNumber(7,false);
console.log('---------------------------');
function showNum(n,code) {
    for (let i= 1; i < n; i++) {
        if(code(i))console.log(i);
    }
}
showNum(10,k => k %2 ===0);

showNum(10,function(i){
    return i % 2===0;
});
