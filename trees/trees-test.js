'use strict';


const Tree = require('./trees');

let tree = new Tree.BinaryTree();

let a = new Tree.Node('3');
let b = new Tree.Node('15');
let c = new Tree.Node('c');
let d = new Tree.Node('d');
let e = new Tree.Node('5');
let f = new Tree.Node('f');

a.left = b;
a.right= c;
b.left = d;
b.right = e;
c.left = f;


tree.root = a;

console.log(tree.inOrder());
Tree.fizzBuzzTree(tree);
console.log(tree.inOrder());
tree.breadthFirst();