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


  constructor()
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

        // if (node === null) return false;
        if (!node) return false;
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
    this.tree = this.removeNode(this.tree, data)
  }
  
  removeNode(node, data) {
    if (!node) {
      return null;
    } else if (data < node.data) {
    node.left = this.removeNode(node.left, data);
    return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = this.removeNode(node.right, minFromRight.data);
      return node;
    }
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

//   remove(data) {
//     this.tree = this.removeNode(data)
//   }

//   removeNode(data, posNode = this.tree) {
//    if (posNode===null)
//     return null;
    
//     if (data<posNode.data) {
//       posNode.left = this.removeNode(data,posNode.left)
//       return posNode;
//     }
//     else if (data>posNode.data) {
//       posNode.right = this.removeNode(data,posNode.right)
//       return posNode;
//     } else {
//       if(posNode.left===null && posNode.right===null) 
//         return null;
//       if (posNode.left===null) 
//         return posNode.right;
//       if (posNode.right===null) 
//         return posNode.left;
//       posNode.data = this.min(posNode.right);
//       posNode.right = this.removeNode(posNode.data,posNode.right)
//       return posNode;
//   }
// }


  // min(node=this.tree) {
  //   if (node.left===null) return node.data
  //   else return this.min(node.left)
  // }

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