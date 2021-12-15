const findoffminArray = require('../Exercises/example-11.js');

function checkExercise() {
    console.assert(findoffminArray([3,5,2,9,6])==2, "Output value correct");
    console.assert(findoffminArray([3,5,2,9,6])!=2, "(example-11)Output value is not correct smallest value "+ findoffminArray([3,5,2,9,6]));
}

checkExercise();