let PetName ={ name : '인절미'
,age : 3,
favorite:['산책','간식'],
kind: '리트리버',
injection:true ,
'hate-food':'족발',
};

let youPetName ={ name : '흑임자'
,age : 3,
favorite:['산책','간식'],
kind: '래브라도 리트리버',
injection:true };

console.log(typeof PetName);
console.log('---------------------');
console.log(PetName.kind);
console.log(youPetName.kind);
console.log('---------------------');
console.log(PetName.name);
console.log(youPetName.favorite);
console.log('---------------------');
// PetName.name.push('꼬리_흔들기');
console.log('---------------------');
// console.log(PetName);
console.log('---------------------');
console.log(PetName.injection);
console.log(PetName['injection']);
console.log('---------------------');
console.log(PetName['hate-food']);   

// let myPetName = 'name';
// console.log(PetName[myPetNam])