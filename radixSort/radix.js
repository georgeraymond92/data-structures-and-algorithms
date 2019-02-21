'use strict';

function getDigit(num,i) {
  return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(arr[i]))
  }
  return maxDigits;
}


// Big O
// the time complexity is a topic of debate, however the general opinion is that the complexity is O(nk)
// this could be equivilant to O(nlogn) if all of the numbers are unique.

function radixSort(arr){
  if(typeof(arr) !== "object"){
    return "not an array";
  }
  let maxDigitCount = mostDigits(arr);
  console.log(maxDigitCount);
  for(let i = 0; i < maxDigitCount; i++){
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let j = 0; j < arr.length; j++){
      digitBuckets[getDigit(arr[j],i)].push(arr[j]);
    }
    console.log(digitBuckets);
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

let arr = [22,45,333,7,12,8756];

console.log(radixSort(arr));


module.exports = { getDigit, digitCount , mostDigits ,  radixSort };

