const checkNumberelement = require('../Example/example-8.js');
const checker = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkNumberelement(5), "Output value correct");
    console.assert(!checkNumberelement(7), "(example 8) Output value is not correct Number is Prime "+7);

}

checkExercise();