// Binary Search Algorithms
// only works on sorted data
// much much faster than linear search

// example:

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      // target is smaller than current
      right = middle;
    } else {
      // target is larger than current
      left = middle;
    }
  }
  return -1;
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
