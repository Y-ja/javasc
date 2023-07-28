let x = 10;
function foo(z) {
 
  let x = 30;
  let y = 20 + x;
  console.log(y - z);

  console.log(`지역변수 x 선언후: ${x}`);
}
foo(17);
console.log(`함수 바깥쪽 x: ${x}`);
console.log('====================');
function outer(m) {
  let n = 'outer local n';
  let v = 'outer local v';
  console.log(m);
  console.log(n);
  console.log(v);
  console.log('====================');
  function inner() {
    console.log(n);
    let m = 'inner local m';
    let v = 'inner local v';
    console.log(m);
    console.log(v);
  }
  inner();
}
let m = 'global m';
