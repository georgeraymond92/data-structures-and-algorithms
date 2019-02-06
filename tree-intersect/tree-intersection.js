'use strict'

function intersection(treeA,treeB) {
  let seenValues = {};
  let duplicates = {};

  const _go = (node,cb) => {
    let current = node;
    if(current.left){
      _go(current.left,cb)
    }
    if(current.right){
      _go(current.right, cb);
    }
    cb(seenValues,current.value, duplicates);
  }

    function addToHash(obj, key) {
    obj[key] = true;
  }

  function hashContains(obj, key, dupes){
    if(obj[key]){
      dupes[key] = true;
    }
  }
  _go(treeA.root, addToHash);
  _go(treeB.root, hashContains);

  return duplicates;
}

class Node {
  constructor(value){
    this.value = value,
    this.left = null,
    this.right = null
  }
}
class BinaryTree {
  constructor(value){
    this.root = value;
  }
}


module.exports = {intersection, Node, BinaryTree};