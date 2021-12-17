const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function findString_Firstly(string1, string2){
    for(var i = 0 ; i < string1.length; i++){
        if(string1[i]===string2)
            return i;
    }
}
module.exports =findString_Firstly;
