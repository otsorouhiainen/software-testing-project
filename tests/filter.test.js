import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter function', () => {
  it('should filter elements based on the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
      { 'user': 'jane', 'active': true },
      { 'user': 'john', 'active': false }
    ];

    const filteredUsers = filter(users, ({ active }) => active);
    expect(filteredUsers).to.deep.equal([
      { 'user': 'barney', 'active': true },
      { 'user': 'jane', 'active': true }
    ]);
  });

  it('should return an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];
    const filteredNumbers = filter(numbers, (value) => value > 5);
    expect(filteredNumbers).to.deep.equal([]);
  });

  it('should handle filtering based on index', () => {
    const letters = ['a', 'b', 'c', 'd', 'e'];
    const filteredLetters = filter(letters, (_, index) => index % 2 === 0);
    expect(filteredLetters).to.deep.equal(['a', 'c', 'e']);
  });

});
