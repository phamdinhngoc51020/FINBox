const divideTwoArray = require('../Example_Medium/example-6.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(divideTwoArray([8,9,10],[2,3,5]),[4,3,2]),"Done");
}

checkExercise();