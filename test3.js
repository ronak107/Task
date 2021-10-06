// TEST -2
// Implement a JavaScript queue using an array

// Create a class and queue methods in that class

////////////////////
class Queue {
  constructor() {
    this.items = [];
  }

  //add element
  enqueue(element) {
    return this.items.push(element);
  }

  //removed element
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift(); //frist element is removed
      //   return this.items.pop(); // last element is removed
    }
  }

  //only last element view
  peek() {
    return this.items[this.items.length - 1];
  }

  //    checks if the input string is empty or not
  isEmpty() {
    return this.items.length == 0;
  }

  //return size
  size() {
    return this.items.length;
  }

  //all iteam clear(blank arry)
  clear() {
    this.items = [];
  }
}

let queue = new Queue();

queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(41);
queue.enqueue(81);
queue.enqueue(100);
queue.enqueue(123);
queue.enqueue(10);
queue.enqueue(1020);
queue.enqueue(1070);
queue.enqueue(52);

console.log(queue.items);

queue.dequeue();
// queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);
