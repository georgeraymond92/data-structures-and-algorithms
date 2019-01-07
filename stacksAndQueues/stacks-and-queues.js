'use strict';

class Queue {
  constructor() {
    this.q = new Array();
    this.front = null;
  }

  peek() {
    return this.front;
  }

  enqueue(value) {
    // puts value on the rear of the queue
    this.q.push(value)
  }
  dequeue() {
    // removes the first value of the queue
    this.q.shift()
  }
  
}

class Stack {
  constructor() {
    this.stack = new Array();
    this.top = null;
  }

  push(value) {
    this.stack.unshift(value);
    this.top = value;
  }

  pop() {
    let value = this.stack.shift();
    this.top = this.stack[0];
    return value;
  }

  peek() {
    return this.top;
  }


}

module.exports = Stack, Queue;