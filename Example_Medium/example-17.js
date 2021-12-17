const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function substring(Chain, start, end) {
    var arr = "";
    if (start < 0)
        return "start position cannot be less than 0";
    if (start >= end)
        return "start position cannot be greater than end position";
    for (var i = 0; i < Chain.length; i++) {
        if (start <= i && end >= i)
            arr += Chain[i];
    }
    return arr;
}

module.exports = substring;