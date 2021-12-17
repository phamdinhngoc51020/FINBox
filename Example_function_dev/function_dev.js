function checkDecimal(a) {
    if (a % 1 > -1 && a % 1 < 1) {
        return true;
    }
    else
        return false;
}

function checkArrayDecimal(arrayNumber) {
    for (var i = 0; i < arrayNumber.length; i++) {
        if (!checkArrayDecimal(arrayNumber[i]))
            return true;
        else
            return false;
    }
}

function checkIfTwoArraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}


function checkTwoArrayLengt(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false
    else
        return true;
}

function checkStart_End(start,end){
    if(start>=end)
        return false;
    return true;
}

module.exports = {
    checkDecimal: checkDecimal,
    checkIfTwoArraysAreEqual: checkIfTwoArraysAreEqual,
    checkArrayDecimal: checkArrayDecimal,
    checkTwoArrayLengt: checkTwoArrayLengt,
    checkStart_End:checkStart_End,
}