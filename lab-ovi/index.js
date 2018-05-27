'use strict';

const List = require('./lib/List.js');

let list = new List();

console.log(`length: ${list.length}`);


// add an element
list.push('ovi');
console.log(`updated length: ${list.length}, ${list[0]} \n`);

// remove the last element
list.pop();
list.pop();
list.pop();
console.log(`updated length: ${list.length}, ${list[0]} \n`);

// map
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(10);
list.map(x => console.log(x));
console.log(`updated length: ${list.length} \n`);

// for each
list.forEach((element) => {
  console.log(`element: ${element}`);
});

// reduce
console.log(list.reduce((total, currentVal) => (total+ currentVal)));
