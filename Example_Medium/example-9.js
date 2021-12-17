const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function sumString_aforb(string1, string2){
    var count = 0;
    for(var i = 0 ; i < string1.length; i++){
        if(string1[i]===string2)
            count =count+1;
    }
    return count;
}

module.exports = sumString_aforb;