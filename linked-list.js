import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    this.listHead = new Node(value, this.listHead);
  }

  append(value) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let current = this.listHead;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value, null);
    }
  }

  size() {
    let size = 0;
    let current = this.listHead;

    if (this.listHead === null) {
      return 0;
    } else {
      size = 1;
    }

    while (current.next) {
      current = current.next;
      size += 1;
    }
    return size;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let current = this.listHead;

    if (this.listHead === null) return null;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (this.listHead === null) {
      return null;
    }

    let current = this.listHead;

    for (let i = 0; i < index; i++) {
      if (current === null) {
        return null;
      } else {
        current = current.next;
      }
    }
    return current;
  }

  pop() {
    let current = this.listHead;
    let previous = null;

    if (this.listHead === null) return;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    current = null;
    previous.next = null;
  }

  contains(val) {
    let current = this.listHead;

    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(val) {
    let current = this.listHead;
    let index = 0;

    while (current) {
      if (current.value === val) {
        return index;
      }
      index += 1;
      current = current.next;
    }

    return null;
  }

  toString() {
    let current = this.listHead;
    let string = "";

    if (!current) return null;

    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }

    string += "null";

    return string;
  }

  insertAt(val, index) {
    let current = this.listHead;
    let previous = null;

    for (let i = 0; i < index; i++) {
      if (current === null || index === 0) {
        this.prepend(val);
      } else {
        previous = current;
        current = current.next;
      }
    }

    previous.next = new Node(val, current);
  }

  removeAt(index) {
    let current = this.listHead;
    let previous = null;

    if (current === null) {
      return null;
    } else if (index === 0) {
      this.listHead = this.listHead.next;
      return;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;

        if (!current) {
          return null;
        }
      }
      previous.next = current.next;
    }
  }
}
