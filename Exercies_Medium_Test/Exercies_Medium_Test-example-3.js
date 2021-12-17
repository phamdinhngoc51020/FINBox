const sumTwoArray = require('../Example_Medium/example-3.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(sumTwoArray([3,5,2],[2,3,8]),[5,8,10]),"done");
}
checkExercise();