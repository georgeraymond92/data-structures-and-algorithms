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
    this.root = null;
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

    };
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

    };
    _walk(this.root);
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
      nodes.push(node.value);
    };
    _walk(this.root);
    return nodes;
  }

  breadthFirst(){
    let nodes = [this.root];
    let c = this.root;
    while(nodes.length){
      if(c.left){
        nodes.push(c.left);
      }
      if(c.right){
        nodes.push(c.right);
      }
      console.log(`print:${nodes.shift().value}`);
      c = nodes[0];
    }
  }

}

function fizzBuzzTree(tree) {
  let _walk = (node) => {
    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }
    if(node.value % 15 === 0){
      node.value = 'FizzBuzz';
    }
    if(node.value % 3 === 0){
      node.value = 'Fizz';
    }
    if(node.value % 5 === 0){
      node.value = 'Buzz';
    }

  };
  _walk(tree.root);
  return tree;
}

function findMax(tree){
  let max = 0;
  const _walk = (node) => {
    if(node.value > max){
      max = node.value;
    }
    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }
  };
  _walk(tree.root);
  return max;
}


module.exports = {BinaryTree, fizzBuzzTree, Node, findMax};