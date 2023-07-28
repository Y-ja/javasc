const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
  },
];
console.log('----------배열고차함수-----------------');
userList.forEach((user) => {
    console.log(`제이름은 ${user.userName} 입니다 ${user.address}에 삼`);
});

// const foodList = ['치킨','피자','햄버거'];
// foodList.forEach(food => console.log(${food}));
console.log('----------filter-----------------');
const num =[1,2,3,4,5,6,7,8,9,10];
const numArray = num.filter(n =>  n %3 ===0 );
console.log(numArray);
console.log('----------filter2-----------------');
const newUserList = userList.filter(user => user.account ==='abc1234');
console.log(newUserList);
console.log(numArray);
console.log('----------map-----------------');
const doubled = num.map(n => n **2);
console.log(doubled);
console.log('----------map2-----------------');
const PlusTwo = num.map(n => n + 2);
console.log(PlusTwo);
const firstHobby = userList.map(u => u.hobbys[0]);
console.log(firstHobby);
console.log('=========================');
const appleBasket = [{
    color: 'green',
    sweet: 13
  },
  {
    color: 'red',
    sweet: 14
  },
  {
    color: 'red',
    sweet: 11
  },
  {
    color: 'green',
    sweet: 6
  },
  {
    color: 'green',
    sweet: 7
  },
  {
    color: 'green',
    sweet: 9
  },
];

console.log('-사과중에서 녹색이면서 당도가 9이상인 사과 선별-');
appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => `이 사과는 ${apple.color}색이며 당도는 ${apple.sweet}입니다.`)
  .forEach(a => console.log(a));
  console.log('-회원목록에서 서울에 사는 회원 두번째 취미 배열-');
  userList
    .filter(usr => usr.address === '서울')
    .map(usr => {
        return{
            name : usr .userName,
            secondHobby : usr.hobbys[1]
        }
    })  
    .forEach(hobbys => console.log(`회원의 2번째 취미는 ${u.secondHobby}}입니다`));