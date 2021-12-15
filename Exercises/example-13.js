function plateislandArray(arraynumber) {
    var temp;
    for (var i = 0; i < arraynumber.length/2; i++) {
        temp = arraynumber[i];
        arraynumber[i] = arraynumber[arraynumber.length-i-1];
        arraynumber[arraynumber.length-i-1] = temp;
    }

    return arraynumber;
}

module.exports = plateislandArray;