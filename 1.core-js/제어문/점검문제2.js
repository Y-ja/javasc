let secret = Math.floor(Math.random() * 100) + 1;
while(true){
   let min = 1
   ,max=100;
   let initCount = 5;
   let countdown = initCount;
   while(true){
    let answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);
    countdown--;
    if(answer < min || answer > max){
        alert(`범위 안의 값을 입력하세요!`);
        continue;
    }
    countdown--;

    if (secret === answer) {
     alert(`정답입니다!${initCount - countdown} 번에 맞춤 ㅋ`);
     break;
    } else if (secret > answer) {
     alert(`UP!!`);
      min = answer + 1;
    } else {
     alert(`DOWN!!`);
      max = answer -1;
    }
    if(countdown === 0){
     alert(`땡 정답은 ${secret} 거임 ㅋ`);
     break;
    }else{
      alert(`신에게는 ${countdown} 번의 기회가 나왔습니다.`)
    }
   } 
}
alert(`수고하셨습니다`)