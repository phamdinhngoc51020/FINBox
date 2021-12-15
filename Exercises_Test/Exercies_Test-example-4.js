const countEvenNumber = require('../Exercises/example-4.js');
function checkExercise() {
    console.assert(countEvenNumber([4,5,6,7,8])==3, "Output value correct");
    console.assert(countEvenNumber([4,5,6,7,8])!=3, "(example 4)Output value is not correct" + countOldNumber([4,5,6,7,8]));

    console.assert(countEvenNumber([4.6,5,6,7,8])==3, "(example 4)input value is not correct");
}

checkExercise();