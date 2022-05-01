const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.bintree = null;
  }
  root() {
    if (this.bintree === null) {
      return null;
    }
    return this.bintree;
  }

  add(data) {
    this.bintree = addData(this.bintree, data);
    function addData(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addData(node.left, value);
      } else {
        node.right = addData(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchData(this.bintree, data);
    function searchData(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data
        ? searchData(node.left, value)
        : searchData(node.right, value);
    }
  }

  find(data) {
    return searchData(this.bintree, data);
    function searchData(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      return value < node.data
        ? searchData(node.left, value)
        : searchData(node.right, value);
    }
  }

  remove(data) {
    return removeData(this.bintree, data);

    function removeData(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeData(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeData(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.bintree) {
      return;
    }
    let node = this.bintree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.bintree) {
      return;
    }
    let node = this.bintree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
