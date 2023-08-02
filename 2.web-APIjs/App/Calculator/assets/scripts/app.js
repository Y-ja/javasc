//이벤트처리 , 핸들러
outputResult('30','5+25');

let currentResult = 0;

//더하기버튼 이벤트 핸들러
const addHandler =() => {
    console.log('+ button click!');
    const enteredNumber = +$userInput.value;

    const calcDescriptionLog = `${currentResult} + ${enteredNumber}`
    currentResult += enteredNumber

    outputResult(currentResult,calcDescriptionLog)
};
// substractHandler
const subHandler = () => {
    console.log('+ button click!');
    const enteredNumber = +$userInput.value;

    const calcDescriptionLog = `${currentResult} - ${enteredNumber}`
    currentResult -= enteredNumber

    outputResult(currentResult,calcDescriptionLog)
};
//multiplyHandler
const multiHandler = () => {
    console.log('+ button click!');
    const enteredNumber = +$userInput.value;

    const calcDescriptionLog = `${currentResult} * ${enteredNumber}`
    currentResult *= enteredNumber

    outputResult(currentResult,calcDescriptionLog)
};
//dividHandler
const dividHandler = () => {
    console.log('+ button click!');
    const enteredNumber = +$userInput.value;

    const calcDescriptionLog = `${currentResult} / ${enteredNumber}`
    currentResult /= enteredNumber

    outputResult(currentResult,calcDescriptionLog)
};
//--이벤트 핸들러 바인딩 --
$addBtn.addEventListener('click', addHandler);
$addBtn.addEventListener('click', subHandler);
$addBtn.addEventListener('click', multiHandler);
$addBtn.addEventListener('click', dividHandler);