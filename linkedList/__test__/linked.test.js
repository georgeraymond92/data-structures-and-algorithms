const list = require('../linked-list');

describe('testing the linked list constructor', () => {
  test('it should create a new list with a head of null', () => {
    expect(list.head).toEqual(null);
  });
});
