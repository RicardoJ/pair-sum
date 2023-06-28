const findSumPairs = require('../modules/findSumPairs');

describe('findSumPairs', () => {
  it('should find pairs that sum to the target value', () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetSum = 12;
    const result = findSumPairs(numbers, targetSum);
    expect(result).toEqual([
      [12, 0],
      [16, -4],
      [5, 7],
    ]);
  });

  it('should handle empty input', () => {
    const numbers = [];
    const targetSum = 12;
    const result = findSumPairs(numbers, targetSum);
    expect(result).toEqual([]);
  });

  it('should handle no pairs found', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 12;
    const result = findSumPairs(numbers, targetSum);
    expect(result).toEqual([]);
  });

  it('should handle duplicate numbers', () => {
    const numbers = [1, 1, 2, 2, 3, 3];
    const targetSum = 4;
    const result = findSumPairs(numbers, targetSum);
    expect(result).toEqual([
      [2, 2],
      [1, 3],
      [1, 3],
    ]);
  });
});
