let x = +prompt('숫자1 입력');
let y = +prompt('숫자2 입력');

if(x > y){
    let t = x;
    x = y;
    y = t;
} 
let total = 0;
for(let n = x;n<y;n++){
    total += n;
}
alert(`${x} ~ ${y}까지의 총합 ${total}`)