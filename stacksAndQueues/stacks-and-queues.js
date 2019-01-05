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
  }
  dequeue() {
    // removes the first value of the queue
  }
  
}

class Stack {
  constructor() {
    this.s = new Array();
    this.head = null
  }
  peek() {
    return this.head
  }
  push(value){
    this.head = value
    this.next = peek();
  }
  pop(){
    // do something
  }

  
}
