function averagevalue(arraynumber) {
    var sum = 0;
    for (var i = 0; i < arraynumber.length; i++) {
        sum += arraynumber[i];
    }

    return sum/arraynumber.length;
}

module.exports = averagevalue;
