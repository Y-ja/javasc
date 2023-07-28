let phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 Z플립4',
    price: 1200000
  };
  phone.company = '애플';
  phone['model'] = '아이폰 14';
  console.log(phone);
phone.madeDate = '2023-03-05';
console.log(phone);
console.log('---동적삭제---');
delete phone.price;
console.log(phone);
console.log('---객체의 반복문 for ~in---');
for(let x in phone){
    console.log(`key${x}`);
    console.log('------');
    console.log(`value${phone[x]}`);
}
console.log('-----------객체에 key 유뮤 확인---------------');
let flag = 'model' in phone;
console.log(flag);

let key = 'fruots';
if(key in phone){
    console.log('수정 ㄱㄱ?');
}
else{
    console.log('추가?');
}