const factorial_numbers = require('../Exercises/example-2.js');

function checkExercise() {
    console.assert(factorial_numbers(2,3)==8, "Output value correct");
    console.assert(factorial_numbers(2,3)!=8, "(example 2)Output value is not correct result " + factorial_numbers(2,3));
    console.assert(factorial_numbers(2.2,3)==8, "(example 2)input value has a number not an integer");
}

checkExercise()
