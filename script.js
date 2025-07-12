let num1 = "";
let num2 = "";
let nummaybe = false;


const display = document.getElementById('calculatorDisplay');
const buttons = document.querySelectorAll('button');

const operator = ['+', '-', '*', '/'];
let currentOperator = "";

let buttonClicks = {
    totalClicks: 0,
    clickHistory: []
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button.textContent)
        if (button.textContent === 'C') {
            display.value = '0';
            num1 = "";
            num2 = "";
            currentOperator = "";
            isSecondNum = false;
           
        }
        else if(operator.includes(button.textContent)) {
            currentOperator = button.textContent;
            nummaybe = true;
        }
        else if (button.textContent === '=') {
            let result = operate(currentOperator);
            display.value = result;
            num1 = result
            num2=  "";
            currentOperator = "";
            isSecondNum = false;

        }
        else {
            if (!nummaybe) {
                num1 += button.textContent;
                display.value = num1;
            }
            else {
                num2 += button.textContent;
                display.value = num2;
            }
        }
        
        buttonClicks.totalClicks++;
        buttonClicks.clickHistory.push(button.textContent);
        console.log(buttonClicks);

    });
});





function add () {
    return parseFloat(num1) + parseFloat(num2);
}
function subtract () {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply () {
    return parseFloat(num1) * parseFloat(num2);
}

function divide () {
    return parseFloat(num1) / parseFloat(num2);
}


function operate(op) {
    if (op === '+') {
        return add();
    }
    else if (op === '-') {
        return subtract();
    }
    else if (op === '*') {
        return multiply();
    }
    else if (op === '/') {
        return divide();
    }
}


        


