const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.myRoot = null;
  }
  root() {
    return this.myRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.myRoot) {
      this.myRoot = newNode;
      return;
    }
    let currentNode = this.myRoot;

    while (currentNode) {
      if (newNode.data < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  traverseBFS(callback) {
    const queue = [this.myRoot];

    while (queue.length) {
      const node = queue.shift();
      callback(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  has(data) {
    let control = false;
    this.traverseBFS((node) => {
      if (node.data === data) {
        control = true;
      }
    })
    return control;
  }

  find(/* data */) {
    // let control = null;
    // this.traverseBFS((node) => {
    //   if (node.data === data) {
    //     control = data;
    //   }
    // })
    // return control;
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
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};