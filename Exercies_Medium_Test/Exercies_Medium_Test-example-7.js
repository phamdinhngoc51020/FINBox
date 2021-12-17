const getElementonstart_end = require('../Example_Medium/example-7.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(getElementonstart_end([1,2,3,4,5],2,4),[3,4,5]),"Done");
}

checkExercise();