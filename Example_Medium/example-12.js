const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function random_afora(number1){
    if (!checkerTestfuntion.checkDecimal(number1)) {
        return 'Parameter passed in must be a decimals';
      } else {
        return ((Math.random() * -number1 + Math.random()* number1));//from 0 to 1 multiple with parameter (a) result is from 0 to (a)
      }
}
module.exports = random_afora;