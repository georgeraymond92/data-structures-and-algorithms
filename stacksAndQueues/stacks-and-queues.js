'use strict';


class Node {

  constructor(value){
    this.value = value;
    this.next = null;
  }

}


class Stack {

  constructor(){
    this.top = null;
  }

  push(value){

    let node = new Node(value);

    if (!this.top){
      this.top = node;
      return;
    }

    node.next = this.top;
    this.top = node;

  }

  pop(){
    
    if (this.top === null) {

      throw new Error('The Stack is EMPTY!');

    }

    let nodePass = this.top;
    this.top = this.top.next;
    return nodePass.value;

  }

  peek(){

    if (this.top === null) {

      throw new Error('NOTHING IN STACK!!');

    }

    return this.top.value;

  }
}

class Queue {

  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value) {

    const node = new Node(value);
    
    if(!this.front){

      this.front = node;
      this.back = node;
      return;

    }

    this.back.next = node;
    this.back = node;

  }

  dequeue() {

    if(this.front === null){
      throw new Error('Nothing left?!');
    }

    const dataPass = this.front.value;

    if (!this.front.next){

      this.front = null;
      this.back = null;

    } else {

      this.front = this.front.next;

    }

    return dataPass;
    
  }

  peek() {

    if(this.front === null){
      throw new Error('Queue Empty');
    }

    return this.front.value;

  }
}

module.exports = Node, Stack, Queue;