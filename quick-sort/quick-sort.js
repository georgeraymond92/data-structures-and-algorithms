'use strict';

function quickSort(arr){
  if(typeof(arr) !== 'object'){
    return 'not an array';
  }
  if(arr.length <= 1){
    return arr;
  }else {

    let pivot = arr.pop();
    let left = [];
    let right = [];
    let newArray = [];
    let length = arr.length;
  
    for(let i = 0; i < length; i++) {
      if(arr[i] <= pivot) {
        left.push(arr[i]);
      }else {
        right.push(arr[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));

  }
  
}

let unsort = [4,2,88,13,5,64,36,28];


console.log(quickSort(unsort));
console.log(quickSort('unsort'));

module.exports = quickSort;
