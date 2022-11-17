import { Calculator } from "./calculator.js"

const operationButtons = document.querySelectorAll('[data-operation]')
const numberButtons = document.querySelectorAll('[data-number]')
const resetButton = document.querySelector('[data-reset]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals')
const prevOperandText = document.querySelector('[data-prev-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator= new Calculator(prevOperandText,currentOperandText)


// SETTTING UP EVENTLISTENERS FOR CLICKS ON BUTTON OF THE CALC
numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.getOperator(button.innerText)
        calculator.updateDisplay()
    })
})

resetButton.addEventListener('click',() => {
    calculator.clear()
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',() => {
    calculator.delete()
    calculator.updateDisplay();
})

equalsButton.addEventListener('click',() => {
    calculator.equate()
    calculator.updateDisplay();
})



// HANDLING APP THEME TOGGLE
const toggleIcon = document.querySelector('.toggle-icon')
const toggleNum = document.querySelectorAll('.toggleNum')

for(let i = 0; i < toggleNum.length;i++){
    toggleNum[i].addEventListener('click',() => {
        if(toggleNum[i].classList.contains('toggle1')){
            document.body.classList.add('theme-1')
            document.body.classList.remove('theme-2')
            document.body.classList.remove('theme-3')
            toggleIcon.style.left = '10%'
        }else if(toggleNum[i].classList.contains('toggle2')){
            document.body.classList.add('theme-2')
            document.body.classList.remove('theme-1')
            document.body.classList.remove('theme-3')
            toggleIcon.style.left = '36%'
        }else  if(toggleNum[i].classList.contains('toggle3')){
            document.body.classList.add('theme-3')
            document.body.classList.remove('theme-1')
            document.body.classList.remove('theme-2')
            toggleIcon.style.left = '70%'
        }
    })
}





