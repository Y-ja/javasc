const userNames =['김철수','강수찬','박영수'];
 
const [kim,kang,park] = userNames;
console.log(`a : ${kim}---b : ${kang}---c : ${park}`);
const[kk ,, gg] = userNames
console.log(`kk : ${kk}----- gg : ${gg}`);

console.log('---------------------------');
let first = 10;
let second = 20;
[second,first] = [first ,second];
console.log(`1st : ${first}---- 2st : ${second}`);

console.log('---------------------------');
// const[one, three] = [1,3,5,7,9,11];
// console.log(`one --> ${one}, three --> ${three}`);
// console.log(rest);

console.log('---------------------------');
const foods = ['햄버거','감자튀김','콜라'];
// const copyFoods = foods;
// const copyFoods = foods.slice();
const copyFoods = ['치킨너겟', ...foods ,'닭강정'];
foods[1] = '한우버거';
copyFoods[2] = '사이다';

console.log('foods : ', foods);
console.log('copy : ', copyFoods);