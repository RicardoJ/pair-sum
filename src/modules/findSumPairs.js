const sortedArray = require('./sortedArray');

function findSumPairs(numbers, targetSum) {
  const pairs = [];
  const numSet = new Set();

  for (let num of numbers) {
    const targetDifference = targetSum - num;

    if (numSet.has(targetDifference)) {
      pairs.push(sortedArray([num, targetDifference]));
    }

    numSet.add(num);
  }

  return pairs;
}

module.exports = findSumPairs;
