for (let level = 2; level <=10; level++) {
    console.log(`==== 구구단 ${level}단 ====`);
    for (let line = 1; line <= 10; line++) {
      console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('=====================');
  }
console.log('=====================');
let cnt = 0;
for(let i = 0; i<3;i++){
    for(let j = 0; j<2; j++){
        // console.log(`${i},${j}`);
        for(let k=0; k < 4 ; k++){
            cnt++;
        }
       
    }
}
console.log(`총 반복 횟수 : ${cnt}회`)