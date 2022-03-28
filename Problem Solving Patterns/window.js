// naive:
// const maxSub = (arr) => {
//   let maxSum = -Infinity;
//   for (let i = 0; i < arr.length - 3; i++) {
//     let currentSum = 0;
//     for (let j = i; j < i + 4; j++) {
//       currentSum += arr[j];
//     }
//     console.log('current sum:', currentSum);
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       console.log('set max sum:', maxSum);
//     }
//   }
//   return maxSum;
// };

// sliding window:
const maxSub = (arr) => {
  let maxSum = arr[0] + arr[1] + arr[2] + arr[3];
  console.log('firstWindow:', maxSum);
  let currentSum = maxSum;
  for (let i = 1; i < arr.length - 3; i++) {
    console.log('NEW WINDOW');
    console.log([arr[i], arr[i + 1], arr[i + 2], arr[i + 3]]);
    currentSum -= arr[i - 1];
    currentSum += arr[i + 3];
    console.log(currentSum);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

console.log(maxSub([5, 2, 4, 3, -1, 9, 3, 7, 6]));
