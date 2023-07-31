const emp = {
    empName : '뽀로로',
    age : 4,
    hireDate : '2021-01-01',
    birthDay : '2020-01-01'
};
const{empName, birthDay,age} = emp;
console.log(`내이름은 ${emp.empName} 이고, 나이는 ${emp.age}입니다. 생일은 ${emp.birthDay}입니다`);

const{empName : en, birthDay : bd,age : a} = emp;
console.log('---------------------------');
console.log(`내이름은 ${en} 이고, 나이는 ${a}입니다. 생일은 ${bd}입니다`);
console.log('---------------------------');
const{birthDay : bDay, ...others} = emp;
console.log(others);
console.log('*****************************************************************');
const copyEmp = {...emp};
console.log(copyEmp);
console.log(emp);
console.log('*****************************************************************');
// const copyEmp = {
//     ...emp,
//     address : '청양군',
//     hobbies : ['산책','수영'],
//     age : 17
// };
