class Calculator{
    constructor(prevOperandText,currentOperandText){
        this.prevOperandText = prevOperandText;
        this.currentOperandText = currentOperandText;
        this.clear()
    }

// SETTING UP ALL USEABLE FUCTIONS OF THE CALCULATOR

    clear(){
        this.currentOperand = '';
        this.prevOperand = '';
        this.operation = undefined;
    }

    delete(){
       this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return ;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    getOperator(operation){
        if(this.currentOperand === '')return ;
        if (this.prevOperand !== ''){
            this.compute()
        }
      this.prevOperand = this.currentOperand;
      this.operation = operation;
      this.currentOperand = ''
    }

// COMPUTING THE VALUES
    equate(){
      let computation;
      const prev = parseFloat(this.prevOperand);
      const current = parseFloat(this.currentOperand);
      
      if(isNaN(prev) || isNaN(current))return ;

      switch(this.operation){
        case '+' : 
          computation = prev + current
        break;
        case '-' :
            computation = prev -  current
        break;
        case 'x' : 
           computation = prev * current
        break;
        case '/' :
           computation = prev / current
        break;
        default:
        return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.prevOperand = ''
    }


// HANDLING NUMBER FORMAT AND DECIMALS
    setFormatOutput(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }

// UPDATES THE DOM
    updateDisplay(){
      this.currentOperandText.innerText = this.setFormatOutput(this.currentOperand);

      if(this.operation != null){
        this.prevOperandText.innerText = `${this.setFormatOutput(this.prevOperand)} ${this.operation}`
      }else{
        this.prevOperandText.innerText = ''
      }
    }
}

export { Calculator }