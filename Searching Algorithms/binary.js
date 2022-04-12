// Binary Search Algorithms
// only works on sorted data
// much much faster than linear search

// example:

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log('/////////////////////////////////////');
    console.log('left:', left);
    console.log('middle:', middle);
    console.log('right:', right);
    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      // target is smaller than current
      right = middle;
      if (right === left) {
        if (arr[left] === target) {
          return left;
        } else {
          return -1;
        }
      }
    } else {
      // target is larger than current
      left = middle;
      if (right - 1 === middle) {
        if (arr[right] === target) {
          return right;
        } else {
          return -1;
        }
      }
    }
  }
  return -1;
};

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 20, 21, 54, 56, 69],
    1
  )
);
