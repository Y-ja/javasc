let n1 = 10;
let n2 = '20';

console.log(n1 + n2 );
let n3  = 10;
//false
if(undefined) console.log('ok1');
if(null) console.log('ok2');
if(0) console.log('ok3');
if('') console.log('ok4');
if(NaN) console.log('ok5');
//true
if (1) console.log('ok6');
if (-100.99) console.log('ok7');
if (' ') console.log('ok8');
if ('메롱') console.log('ok9');
if (1,2,3) console.log('ok10');
if(function(){}) console.log('ok11');