const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function print_Number_Fibonacci (numbers) {
    var first_term = 0, second_term = 1, next_term;
    var array = new Array();
    for(var i = 0 ; i < numbers; i ++){
        if ( i <= 1 )
          next_term = i;
       else
       {
          next_term = first_term + second_term;
          first_term = second_term;
          second_term = next_term;
       }
       array.push(next_term);
    }
    return array;

}

module.exports = print_Number_Fibonacci;