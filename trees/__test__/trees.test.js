'use strict';
const Tree = require('../trees');

describe('testing trees.js', () => {
  it('it should list the nodes in order', () => {
    const tree = new Tree.BinaryTree();
    let a = new Tree.Node('3');
    let b = new Tree.Node('15');
    let c = new Tree.Node('c');
    let d = new Tree.Node('d');
    let e = new Tree.Node('5');
    let f = new Tree.Node('f');

    a.left = b;
    a.right= c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;

    expect(tree.inOrder()).toEqual(['d', '15', '5', '3', 'f', 'c']);

  });

  it('it should list the nodes in preOrder', () => {
    const tree = new Tree.BinaryTree();
    let a = new Tree.Node('3');
    let b = new Tree.Node('15');
    let c = new Tree.Node('c');
    let d = new Tree.Node('d');
    let e = new Tree.Node('5');
    let f = new Tree.Node('f');

    a.left = b;
    a.right= c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;

    expect(tree.preOrder()).toEqual(['3', '15', 'd', '5', 'c', 'f']);

  });

  it('it should list the nodes in after fizzBuzz', () => {
    const tree = new Tree.BinaryTree();
    let a = new Tree.Node('3');
    let b = new Tree.Node('15');
    let c = new Tree.Node('c');
    let d = new Tree.Node('d');
    let e = new Tree.Node('5');
    let f = new Tree.Node('f');

    a.left = b;
    a.right= c;
    c.left = f;
    b.left = d;
    b.right = e;
    tree.root = a;
    Tree.fizzBuzzTree(tree);

    expect(tree.preOrder()).toEqual(['Fizz', 'FizzBuzz', 'd', 'Buzz', 'c', 'f']);

  });

});
