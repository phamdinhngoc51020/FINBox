const averagevalue = require('../Exercises/example-12.js');

function checkExercise() {
    console.assert(averagevalue([3,4,5])==4, "Output value correct");
    console.assert(averagevalue([3,4,5])!=4, " (example-12) Output value is not correct mean value is " + averagevalue([3,4,5]));
}

checkExercise();