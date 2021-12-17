const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function random0fora(number1){
    if (!checkerTestfuntion.checkDecimal(number1)) {
        return 'Parameter passed in must be a decimals';
      } else {
        return ((Math.random() * number1));//from 0 to 1 multiple with parameter (a) result is from 0 to (a)
      }
}
module.exports = random0fora;