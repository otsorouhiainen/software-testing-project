// test.js
import { assert } from 'chai';
import { add } from '../src/math.js';

describe('Math', function() {
  describe('#add()', function() {
    it('should return 2 when the arguments are 1 and 1', function() {
      assert.equal(add(1, 1), 2);
    });
  });
});
