let firstNumber = Math.floor(Math.random() * 20) + 1;
let secondNumber = Math.floor(Math.random() * 20) + 1;
let qNum = 1;

while(true){
    let userAnswer = prompt(`Q$ ${++qNum}.${firstNumber} + ${secondNumber} = ??`);
    if(userAnswer === 0){
        alert(`게임조료`);
        break;
    }
}

if (userAnswer === firstNumber + secondNumber) {
  alert('정답입니다!^^');
} else {
  alert('정답인줄 알았지 ㅋ');
}