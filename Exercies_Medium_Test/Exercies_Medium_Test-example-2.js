const concatenateTwoArrays = require('../Example_Medium/example-2.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(concatenateTwoArrays([1,2,3],[4,5,6],[]),[1,2,3,4,5,6]),"Done");
}

checkExercise();