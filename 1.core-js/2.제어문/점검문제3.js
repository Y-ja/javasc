let qNum = 1; 

let correctCount = 0;
let wrongCount = 0;

while (true) {
    let message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
  [1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
    let level = +prompt(message);
  
    if (level === 1) {
      maxNumber = 100;
    } else if (level === 2) {
      maxNumber = 50;
    } else if (level === 3) {
      maxNumber = 20;
    } else {
      alert('난이도를 숫자로 다시 입력하세요!');
      continue;
    }
    break;
  } 
  
let level = +prompt(message);
while (true) {
  let firstNumber = Math.floor(Math.random() * 20) + 1;
  let secondNumber = Math.floor(Math.random() * 20) + 1;

  let markNum = Math.floor(Math.random() * 3);

  let mark;
  let realAnswer; 
  if (markNum === 0) {
    mark = '+';
    realAnswer = firstNumber + secondNumber;
  } else if (markNum === 1) {
    mark = '-';
    realAnswer = firstNumber - secondNumber;
  } else {
    mark = 'x';
    realAnswer = firstNumber * secondNumber;
  }
  let userAnswer = +prompt(`Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`);
  if (userAnswer === 0) {
    alert('게임을 종료함 ㅅㄱ');
    break;
  }

  if (userAnswer === realAnswer) {
    alert("정답임");
    correctCount++;
  } else {
    alert("정답 아닌데 ㅋ");
    wrongCount++;
  }
}
alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);
