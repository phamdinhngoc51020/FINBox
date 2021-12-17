const checkNumber = require('../Example/example-3.js');
function checkExercise() {
    console.assert(checkNumber(4,6)=="Cùng chẵn","Output value correct");
    console.assert(checkNumber(5,6)=="1 chẵn 1 lẻ","Output value correct");
    console.assert(checkNumber(5,7)=="Cùng lẻ","Output value correct");

    console.assert(checkNumber(4,6)=="Cùng lẻ","(example 3)This is 2 the same same chment");
    console.assert(checkNumber(4,6)=="1 chẵn 1 lẻ","(example 3)This is 2 the same same chment");
}

checkExercise()