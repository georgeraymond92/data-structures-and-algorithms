const list = require('../linked-list');


describe('testing the linked list constructor', () => {
  test('this should check to see if the value paul is in the list', () => {
    list.insert('brian');
    list.insert('paul');
    let result = list.includes('paul');
    expect(result).toEqual(true);
  });

  test('this should check to see if the value brian is in the list', () => {
    let result = list.includes('brian');
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

  test('testing the k from end method' , () => {
    list.insert('peter');
    list.insert('bill');
    list.insert('joe');
    list.insert('sam');
    list.insert('sally');
    expect(list.kFromEnd(2)).toEqual('joe');
  });

  test('testing the k from end method' , () => {
    expect(list.kFromEnd(0)).toEqual('sally');
  });

  test('testing the k from end method' , () => {
    expect(list.kFromEnd(3)).toEqual('bill');
  });

  test('testing the k from end method' , () => {
    expect(list.kFromEnd(3)).toEqual('bill');
  });


});
