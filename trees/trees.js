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

      if(node.left){
        _walk(node.left);
      }
      nodes.push(node.value);
      if(node.right){
        _walk(node.right);
      }

    }
    _walk(this.root);
    return nodes;
  }

  preOrder() {
    let nodes = [];
    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }

    }
    _walk(this.root);
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left){
        _walk(node.left);

      if(node.right){
        _walk(node.right);
      }
    }
    nodes.push(node.value);
    }
    _walk(this.root);
    return nodes;
  }

}

function fizzBuzzTree(tree) {
  let _walk = (node) => {
    if(node.left){
      _walk(node.left)
    }
    if(node.right){
      _walk(node.right)
    }
    if(node.value % 15 === 0){
      node.value = "FizzBuzz";
    }
    if(node.value % 3 === 0){
      node.value = "Fizz";
    }
    if(node.value % 5 === 0){
      node.value = "Buzz";
    }

  }
  _walk(tree.root);
  return tree;
}



module.exports = {BinaryTree, fizzBuzzTree, Node};