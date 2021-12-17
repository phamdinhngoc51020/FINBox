function findNumber1ofArray(a, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            return i;
        }
    }
    return -1;
}


module.exports = findNumber1ofArray;