const rl = require('./inputInterface');
const executeProgram = require('./program');
const readUserInput = require('./readUserInput');

function displayMenu() {
  console.log('=== Menu ===');
  console.log('1. Use default values');
  console.log('2. Enter values');
  console.log('0. Exit');
  rl.question('Enter your choice: ', (choice) => {
    if (choice === '1') {
      const defaultNumbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
      const defaultTargetSum = 12;
      executeProgram(defaultNumbers, defaultTargetSum);
    } else if (choice === '2') {
      readUserInput();
    } else if (choice === '0') {
      rl.close();
    } else {
      console.log('Invalid choice. Please try again.\n');
      displayMenu();
    }
  });
}

module.exports = displayMenu;
