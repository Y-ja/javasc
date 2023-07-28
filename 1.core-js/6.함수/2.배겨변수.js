function calcRangeSum(x,y){
    let total = 0;
    for(let i = x; i<y;i++){
        total += i;
    }
    return total;
}
console.log();
let r1 = calcRangeSum(1,10);
console.log(`r1: ${r1}`)

let r2 = calcRangeSum();
console.log(`r2: {r1}`)


function Hello(lang ='한국어'){

    if(lang === '한국어'){
        console.log('안녕');
    }
    else if(lang === '영어'){
        
        console.log('HI');
    }
    else if(lang === '독일'){
        console.log('Hallo');
    }else{
        console.log('????');
    }
}