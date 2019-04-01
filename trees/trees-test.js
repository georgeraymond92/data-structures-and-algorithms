'use strict';


const Tree = require('./trees');

let tree = new Tree.BinaryTree();

let a = new Tree.Node(3);
let b = new Tree.Node(15);
let c = new Tree.Node(4);
let d = new Tree.Node(1);
let e = new Tree.Node(10);
let f = new Tree.Node(4);

a.left = b;
a.right= c;
b.left = d;
b.right = e;
c.left = f;


tree.root = a;

console.log(tree.inOrder());
// Tree.fizzBuzzTree(tree);
console.log(tree.inOrder());
// tree.breadthFirst();
console.log(`tree max: ${Tree.findMax(tree)}`);