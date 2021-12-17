const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function getElementonstart_end(Array1, start,end){
    var result = new Array();
    if(!checkerTestfuntion.checkStart_End(start,end))
        return false;
    for(var i = 0; i < Array1.length; i++){
        if(i>=start&&i<=end){
            result.push(Array1[i]);
        }
    }
    return result;
}

module.exports = getElementonstart_end;