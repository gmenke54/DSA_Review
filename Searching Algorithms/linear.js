// Linear Search:
// the simplest search algorithm
// if data is sorted, this is not the most efficient search method

// method: iterate through the whole data set in order checking of the current element is what you are looking for

// example:
const search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5], 2));

// this is used by built in js functions such as indexOf()
