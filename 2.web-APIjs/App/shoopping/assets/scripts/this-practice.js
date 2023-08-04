function foo() {
    //일반함수에서 this는 node.js환경에서는 global할당    //브라우저는 window객체 할당
    console.log(this);
}
foo();
//객체에서 this
const model = '아반떼';
const car = {
    madeby: '현대',
    model : '그랜져',
    showCarInfo : function () {
        console.log(this);
        console.log(`제조사 --> ${this.madeby} , 모델명 ${this.model}`);
    }
};
// console.log(car.madeby);
car.showCarInfo();

// const $btn = document.getElementById('btn');

// const buttonHandler = function () {
//     console.log(this);
//     this.style.background = 'blue';
// }
// $btn.addEventListener('click',buttonHandler);
console.log('-------------this조작하는 메서드--------------');
console.log('-------------call--------------');
function sayHello(lang1,lang2) {
    console.log(`Hello My name is ${this.name} 말투 ${lang1} 몸매 ${lang2}요`);
}
sayHello('예삐예삐요','멍청','섹시섹시');

const kim = {
    name:'김철수',
    age: 12
};
const park = {
    name : '박영희',
    age : 12
};
// sayHello.call(park, '멍청','섹시섹시');
console.log('-------------apply--------------');
sayHello.apply(park, ['멍청','섹시섹시']);

console.log('-------------bind--------------');
const bindedSayHello = sayHello.bind(park,'멍청','섹시섹시');
bindedSayHello();

const evenHandler = (fruit,e) =>{
    console.log('이벤트 -->',e);
    console.log('과일명 -->',fruit);
    // console.log(this);
};
const $text = document.querySelector('input')
document.getElementById('btn').addEventListener('click',evenHandler.bind(null, '망고'));