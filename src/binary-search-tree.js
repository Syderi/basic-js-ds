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



  find(data) {

    let node = this.tree;
    while (node !== null) {
      if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null
}



  remove(data) {
    throw new NotImplementedError('Not implemented');

  }

  removeNode(node, data) {
    throw new NotImplementedError('Not implemented');

  }


    min() {
      if(!this.tree){
        return null;
    };

    let node = this.tree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }


  max(tree = this.tree) {
    if(!this.tree){
      return null;
  };

  let node = this.tree;
  while (node.right) {
    node = node.right;
  }
  return node.data;
  }
}

module.exports = {
  BinarySearchTree
};