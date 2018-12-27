const list = require('../linked-list');

describe('testing the linked list constructor', () => {
  
  test('it should create a new list with a head of null', () => {
    expect(list.head).toEqual(null);
  });

  test('this should check to see if the value paul', () => {
    list.insert('brian');
    list.insert('paul');
    let result = list.includes('paul');
    expect(result).toEqual(true);
  });

  test('checking to see if the includes method works', () => {
    list.insert('taco');
    let result = list.includes('taco');
    expect(result).toEqual(true);
  });

  test('testing to see if the list method works', () => {
    list.insert('taco');
    list.insert('fajitas');
    list.insert('tamales');
    let result = list.list();
    expect(result).toEqual(true);
  });



});
