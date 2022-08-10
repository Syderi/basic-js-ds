const { NotImplementedError } = require('../extensions/index.js');

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
    this.stack = [];
    // this.length = 0;
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.stack.push(element);
    // console.log(this.stack)
    // this.length++;
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
     return this.stack.pop();
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let len = this.stack.length - 1;
    return this.stack[len];
  }
}

module.exports = {
  Stack
};
