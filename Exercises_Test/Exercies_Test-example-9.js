const findSurplus = require('../Example/example-9.js');

function checkExercise() {
    console.assert(findSurplus(5,3)==2, "Output value correct");
    console.assert(findSurplus(5,3)!=2, "(example 9) Output value is not correct value"+findSurplus(5,3));
}

checkExercise();
