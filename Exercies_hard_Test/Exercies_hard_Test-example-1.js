const reverse_Text = require('../example_hard/example-1.js');
const checkerTestfuntion = require('../Example_function_dev/function_dev.js');

function checkExercise() {
   console.assert(reverse_Text("Hoang THi Van")==="gnaoH iHT naV","done"+ reverse_Text("Hoang THi Van"));
   console.assert(reverse_Text("Van")=="Van",reverse_Text("Van"));
}

checkExercise();