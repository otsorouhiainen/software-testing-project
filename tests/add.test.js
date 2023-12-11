import { expect } from 'chai';
import add from '../src/add.js'; 

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(6, 4)).to.equal(10);
    expect(add(0, 0)).to.equal(0);
    expect(add(-1, 1)).to.equal(0);
  });

  it('should return the first number when the second number is not provided', () => {
    expect(add(5)).to.equal(5);
    expect(add(-3)).to.equal(-3);
  });

  it('should return 0 when no numbers are provided', () => {
    expect(add()).to.equal(0);
  });
});
