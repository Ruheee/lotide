const middle = require('../middle');
const assert = require('chai').assert;



describe("#middle", () => {
  it('returns "2,3" from [1, 2, 3, 4])', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })
  it('returns "1" from [1])', () =>{
    assert.deepEqual(middle([1]), [1])
  })
  it('returns "3" from [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
  it('returns "4" from [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]),[4])
  })
})



