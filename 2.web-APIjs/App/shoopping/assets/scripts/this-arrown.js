const dog = {
    name : '찰스',
    regularFn : function () {
        console.log('regular -->', this);
    },
    arrown : () =>{
        console.log('arrow -->',this);
    }

};
dog.regularFn();
dog.arrown();
console.log('---------------------------');

const cat = {
    name : '루비',
    introduce : function () {
        console.log(`intro this -->`, this);
        setTimeout(() => {
            console.log(`안녕하세욥  ${this.name} 이에욥`);
        }, 2000);
    }
};
cat.introduce();
console.log('------------------------------------------');
$modal.addEventListener('click', function (e) {
    console.log(this);
    $ok.addEventListener('click', function (e) {
        console.log(this);
    });
    $cancel.addEventListener('click', (e) =>{
        console.log(this);
    });
});