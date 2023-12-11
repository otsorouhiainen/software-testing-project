import { expect } from 'chai'; 
import isEmpty from '../src/isEmpty.js'; 
describe('isEmpty function', () => {
  it('should return true for empty values', () => {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty(1)).to.be.true;
    expect(isEmpty([])).to.be.true;
    expect(isEmpty('')).to.be.true;
    expect(isEmpty(new Map())).to.be.true;
    expect(isEmpty(new Set())).to.be.true;
    expect(isEmpty({})).to.be.true;
    expect(isEmpty(Object.create(null))).to.be.true; // Empty object without prototype
  });

  it('should return false for non-empty values', () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
    expect(isEmpty('abc')).to.be.false;
    expect(isEmpty({ 'a': 1 })).to.be.false;
    expect(isEmpty(new Map([[1, 'one']]))).to.be.false;
    expect(isEmpty(new Set([1, 2, 3]))).to.be.false;
    expect(isEmpty({ 'length': 0 })).to.be.false; // Object with length property
    expect(isEmpty({ 'key': 'value' })).to.be.false;
  });
});
