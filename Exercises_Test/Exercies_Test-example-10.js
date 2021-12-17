const FindMaxofArray = require('../Example/example-10.js');

function checkExercise() {
    console.assert(FindMaxofArray([3,5,2,9,6])==9, "Output value correct");
    console.assert(FindMaxofArray([3,5,2,9,6])!=9, "(example-10)Output value is not correct  greatest value " + FindMaxofArray([3,5,2,9,6]));
}

checkExercise();
