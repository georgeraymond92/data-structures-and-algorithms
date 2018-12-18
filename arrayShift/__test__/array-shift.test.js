"use strict"

const arrayShift = require("../array-shift.js");


describe('testing insertShiftArray function', () => {
    test('it should insert the value passed in to the center of the array', () => {
      expect(arrayShift([1,2,3,4,5],2)).toEqual([ 1, 2, 2, 3, 4, 5 ]);
    });

    test('it should return not an array', () => {
        expect(arrayShift("string",2)).toEqual('not an array');
    });

    test('it should return not an array', () => {
        expect(arrayShift([1,2,3,4,5],{ "bob": "is name", "age": "is old"})).toEqual([ 1, 2, { bob: 'is name', age: 'is old' }, 3, 4, 5 ]);
    });
});