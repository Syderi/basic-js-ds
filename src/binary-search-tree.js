const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  // class Node {
  //   constructor(data) {
  //     this.data = data;
  //     this.left = null;
  //     this.right = null;
  //   }
  // }
  
  // module.exports = {
  //   Node
  // };

  constructor(data)
    {
        this.tree = null
      }


  root() {
    return this.tree;
  }

  add(data) {
  
    let newNode = new Node(data);
    if (this.tree === null) {
        this.tree = newNode;
    } else {
        this.insertNode(this.tree, newNode); // helper method below
    }
};

    insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data) {
        return this.hasNode(this.tree, data);  
  }

      hasNode(node, newNode) {

        if (node === null) return false;
        if (node.data === newNode) return true;

        if (newNode < node.data) {
         return this.hasNode(node.left, newNode);
        }
        if (newNode > node.data) {
         return this.hasNode(node.right, newNode);
        }

  }






  find(node, data) {

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (node.right === null) {
      return node.data
    } else {
      return this._findMaxNode(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};