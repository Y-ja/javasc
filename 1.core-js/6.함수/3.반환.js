function addNum(n1,n2) {
    return n1 + n2;
    // let n3 = 50;
    // console.log('d');
}
let r1 = addNum(5,7);
console.log(r1);

console.log(addNum(10,20));

console.log('------------함수의 중첩 호출------------');
let r2 = addNum(addNum(addNum(3, 2), 10), addNum(5, 8));
console.log(`r2 : ${r2}`);
console.log('------------리턴이 없는 함수 : void------------');
function multi(n1,n2){
    let result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}
let r3 =  multi(4,6);
console.log(`r3: ${r3}`);
multi(addNum(2,2),addNum(4,4));
console.log('------------리턴탈출------------');
function callName(nickName) {
    let prohibits = ['돌아이','멍청이'];
    if(prohibits.includes(nickName)){
        console.log('고운말 써 !');
        return;
    }
    console.log(`${nickName} Hi`);
}
console.log('---------------------------');
callName('수지');
console.log('---------------------------');
function stopLoop() {
    while (true) {
        let flag = prompt('명령어 입력');
        if (flag === '멈춰') {
            break
        }
        alert(flag);
    }
    alert(ㅅㄱ); 
}