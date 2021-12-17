const apartTwoArray = require('../Example_Medium/example-4.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(apartTwoArray([3,5,2],[2,3,8]),[1,2,-6]),"done");

}
checkExercise();