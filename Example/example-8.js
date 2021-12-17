const checker = require('../Example_function_dev/function_dev.js');
function checkNumberelement(number) {
    var flag = true;

    if (!checker.checkDecimal(number))
        flag = false;
    if (number < 2)
        flag = false;
    else if (number == 2)
        flag = true;
    else if (number % 2 == 0)
        flag = false;
    else {
        for (var i = 3; i < Math.sqrt(number); i += 2) {
            if (number % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}


module.exports = checkNumberelement;