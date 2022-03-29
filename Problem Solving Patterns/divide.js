// Divide and Conquer Patterns:
// process of dividing a data set into smaller chunks and then repeating a process with a subset of data;
// decreases time complexity

// Alot of search algorithms leverage divide and conquer principles

// classic example:
// binary search
// my attempt:
// const search = (arr, target) => {
//   console.log('///////////////////////////////////////////');
//   console.log(arr[Math.floor(arr.length / 2)]);
//   if (target < arr[Math.floor(arr.length / 2)]) {
//     let newArr = arr.slice(0, Math.floor(arr.length / 2));
//     console.log(newArr);
//     return search(newArr, target);
//   } else if (target > arr[Math.floor(arr.length / 2)]) {
//     let newArr = arr.slice(Math.floor(arr.length / 2) + 1, arr.length);
//     console.log(newArr);
//     return search(newArr, target);
//   } else {
//     console.log('found');
//     return Math.floor(arr.length / 2);
//   }
// };

// reafctored:
const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  console.log(arr[left], arr[right]);
  while (left <= right) {
    let half = Math.floor((right + left) / 2);
    if (target < arr[half]) {
      right = half - 1;
    } else if (target > arr[half]) {
      left = half + 1;
    } else {
      return half;
    }
  }
  return -1;
};

console.log('found', search([1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 100], 10));

// Time Complexity --> Log(N)
