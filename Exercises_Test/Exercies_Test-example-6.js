const sumEvenNumber = require('../Example/example-6.js');

function checkExercise() {
    console.assert(sumEvenNumber([4,5,6,7,8])==18, "Output value correct");
    console.assert(sumEvenNumber([4,5,6,7,8])!=18, "(example 6)Output value is not correct"+sumEvenNumber([4,5,6,7,8]));

    console.assert(sumEvenNumber([4.6,5,6,7,8])==18, "(example 6)input value is not correct");
}

checkExercise();