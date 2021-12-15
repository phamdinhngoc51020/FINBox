const checker = require('../Example_function_dev/function_dev.js');

function factorial_numbers(a, b) {
    var result = 1;
    if (!checker.checkDecimal(a) || !checker.checkDecimal(b))
        return ('non-integer number');
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}
module.exports = factorial_numbers;
