const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
const changLocation3Nums = require('../Exercises/example-1.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(changLocation3Nums(5, 6, 7), ([7, 5, 6])), "Output value correct");
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(changLocation3Nums(5, 6, 7), ([7, 4, 2])), "(example 1) Error 'Output value is not correct' ");
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(changLocation3Nums(5.6, 6, 7), ([7, 4, 2])), "(example 1) Error 'input value has a number not an integer' ");
}

checkExercise();