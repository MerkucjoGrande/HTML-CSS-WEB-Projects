let number1
let number2 
let operation
let result

function performMath(number1, number2, operation) {
    if (operation === '+') {
        result = number1 + number2
    } else if (operation === '-') {
        result = number1 - number2
    } else if (operation === '*') {
        result = number1 * number2
    } else if (operation === '/') {
        result = number1 / number2
    }
    return result
}
