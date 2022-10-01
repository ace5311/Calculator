let chooseEqual = false;
let chooseSign = false;
let decimalUse = false;
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
            decimalUse=false;
            chooseSign=false;
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
        decimalUse = false;
    }
    else if(!chooseEqual && !chooseSign){
        if(decimalUse && userChoice===".") decimalUse=true;
        else{
            if(userChoice==="backspace") {
                let deleted = num1.slice(-2,-1);
                if(deleted==='.') decimalUse=false;
                let editedNum1 = num1.slice(0,-1);
                num1 = editedNum1;
                display.textContent= `${num1}`;
            }
            else{
                num1 = num1.concat(userChoice);
                display.textContent= `${num1}`;
                if(userChoice===".") decimalUse=true;
            }
        } 
    }
    else if(!chooseEqual && chooseSign) {
        if(decimalUse && userChoice===".") decimalUse=true;
        else {
            if(userChoice==="backspace") {
                let deleted = num1.slice(-2,-1);
                if(deleted==='.') decimalUse=false;
                let editedNum1 = num1.slice(0,-1);
                num1 = editedNum1;
                display.textContent= `${num1}`;
            }
            else {
                num2 = num2.concat(userChoice);
                display.textContent= `${num2}`;
                if(userChoice===".") decimalUse=true;
            }
        }
    }
})
});

function operate(operator, num1, num2){
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if(operator==="add") answer = a+b;
    if(operator==="subtract") answer = a-b;
    if(operator==="multiply") answer = a*b;
    if(operator==="divide" && b!=0) answer = a/b;
    if(operator==="divide" && b==0) answer = "Don't Divide by 0!";
    if(answer.toString().length < 10) display.textContent= `${answer}`;
    else display.textContent=`${answer.toPrecision(10)}`;
    num1=''; num2='';
    
}

function reset(){
    num1='';
    num2='';
    answer=0;
    chooseEqual=false;
    chooseSign=false;
    decimalUse=false;
    operator='';
}