const sort_ArraybCriteria = require('../Example_Medium/example-1.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');

function checkExercise() {
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(sort_ArraybCriteria([5,7,3,1,9],"tăng"),[1,3,5,7,9]),"Done");
    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(sort_ArraybCriteria([5,7,3,1,9],"giảm"),[9,7,5,3,1]),"Done");

    console.assert(checkerTestfuntion.checkIfTwoArraysAreEqual(sort_ArraybCriteria([5,7,3,1,9],"hhhh"),[9,7,5,3,1]),"Example-1 Medium wrong condition");
}

checkExercise();