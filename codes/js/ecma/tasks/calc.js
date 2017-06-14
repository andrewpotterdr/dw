// operator: '+', '-', '*', '/'
function calc(operand1, operand2, operator){
  switch (operator) {
    case '+':
      return parseInt(operand1) + parseInt(operand2)
    case '-':
      return operand1 - operand2
    case '*':
      return operand1 * operand2
    case '/':
      return operand1 / operand2
  }
}

console.log(calc(1, '1', '+')) //=> 2
console.log(calc(1, 1, '+')) //=> 2
console.log(calc(1, 1, '*')) //=> 1
