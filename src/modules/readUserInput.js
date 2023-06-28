const rl = require('./inputInterface');
const executeProgram = require('./program');

function readUserInput() {
  rl.question('Enter the list of numbers separated by commas: ', (numInput) => {
    const numbers = numInput.split(',').map((num) => parseInt(num, 10));

    rl.question('Enter the value of targetSum: ', (targetSumInput) => {
      const targetSum = parseInt(targetSumInput, 10);

      executeProgram(numbers, targetSum);
    });
  });
}

module.exports = readUserInput;
