import { assert } from 'chai';
import { add } from '../src/index.js';

describe('Index', function() {
  describe('add()', function() {
    it('add() should return the sum of two numbers', function() {
      let result = add(5, 5);
      assert.equal(result, 10);
    });
  });
});
