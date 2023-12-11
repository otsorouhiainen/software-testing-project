import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter', () => {
  it('filters an array based on a predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (value) => value % 2 === 0;
    const expected = [2, 4];
    expect(filter(array, predicate)).to.deep.equal(expected);
  });

  it('returns an empty array when all elements fail the predicate', () => {
    const array = [1, 3, 5, 7, 9];
    const predicate = (value) => value % 2 === 0;
    const expected = [];
    expect(filter(array, predicate)).to.deep.equal(expected);
  });

  it('returns the original array when all elements pass the predicate', () => {
    const array = [2, 4, 6, 8, 10];
    const predicate = (value) => value % 2 === 0;
    const expected = [...array];
    expect(filter(array, predicate)).to.deep.equal(expected);
  });

  it('does not mutate the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (value) => value % 2 === 0;
    const copy = [...array];
    filter(array, predicate);
    expect(array).to.deep.equal(copy);
  });
});
