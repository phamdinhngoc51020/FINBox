const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function countTax(wage) {
    if(wage<=0)
        return "wage is incorrect";
    if(wage>50)
        return wage * 20/100;
    if(wage <=50 && wage > 20)
        return wage * 10/100;
    if(wage<20)
        return wage * 5/100;
}

function countTax_number_months(arrayNumber){
    var sum = 0;
    for(var i = 0 ; i < arrayNumber.length; i++){
        sum += countTax(arrayNumber[i]);
    }
    return sum;
}
module.exports = countTax_number_months;