import { expect } from 'chai';
import isDate from '../src/isDate.js'; 

describe('isDate function', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).to.be.true;
  });

  it('should return false for non-Date objects', () => {
    expect(isDate('Mon April 23 2012')).to.be.false;
    expect(isDate(123)).to.be.false;
    expect(isDate({})).to.be.false;
    expect(isDate([])).to.be.false;
    expect(isDate(null)).to.be.false;
    expect(isDate(undefined)).to.be.false;
    expect(isDate(true)).to.be.false;
  });
});
