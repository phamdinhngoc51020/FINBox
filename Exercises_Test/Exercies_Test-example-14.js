const findNumber1ofArray = require('../Exercises/example-14.js');
function checkExercise() {
    console.assert(findNumber1ofArray(5,[2,5,4,5,1])==1, "Output value correct");
    console.assert(findNumber1ofArray(5,[2,5,4,5,1])!=1, "Output is not value correct example14 first appearance position "+findNumber1ofArray(5,[2,5,4,5,1]));

    console.assert(findNumber1ofArray(3,[2,5,4,5,1])!=-1, " example14 Output is not value correct not appear"+findNumber1ofArray(3,[2,5,4,5,1]));
}

checkExercise();