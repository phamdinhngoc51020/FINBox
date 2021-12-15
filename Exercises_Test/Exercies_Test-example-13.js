const plateislandArray = require('../Exercises/example-13.js');
const checker = require('../Example_function_dev/function_dev.js');


function checkExercise() {
    console.assert(checker.checkIfTwoArraysAreEqual(plateislandArray([3,4,5,6]),[6,5,4,3]), "Output value correct");
    console.assert(!checker.checkIfTwoArraysAreEqual(plateislandArray([3,4,5,6]),[6,5,4,3]), " (example-13) Output value is not correct array after swap là " + plateislandArray([3,4,5,6]) );
}

checkExercise();