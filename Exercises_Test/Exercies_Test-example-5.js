const countOldNumber = require('../Exercises/example-5.js');

function checkExercise() {
    console.assert(countOldNumber([4,5,6,7,8])==2, "Output value correct");
    console.assert(countOldNumber([4,5,6,7,8])!=2, "(example 5) Output value is not correct" + countOldNumber([4,5,6,7,8]));

    console.assert(countOldNumber([4.6,5,6,7,8])==2, "(example 5) input value is not correct");
}

checkExercise();