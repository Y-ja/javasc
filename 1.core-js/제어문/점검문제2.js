let secret = Math.floor(Math.random() * 100) + 1;
while(true){
   let min = 1
   ,max=100;
 let answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}`);
    if(answer < min || answer > max){
        alert(`범위 안의 값을 입력하세요!`);
        continue;
    }

    if (secret === answer) {
     alert(`정답입니다!`);
     break;
    } else if (secret > answer) {
     alert(`UP!!`);
      min = answer + 1;
    } else {
     alert(`DOWN!!`);
      max = answer -1;
    }
}
alert(`수고하셨습니다`)