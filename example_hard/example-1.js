const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function reverse_Text(input_text) {
    var ch;
 
    j = len = string_length(input_text) - 1;
    i = 0;
  
    while(i < j) {
       ch = input_text[j];
       input_text[j] = input_text[i];
       input_text[i] = ch;
       i++;
       j--;
    }

    return ch;
}

function string_length(input_text) {
    var i=0;
  
    while(input_text[i]!='\0')
       i++;
  
    return i;    
 }
  
module.exports = reverse_Text;