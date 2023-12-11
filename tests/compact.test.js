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

});
