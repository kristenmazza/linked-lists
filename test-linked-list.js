import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.prepend(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list); // LinkedList { listHead: Node { value: 2, next: Node { value: 3, next: [Node] } } }
console.log(list.size()); // 4
console.log(list.head()); // Node { value: 2, next: Node { value: 3, next: Node { value: 4, next: [Node] } } }
console.log(list.tail()); // Node { value: 5, next: null }
console.log(list.at(2)); // Node { value: 4, next: Node { value: 5, next: null } }
list.pop(); // Removes last node (value: 5)
console.log(list.contains(3)); // true
console.log(list.contains(6)); // false
console.log(list.find(3)); // 1
console.log(list.toString()); // { 2 } -> { 3 } -> { 4 } -> null
list.insertAt(10, 2); // Inserts value 10 at index 2
list.removeAt(1); // Removes node at index 1 (value: 3)
console.log(list); // LinkedList { listHead: Node { value: 2, next: Node { value: 10, next: [Node] } } }
