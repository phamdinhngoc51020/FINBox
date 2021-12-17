const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function countMoney(start, end) {
    if (start < 0 || end < 0)
        return "time cannot be less than 0";
    if (!checkerTestfuntion.checkStart_End(start, end))
        return "The end time must be greater than the start time";
    if (start == 0 && end >= 8)
        return 160 + ((end - 8) * 40);
    if (end - start <= 2)
        return 70 * (end - start);
    if (end - start > 2)
        return 50 * (end - start);
}

module.exports = countMoney;