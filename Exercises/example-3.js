const checker = require('../Example_function_dev/function_dev.js');
function checkNumber(number1, number2) {
    if (!checker.checkDecimal(number1) || !checker.checkDecimal(number2))
        return "input non-integer number";
    if (number1 % 2 == 0 && number2 % 2 == 0)
        return "Cùng chẵn";
    else {
        if (number1 % 2 != 0 && number2 % 2 != 0)
            return "Cùng lẻ";
        else
            return "1 chẵn 1 lẻ";
    }
}

module.exports = checkNumber;