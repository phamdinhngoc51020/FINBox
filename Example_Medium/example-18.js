const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function substring (Chain,start,number) {
    var arr = "";
    if(start<0)
        return "start position cannot be less than 0";
    if(number<0)
        return "Numbers position cannot be less than 0";
    for(var i = 0; i < Chain.length; i++){
        if(start<=i && (start+number)>=i)
            arr+=Chain[i];
    }
    return arr;
}

module.exports = substring;