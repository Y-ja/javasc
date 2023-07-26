foodList = ['떡볶이','라면','순대','튀김','어묵'];
findTarget = '떡볶이';

let index = -1;
for(let i = 0; i<foodList.lenght;i++){
    if(findTarget === foodList[i]){
        index = i;
        break;
    }
}
console.log(`찾은 인덱스 ${index}`);
console.log('---indexOf---')
index = foodList.indexOf(findTarget);

console.log('---include---')
let isPresent = foodList.includes('순대');
console.log(`존재여부 : ${isPresent}`);

console.log('---slice---')
foodList.push('어묵','튀김');
console.log(foodList);

console.log('---앞에서 3개만 추출---');
let sliceFoodList = foodList.slice(0,3);
console.log(sliceFoodList);
console.log(foodList);

console.log('---------------------');
let sliced2 = foodList.slice(3);
console.log(sliced2);

console.log('-----------원본배열을 그대로 복사----------');
let copyArr = foodList.slice();
console.log(copyArr);

console.log('-----------reverse----------');
let arr1 = [10,20,30];
let arr2 = [9,7,5,3,1];
arr1.reverse();
console.log(arr1);
let arr2Copy = arr2.slice();
arr2Copy.reverse();
console.log(arr2Copy);
console.log(arr2);

console.log('-----------concat----------');
let concated  = arr1.concat(arr2);
console.log(concated);
console.log(arr1);
console.log(arr2)

console.log('-----------splice----------');
console.log(foodList);

foodList.splice(1,2);
console.log(foodList);

foodList.splice(0 , 1,'족발');
console.log(foodList);

foodList.splice(2,0,'마라샹궈');
console.log(foodList);


console.log('-----------clear----------');
// foodList.splice();
foodList = [];
console.log(foodList);