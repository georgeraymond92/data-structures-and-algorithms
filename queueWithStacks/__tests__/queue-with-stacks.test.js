'use strict';

const queue = require('../queue-with-stacks.js');

describe('testing the PseudoQueue class', () => {
  it('it should return value', () => {
    let testQueue = new queue();
    testQueue.enqueue('value');
    expect(testQueue.dequeue()).toEqual('value');
  });

  it('it should return pizza', () => {
    let testQueue = new queue();
    testQueue.enqueue('value');
    testQueue.enqueue('pizza');
    testQueue.dequeue();
    expect(testQueue.dequeue()).toEqual('pizza');

  });

  it('it should return taco', () => {
    let testQueue = new queue();
    testQueue.enqueue('value');
    testQueue.enqueue('pizza');
    testQueue.enqueue('taco');
    testQueue.enqueue('ham');
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.dequeue()).toEqual('taco');
  });

  it('it should return ham', () => {
    let testQueue = new queue();
    testQueue.enqueue('value');
    testQueue.enqueue('pizza');
    testQueue.enqueue('taco');
    testQueue.enqueue('ham');
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.dequeue()).toEqual('ham');
  });
});