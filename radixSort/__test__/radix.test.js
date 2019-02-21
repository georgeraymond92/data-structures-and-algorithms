'use strict';


const sort = require('../radix').radixSort;

describe('testing the quick sort function', () => {
  test('it should sort the list', () => {
    let array = [1,5,7,3,8,88,888,9,2345,7675,4];
    expect(sort(array)).toEqual([1,3,4,5,7,8,9,88,888,2345,7675]);
  })
  test('it should sort the list', () => {
    let array = [66,5,13,22];
    expect(sort(array)).toEqual([5,13,22,66]);
  })
  test('it should not alter the list', () => {
    let array = [1,2,3,4,5,6,7,8,9];
    expect(sort(array)).toEqual([1,2,3,4,5,6,7,8,9]);
  })
  test('it should be able to handle a list with a length of 1', () => {
    let array = [10];
    expect(sort(array)).toEqual([10]);
  })
  test('it should return an err', () => {
    expect(sort("string")).toEqual('not an array');
  })
})