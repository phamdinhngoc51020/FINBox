function sort_ArraybCriteria(arrayNumber, criteria){
    var temp;
    if(criteria!=="tăng"&&criteria!=="giảm")
        return false;
    if(criteria==="giảm")
    {
        for(var i =0; i < arrayNumber.length-1;i++){
            for(var j = i+1; j< arrayNumber.length; j++){
                if(arrayNumber[i]<arrayNumber[j]){
                    temp = arrayNumber[i];
                    arrayNumber[i] = arrayNumber[j];
                    arrayNumber[j] = temp;
                }
            }
        }
    }

    if(criteria==="tăng")
    {
        for(var i =0; i < arrayNumber.length-1;i++){
            for(var j = i+1; j< arrayNumber.length; j++){
                if(arrayNumber[i]>arrayNumber[j]){
                    temp = arrayNumber[i];
                    arrayNumber[i] = arrayNumber[j];
                    arrayNumber[j] = temp;
                }
            }
        }
    }
    return arrayNumber;
}

module.exports = sort_ArraybCriteria;