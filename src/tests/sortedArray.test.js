const sortedArray = require('../modules/sortedArray');

describe('sortedArray', () => {
  it('should sort an array with positive and negative numbers', () => {
    const array = [1, -3, 4, -2, 5];
    const sorted = sortedArray(array);
    expect(sorted).toEqual([1, 4, 5, -3, -2]);
  });

  it('should move the number 0 to the end of the array', () => {
    const array = [-1, 2, 0, 3, 0, -4];
    const sorted = sortedArray(array);
    expect(sorted).toEqual([2, 3, -4, -1, 0, 0]);
  });
});
