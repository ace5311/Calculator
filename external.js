let chooseEqual = false;
let chooseSign = false;
let num1 = '';
let num2 = '';
let operator = '';
let answer = 0;

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {button.addEventListener('click',()=>{
    let userChoice = button.id;
    if (userChoice==='clear'){
        display.textContent='';
        reset();
    }
    else if(userChoice === 'equals') {
        if(num2!=''){
            chooseEqual=true;
            operate(operator, num1, num2);
            num1=answer;
            num2='';
            chooseEqual=false;
        }
    }
    else if((userChoice === 'add' ||userChoice === 'subtract' || userChoice === 'multiply' || userChoice === 'divide')){
        chooseSign=true;
        if(num2!='') {
            operate(operator,num1,num2);
            num1=answer;
            num2='';
        }
        operator = userChoice;
    }
    else if(!chooseEqual && !chooseSign){
        num1 = num1.concat(userChoice);
        display.textContent= `${num1}`;
    }
    else if(!chooseEqual && chooseSign) {
        num2 = num2.concat(userChoice);
        display.textContent= `${num2}`;
    }
})
});

function operate(operator, num1, num2){
    let a = parseInt(num1);
    let b = parseInt(num2);
    if(operator==="add") answer = a+b;
    if(operator==="subtract") answer = a-b;
    if(operator==="multiply") answer = a*b;
    if(operator==="divide" && b!=0) answer = a/b;
    if(operator==="divide" && b==0) answer = "Don't Divide by 0!";
    display.textContent= `${answer}`;
    num1=''; num2='';
}

function reset(){
    num1='';
    num2='';
    answer=0;
    chooseEqual=false;
    chooseSign=false;
    operator='';
}