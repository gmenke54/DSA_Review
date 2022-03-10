// Basic Sliding Window:

// When to use?
// everything grouped sequentailly
// longest / smallest / contains / max /min

// Fixed Length:
// build a function that finds the max sum of a contiguous subarray of size 3
const slide = (arr) => {
  let curr = 0;
  let max = -Infinity;
  console.log(max);
  for (let i = 0; i < arr.length - 2; i++) {
    console.log(arr[i], arr[i + 1], arr[i + 2]);
    curr = arr[i] + arr[i + 1] + arr[i + 2];
    if (curr > max) {
      max = curr;
    }
  }
  console.log(max);
};
slide([4, 2, 1, 7, 8, 1, 2, 8, 1, 0]);

// Dynamic Variant (window size varies; caterpillar):
