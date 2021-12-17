const checker = require('../Example_function_dev/function_dev.js');
function FindMaxofArray(arraynumber) {
    var max = arraynumber[0];
    for(var i = 1; i < arraynumber.length; i++){
        if(max<=arraynumber[i])
            max = arraynumber[i];
    }
    return max;
}

module.exports = FindMaxofArray;