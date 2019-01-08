'use strict';

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

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();

  }

  enqueue(value){
    this.stackOne.push(value);
  };

  dequeue(){
    let dequeueReturn = '';
    while(this.stackOne.top) {
      this.stackTwo.push(this.stackOne.pop());
    }
    dequeueReturn = this.stackTwo.pop();
    while(this.stackTwo.top){
      this.stackOne.push(this.stackTwo.pop());
    }
    return dequeueReturn;
  }

}


module.exports = PseudoQueue;

