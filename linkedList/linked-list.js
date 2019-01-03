'use strict';
const util = require('util');
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
    return true;
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


function zipList(list1,list2) {
  let zippedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  zippedList.head = current1;
  current1 = current1.next;
  zippedList.next = new Node(list2.node);
  zippedList = zippedList.next;
  current1 = current1.next;
  current2 = current2.next;
  
  while(current1.next && current2.next){
    zippedList.next = current1;
    current1 = current1.next;
    zippedList = zippedList.next;
    zippedList.next = current2;
    current2 = current2.next;
    zippedList = zippedList.next;
  }
  if(current1.next){
    zippedList.next = current1;
  }else{
    zippedList.next = current2;
  }
  return zippedList;
}

let list = new LinkedList;
let list2 = new LinkedList;

list.insert('taco');
list2.insert('cheese');
list.insert('hello');
list.insert('this');
list.insert('there');
list.insert('green');

list2.insert('very');
list2.insert('spider');
list2.insert('dog');
list2.insert('pan');

// zipList(list, list2);
// console.log(util.inspect(zipList(list, list2)));

module.exports = list;
