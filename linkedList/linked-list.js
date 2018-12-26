'use strict';

class Node {
  constructor(value){
    this.node =value;
    this.next = null;
  }
}

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
        console.log('true');
        break;
      }
      current = current.next;
    }
    if(current.node === value && ! current.next){
      console.log('true');
    }else if( ! current.next && current.node !== value){
      console.log('false');
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
}

let list = new LinkedList;
list.insert('George');
list.insert('yeti');
list.insert('peter');
list.insert('chill');
list.insert('buns');
list.insert('cheese');
// list.includes('grape');
// list.includes('yeti');
// list.includes('grape');
// list.includes('peter');
// list.includes('big taco');
// list.includes('cheese');
// list.includes('buns');
list.list();

// console.log(util.inspect(list,{depth:10}));