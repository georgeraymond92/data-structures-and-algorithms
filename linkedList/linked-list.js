'use strict';

const Node = require('./class/Node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    let node = new Node(value);
    if ( ! this.head ) {
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      // Do some work
      current = current.next;
    }
    current.next = node;
  }
  includes(value) {
    let current = this.head;
    while(current.next){
      if(current.node === value){
        return true;
      }
      current = current.next;
    }
    if(current.node === value && ! current.next){
      return true;
    }else if( ! current.next && current.node !== value){
      return false;
    }
    
  }
  list() {
    let current = this.head;
    while(current.next) {
      console.log(current.node);
      current = current.next;
    }
    console.log(current.node);
  }
  insertBefore(newVal,val){
    let node = new Node(newVal);
    let current = this.head;
    while(current.next){
      if( current.next.node === val){
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;

    }
    current = current.next;
  }

  insertAfter(newVal,val){
    let node = new Node(newVal);
    let current = this.head;
    while(current.next){
      if (current.node === val){
        node.next =current.next;
        current.next = node;
      }
      current = current.next;
    }
    current = current.next;
  }
}

let list = new LinkedList;


module.exports = list;
