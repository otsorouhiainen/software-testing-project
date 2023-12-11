// test.js
import { assert } from 'chai';
import { add, subtract } from '../src/math.js';

describe('Math', function() {
  describe('#add()', function() {
    it('should return 2 when the arguments are 1 and 1', function() {
      assert.equal(add(1, 1), 2);
    });
  });
  describe('#subtract()', function() {
    it('should return 0 when the arguments are 1 and 1', function() {
      assert.equal(subtract(1, 1), 0);
    });
  });
});
