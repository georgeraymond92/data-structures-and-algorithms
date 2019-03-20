'use strict';

const Node = require('./class/Node');

class linkedlist {
  constructor(value){
    this.head = null;
  }

  insert(value){
    let node = new Node(value)


    if( ! this.head ){
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next

    }

    current.next = node;

  }

  log() {
    let current = this.head;
    while(current.next){
      console.log(current.node);
      current = current.next;
    }
    console.log(current.node)
    return;
  }



}

let list = new linkedlist('pizza');
list.insert('pie');
list.insert('cheese');
list.insert('peperoni');

list.log();

