const print_Number_Fibonacci = require('../Example_Medium/example-16.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');

function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(print_Number_Fibonacci(6),[0,1,1,2,3,5]),"Done"+print_Number_Fibonacci(6) );
    
}
checkExercise();