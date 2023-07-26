const HIGH = 1;
const MIDDLE = 2;
const LOW = 3;

let initCount;
let countdown = initCount;

let level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

if(level === 1){
  initCount = 3;
}else if(level === 2){
  initCount = 6;
}else if(level === 3){
  initCount = 10;
}else{
  alert('잘못 입력함 난이도 상 으로 감 ㅋ')
  initCount = 3;
}


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