import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq function', () => {
  it('should return true for same values', () => {
    expect(eq(5, 5)).to.be.true;
    expect(eq('hello', 'hello')).to.be.true;
    expect(eq(true, true)).to.be.true;
    expect(eq(undefined, undefined)).to.be.true;
    expect(eq(null, null)).to.be.true;
    expect(eq(NaN, NaN)).to.be.true;
    const obj = { a: 1 };
    expect(eq(obj, obj)).to.be.true;
  });

  it('should return false for different values', () => {
    expect(eq(5, '5')).to.be.false;
    expect(eq('hello', 'world')).to.be.false;
    expect(eq(true, false)).to.be.false;
    expect(eq(undefined, null)).to.be.false;
    expect(eq(null, false)).to.be.false;
    expect(eq(NaN, undefined)).to.be.false;
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).to.be.false;
  });

  it('should handle special cases', () => {
    expect(eq(0, -0)).to.be.true;
    expect(eq(-0, 0)).to.be.true;
    expect(eq(0, 0)).to.be.true;
    expect(eq(-0, -0)).to.be.true;
    expect(eq(NaN, 0 / 0)).to.be.true;
    expect(eq(NaN, Number.NaN)).to.be.true;
  });

  // Add more test cases as needed
});
