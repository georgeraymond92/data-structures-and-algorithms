'use strict';

const binarySearch = require('../binary_search.js');

describe('testing binary search function', () => {
    
    test('it should return the index of the given element in the given array', () => {
        expect(binarySearch([2,5,7,10,23], 23)).toEqual(4)
    });

    test('should return an integer', () => {
        expect(binarySearch([1,4,67,89,100,230], 4)).toEqual(1)
    });


});