const coreTwoArray = require('../Example_Medium/example-5.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(coreTwoArray([1,2,3],[4,5,6]),[4,10,18]),"Done");

    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(coreTwoArray([1,2,3],[4,5,6]),[4,10,18]),"Done");
}

checkExercise();