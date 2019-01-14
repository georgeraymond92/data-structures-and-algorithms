'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null
  }

  inOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(this.left){
        _walk(this.left);
      }
      if(this.right){
        _walk(this.right);
      }
      nodes.push(this.value);
    }
    _walk(this.root);
    return nodes
  }


  
  preOrder() {
    let nodes = [];
    let _walk = (node) => {
      nodes.push(this.value);
      if(this.left){
        _walk(this.left);
      }
      if(this.right){
        _walk(this.right);
      }

    }
    _walk(this.root);
    return nodes
  }


  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(this.left){
        _walk(this.left);
      }
      nodes.push(this.value);
      if(this.right){
        _walk(this.right);
      }
    }
    _walk(this.root);
    return nodes
  }



}