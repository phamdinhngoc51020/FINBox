const countMoney = require('../Example_Medium/example-13.js');
function checkExercise() {
    console.assert(countMoney(5,6)==70, "Done");
    console.assert(countMoney(5,8)==150, "Done");
    console.assert(countMoney(0,9)==200, "Done");
}
checkExercise();