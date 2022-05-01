const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    if (this.head == null) {
      return;
    }
    return this.head;
  }

  enqueue(value) {
    let new_node = new ListNode(value);
    if (this.head == null) {
      this.head = new_node;
      return;
    }
    new_node.next = null;
    let last = this.head;
    while (last.next != null) {
      last = last.next;
    }
    last.next = new_node;
    return;
  }

  dequeue() {
    if (this.head == null) {
      return;
    }
    let next = this.head.next;
    let value = this.head.value;
    this.head = next;
    next = null;
    return value;
  }
}

module.exports = {
  Queue,
};
