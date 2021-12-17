function calculatefactorial_number(n){
    var result = 1;
    for(var i = 1 ; i <=n; i++){
        result = result * i;
    }

    return result;
}

module.exports = calculatefactorial_number;