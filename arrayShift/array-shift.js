"use strict"

const insertShiftArray = (array,value) => {
    if(Array.isArray(array) === false){
        return "not an array";
    }

    let newArr = [];

    for(let i = 0; i <= array.length-1;i++){
        newArr[i] = array[i];
    }

    let center = Math.ceil(newArr.length/2 - 1);
    for(let i = newArr.length-1; i >= center; i--){
        newArr[i+1] = newArr[i];
    }
    newArr[center] = value;
    return newArr;
}

module.exports = insertShiftArray;