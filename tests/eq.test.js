import { expect } from 'chai';
import eq from '../src/eq.js'; 

describe('eq function', () => {
  it('should return true if the values are equivalent', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };

    expect(eq(object, object)).to.be.true;
    expect(eq('a', 'a')).to.be.true;
    expect(eq(NaN, NaN)).to.be.true;
  });

  it('should return false if the values are not equivalent', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };

    expect(eq(object, other)).to.be.false;
    expect(eq('a', Object('a'))).to.be.false;
  });

  it('should handle undefined values', () => {
    expect(eq(undefined, undefined)).to.be.true;
    expect(eq(undefined, null)).to.be.false;
  });

  it('should handle null values', () => {
    expect(eq(null, null)).to.be.true;
    expect(eq(null, undefined)).to.be.false;
  });
});
