function concatenateTwoArrays(Array1,Array2,Array3){
    for(var i = 0; i < Array1.length + Array2.length; i++){
        if(i<Array1.length)
            Array3[i] = Array1[i]
        else
            Array3[i] = Array2[i-Array1.length];
    }
    return Array3;
}

module.exports = concatenateTwoArrays;