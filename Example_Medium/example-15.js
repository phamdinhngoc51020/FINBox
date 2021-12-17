const checkerTestfuntion = require('../Example_function_dev/function_dev.js');
function count_Number(numbers) {
    var tong = 0;
    var sotachra;
    while(numbers!=0){
        sotachra = numbers % 10;
        tong += sotachra;
        numbers = parseInt(numbers/10);
    }
    return tong;
}

module.exports = count_Number;