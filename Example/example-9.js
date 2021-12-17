const checker = require('../Example_function_dev/function_dev.js');
function findSurplus(divisor, dividend) {
    var surplus;
    while (divisor > dividend) {
        divisor = divisor - dividend;
    }
    if (divisor < dividend)
        surplus = divisor;
    return surplus;
}

module.exports = findSurplus;