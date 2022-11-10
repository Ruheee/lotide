const tail = require('../tail');
const assert = require('chai').assert;



describe("#tail", () => {
  it('returns ""Lighthouse", "Labs"" from ["Hello", "Lighthouse", "Labs"])', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
  it('returns "2, 3, 4, 5" from [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  })
  it('returns "2, 3, 4, 5, 6, 7" from [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7]),[2, 3, 4, 5, 6, 7])
  })
  it('returns ""Lighthouse", "Labs"" from ["Hello", "Lighthouse", "Labs", "Thanks", "For", "The", "Oppurtunity"])', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs", "Thanks", "For", "The", "Oppurtunity"]), ["Lighthouse", "Labs", "Thanks", "For", "The", "Oppurtunity"])
  })
})



