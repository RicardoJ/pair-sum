const findSumPairs = require('./findSumPairs');

function executeProgram(numbers, targetSum) {
  const pairs = findSumPairs(numbers, targetSum);

  pairs.forEach((pair) => {
    console.log(`+ ${pair[0]},${pair[1]}`);
  });

  process.exit();
}

module.exports = executeProgram;
