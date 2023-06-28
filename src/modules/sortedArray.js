function sortedArray(array) {
  return array.sort((elementA, elementB) => {
    if (elementA === 0 || elementB === 0) {
      return elementA === 0 ? 1 : -1;
    } else if (
      (elementA >= 0 && elementB >= 0) ||
      (elementA < 0 && elementB < 0)
    ) {
      return elementA - elementB;
    } else if (elementA < 0) {
      return 1;
    } else {
      return -1;
    }
  });
}

module.exports = sortedArray;
