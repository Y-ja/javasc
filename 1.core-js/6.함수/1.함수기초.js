// console.log(`김철순님 안녕하세요`);
// console.log(`오늘도 즐거운 하루 되세요`);
// console.log('------------------------');
// console.log(`박영휘님 안녕하세요`);
// console.log(`오늘도 즐거운 하루 되세요`);
// console.log('------------------------');
// console.log(`이길동님 안녕하세요`);
// console.log(`오늘도 즐거운 하루 되세요`);

console.log('------------함수정의------------');
function sayHello(name ,isMorning){
    console.log(`${name}님 안녕하세요`);
    console.log(`오늘도 즐거운 하루 되세요`);
    if(isMorning === true){
        console.log(`오늘도 즐거운 하루 되세요`);
    }else{
        console.log(`오늘도 수고 하셨습니다`);
    }
}
sayHello('김철순',true);
console.log('------------------------');
sayHello('박영휘',true);
console.log('------------------------');
sayHello('이길동',true);
console.log('------------------------');

function makeLile(){
    console.log('-------');
}
for(let i=0; i<4;i++){
    makeLile();
}
console.log('------------------------');
function calcAreaCircle(r){
    console.log('원의넓이 구하는 중 : ...');
    const PI = 3.14159265;
    const area = PI * r ** 2;  
    return area;  
}
let result = calcAreaCircle(5);
console.log(`result : ${result}`);
console.log('------------------------');
let result2 = calcAreaCircle(10);
console.log(`result : ${result2}`);