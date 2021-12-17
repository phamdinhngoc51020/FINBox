
function findoffminArray(arraynumber){
    var min = arraynumber[0];
    for(var i = 1; i < arraynumber.length; i++){
        if(min>=arraynumber[i])
            min = arraynumber[i];
    }
    return min;
}

module.exports = findoffminArray;