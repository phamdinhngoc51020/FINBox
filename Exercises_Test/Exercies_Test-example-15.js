const calculatefactorial_number = require('../Exercises/example-15.js');
function checkExercise() {
    console.assert(calculatefactorial_number(5)==120, "Output value correct");
    console.assert(calculatefactorial_number(5)!=120, "Output is not value correct example-15 gai thua cua 5 là "+calculatefactorial_number(5));

}

checkExercise();