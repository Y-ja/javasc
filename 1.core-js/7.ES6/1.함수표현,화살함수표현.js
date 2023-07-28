/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */
console.log('------------함수정의---------------');
function add(n1,n2) {
    console.log('---------함수 add가 호출됨------------');
    return n1 + n2;
}
const plus = add;
console.log('---------------------------');
console.log(plus);
console.log('-------------익명함수--------------');
const foo = function () {
    console.log('함수 foo 호출');
};
foo();
console.log('-------------배열 Or 객체 저장--------------');
const array = [10,'h',true,{},[],add];
const r1 = array[5](8,88);
console.log(`r1====${r1}`);

console.log('------------- 화살표함수--------------');
function multiply(n1,n2) {
    return n1 * n2;
}
console.log('---------------------------');
const multiply1 = function(n1,n2){
    return n1 * n2;
}
console.log('---------------------------');
const multiply2 = (n1,n2) =>{
    /* return*/ n1 * n2;
}
console.log('---------------------------');
const r3 = multiply2(8,8);
console.log(`-->${r3}`);

const result = pow(6);
console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
// Expected output: 2

console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// Expected output: NaN
console.log(result);