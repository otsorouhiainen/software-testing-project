import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact function', () => {
  it('should remove all falsey values from the array', () => {
    const inputArray = [0, 1, false, 2, '', 3];
    const expectedResult = [1, 2, 3];
    const result = compact(inputArray);
    
    expect(result).to.deep.equal(expectedResult);
  });

  it('should return an empty array if all values are falsey', () => {
    const inputArray = [false, null, 0, '', undefined, NaN];
    const expectedResult = [];
    const result = compact(inputArray);
    
    expect(result).to.deep.equal(expectedResult);
  });

  it('should return the same array if all values are truthy', () => {
    const inputArray = [1, 'hello', true, {}, []];
    const expectedResult = [1, 'hello', true, {}, []];
    const result = compact(inputArray);
    
    expect(result).to.deep.equal(expectedResult);
  });

  it('should handle arrays with mixed truthy and falsey values', () => {
    const inputArray = [false, 0, 1, null, '', 'hello', undefined, NaN];
    const expectedResult = [1, 'hello'];
    const result = compact(inputArray);
    
    expect(result).to.deep.equal(expectedResult);
  });

  it('should handle arrays with only one element', () => {
    expect(compact([false])).to.deep.equal([]);
    expect(compact([0])).to.deep.equal([]);
    expect(compact([''])).to.deep.equal([]);
    expect(compact([NaN])).to.deep.equal([]);
    expect(compact([undefined])).to.deep.equal([]);
    expect(compact([null])).to.deep.equal([]);
    expect(compact([1])).to.deep.equal([1]);
    expect(compact(['hello'])).to.deep.equal(['hello']);
    expect(compact([{}])).to.deep.equal([{}]);
    expect(compact([[]])).to.deep.equal([[]]);
  });

  it('should handle empty arrays', () => {
    expect(compact([])).to.deep.equal([]);
  });
});
