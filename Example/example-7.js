const checker = require('../Example_function_dev/function_dev.js');
function sumOldNumber(arraynumber) {
    var result = 0;
    if (!checker.checkArrayDecimal(arraynumber))
        return false;
    for (var i = 0; i < arraynumber.length; i++) {
        if (arraynumber[i] % 2 != 0)
            result += arraynumber[i];
    }
    return result;
}

module.exports = sumOldNumber;