'use strict';

const List = require('../../lib/List.js');

describe('Test for the List methods', () => {

  var list = new List();

  // constructor tests
  it('Test the constructor has a length of 0', () => {
    expect(list.length).toBe(0);
  });

  // push tests
  it('Test the Push()', () => {
    list.push(77);
    expect(list[0]).toBe(77);
  });

  it('Test the Push() after a Pop()', () => {
    list.pop();
    list.push(77);
    list.pop();
    list.push(77);
    expect(list[0]).toBe(77);
  });

  it('Test that the Push() added 1 element to our List Length', () => {
    expect(list.length).toBe(1);
  });


  // pop tests
  it('Test the Pop()', () => {
    list.pop();
    expect(list[0]).toBe(undefined);
  });

  it('Test the Pop() to make sure the length is not below 0', () => {
    list.push(1);
    list.push(2);
    list.pop();
    list.pop();
    list.pop();
    expect(list[0]).toBe(undefined);
  });

  it('Test that the Pop() removed 1 element to our List Length', () => {
    expect(list.length).toBe(0);
  });


  // for each tests
  it('Test the ForEach() with an invalid callback ', () => {
    expect(() => {list.forEach()}).toThrow('Callback Required');
  });

  // map tests
  it('Test the Map() results and callback works', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.map((x, index) => expect(list[index]).toBe(x));
  });

  it('Test the Map() with an invalid callback ', () => {
     expect(() => {list.map()}).toThrow('Callback Required');
  });

  it('Test that the Map() has a length of 5 after Pushing 5 new elements', () => {
    expect(list.length).toBe(5);
  });

  // reduce tests
  it('Test the Reduce()', () => {
    var total = list.reduce((total, currentVal) => (total+currentVal));
    expect(total).toBe(15);
  });

  it('Test the Reduce()', () => {
    list.push('o');
    var total = list.reduce((total, currentVal) => (total+currentVal));
    expect(total).toBe(undefined);
  });

  it('Test that the List still has a length of 5 after calling the Reduce()', () => {
    expect(list.length).toBe(6);
  });

});
