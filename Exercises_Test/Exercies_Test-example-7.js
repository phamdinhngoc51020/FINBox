const sumOldNumber = require('../Exercises/example-7.js');

function checkExercise() {
    console.assert(sumOldNumber([4,5,6,7,8])===12, "Output value correct");
    console.assert(sumOldNumber([4,5,6,7,8])!==12, "(example 7) Output value is not correct result" +sumOldNumber([4,5,6,7,8]));
    console.assert(sumEvenNumber([4.6,5,6,7,8])==12, "(example 7)input value is not correct");
}

checkExercise();