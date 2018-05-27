'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  // Push
  push(element) {
    this[this.length++] = element;
  }

  // Pop
  pop() {
    if (this.length > 0) {
      delete this[this.length-1];
      this.length--;
    }
  }

  // For Each
  forEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback Required'); 
    }
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i);
    }
  }

  // Map
  map(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback Required'); 
    }

    let result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  // Reduce
  reduce(callback, sum) {
    var i = 0;
    if (typeof sum === 'undefined') {
      i = 1;
      sum = this[0];
    }
    for (i; i < this.length; i++) {
      if (typeof this[i] !== 'number') {
        return undefined;
      }
      sum = callback(sum, this[i], i);
    }
    return sum;
  }

}

module.exports = List;
