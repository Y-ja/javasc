
const NOT_FOUND;
let foods = ['짜장면','짬뽕','군만두','탕수육'];
function myIndexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (searchElement === array[i]) return i; 
    }
    return -1;
}
function myInclude(array, searchElement) {
    // for (let i = 0; i < array.length; i++) {
    //     if (searchElement === array[i]) return true; 
    // }
    return  myIndexOf(array, searchElement) != NOT_FOUND;;
}
console.log('------------------------');
let index =  myIndexOf(foods, '군만두');
console.log(`찾은 인덱스:${index}`);
console.log('------------------------');
