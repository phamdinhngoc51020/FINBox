const checker = require('../Example_function_dev/function_dev.js');
function countOdd(arraynumber) {
    var count = 0;
    if (!checker.checkArrayDecimal(arraynumber))
        return false;
    for (var i = 0; i < arraynumber.length; i++) {
        if (arraynumber[i] % 2 != 0)
            count++;
    }
    return count;
}


module.exports = countOdd;