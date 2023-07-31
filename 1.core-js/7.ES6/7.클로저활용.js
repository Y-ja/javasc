const increase = (() => {
    let count = 0;
    return () => ++count;
})();

const decrease = (() => {
    let count = 0;
    return () => --count;
})();

console.log(increase());
console.log(decrease());
console.log('---------------------------');
console.log(increase());
console.log(decrease());
console.log('---------------------------');
const countClosure = () =>{
    let count = 0;

    const increase = () => ++count;
    const decrease = () => --count;

    return{
        increase,decrease
    };
}
const counter = countClosure();
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.increase());
console.log(counter.decrease());
console.log('---------------------------');

// const {increase1, decrease1} = (()=>{
//     let count = 0;
//     return{
//         increase : () => ++count,
//         decrease: () => --count
//     };
// })();
// console.log(counter.increase1());
// console.log(counter.decrease1());
// console.log(counter.increase1());
// console.log(counter.decrease1());

