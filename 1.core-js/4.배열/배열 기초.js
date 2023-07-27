let num = [10,20,30,40,50,60];
console.log(typeof num);
console.log(num);
console.log(num[3]);
console.log(num.length);

console.log(`첫번째 데이터:${num[0]}`);
console.log(`첫번째 데이터:${num[num.length-1]}`);


let foods = ['피자','치킨','햄버거'];
console.log('-----------------------');
console.log(foods);

foods[1]='떡볶이';
console.log(foods);
console.log('-----------------------');
console.log(`1번째 요소 : ${foods[0]}`);
console.log(`2번째 요소 : ${foods[1]}`);
console.log(`3번째 요소 : ${foods[2]}`);
console.log('-----------------------');
for(let i=0; i<foods.length; i++){
    console.log(`${i+1}번째 요소 : ${foods[i]}`);
}
console.log('-----------------------');
for(let f of foods){
    console.log(`저장된 음식 : ${f}`);
}
console.log('-----------모던 자바 스크립트 문법------------');
foods.forEach((f,i) => {
    console.log(`${i+1}번째 음식 : ${f}`);
});