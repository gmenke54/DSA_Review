// const maxSubarraySum = (arr, k) => {
//   if (arr.length < k) {
//     return null;
//   }
//   let currentSum = 0;
//   for (let i = 0; i < k; i++) {
//     currentSum += arr[i];
//   }
//   let maxSum = currentSum;
//   console.log(currentSum);
//   let right = k;
//   for (let i = 1; i <= arr.length - k; i++) {
//     console.log('////////////////////');
//     console.log('left:', arr[i]);
//     console.log('right:', arr[right]);
//     currentSum -= arr[i - 1];
//     currentSum += arr[right];
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//     right++;
//   }
//   return maxSum;
// };

// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

// const minSubArrayLen = (arr, target) => {
//   let left = 0;
//   let right = 0;
//   let currentSum = arr[0];
//   let minLength = Infinity;
//   while (left <= arr.length - 1) {
//     if (currentSum < target) {
//       if (right < arr.length - 1) {
//         right++;
//         currentSum += arr[right];
//       } else {
//         left = arr.length;
//       }
//     } else {
//       if (right - left + 1 < minLength) {
//         minLength = right - left + 1;
//       }
//       left++;
//       currentSum -= arr[left - 1];
//     }
//   }
//   if (minLength === Infinity) {
//     return 0;
//   } else {
//     return minLength;
//   }
// };

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));

// debug this:
const findLongestSubstring = (str) => {
  if (str.length < 2) {
    return str.length;
  }
  let left = 0;
  let right = 0;
  let longestSubLength = 1;
  let currentSubMap = {};
  let mode = 'grow';
  currentSubMap[str[0]] = 1;
  while (right <= str.length - 1) {
    console.log('///////////////////');
    console.log(longestSubLength);
    console.log(currentSubMap);
    console.log(mode);
    console.log(right);
    console.log(left);
    if (Object.keys(currentSubMap).length > longestSubLength) {
      longestSubLength = Object.keys(currentSubMap).length;
    }
    if (mode === 'grow') {
      right++;
      console.log('line 77', str[right], currentSubMap[str[right]]);
      if (currentSubMap[str[right]]) {
        mode = 'shrink';
      } else {
        currentSubMap[str[right]] = 1;
      }
    } else {
      if (str[left] === str[right]) {
        mode = 'grow';
      } else {
        delete currentSubMap[str[left]];
      }
      left++;
    }
  }
  return longestSubLength;
};

console.log('FINAL', findLongestSubstring('thecatinthehat'));
