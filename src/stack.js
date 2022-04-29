const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stask = [];
  }

  push(element) {
    this.stask.push(element);
  }

  pop() {
     if (this.stask.length>0) {
      return this.stask.pop();
     }
  }

  peek() {
    if (this.stask.length>0) {
      return this.stask[this.stask.length-1];
     }
  }
}

module.exports = {
  Stack,
};
