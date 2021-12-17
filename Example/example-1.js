const checker = require('../Example_function_dev/function_dev.js');
function changeLocation3Num(a, b, c) {
    if (!checker.checkDecimal(a) || !checker.checkDecimal(b) || !checker.checkDecimal(c))
        return ('non-integer number');
    let arr = [a, b, c];
    let d = c;
    c = b;
    b = a;
    a = d;
    arr = [a, b, c];
    return arr;
}

module.exports = changeLocation3Num;