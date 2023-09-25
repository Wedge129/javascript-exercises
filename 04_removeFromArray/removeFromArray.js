const removeFromArray = function (array, whatToRemove) {
    const size=array.length;
    for(let i =0;i<size;i++){
        if(array[i]==whatToRemove){
            array.splice(i,1);
        }
      //  console.log(array[i]);
    }
    //console.log(array.length);
    return array;
};

//removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
