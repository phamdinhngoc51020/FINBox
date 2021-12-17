const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function apartTwoArray(Array1,Array2){
    var array = new Array();
    if(!checkerTestfuntion.checkTwoArrayLengt(Array1,Array2))
        return false;
    for(var i = 0; i  < Array1.length; i++){
        array[i] = Array1[i] - Array2[i];
    }
    return array;
}

module.exports = apartTwoArray;