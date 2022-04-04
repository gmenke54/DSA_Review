const maxSubarraySum = (arr, k) => {
  if (arr.length < k) {
    return null;
  }
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  let maxSum = currentSum;
  console.log(currentSum);
  let right = k;
  for (let i = 1; i <= arr.length - k; i++) {
    console.log('////////////////////');
    console.log('left:', arr[i]);
    console.log('right:', arr[right]);
    currentSum -= arr[i - 1];
    currentSum += arr[right];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    right++;
  }
  return maxSum;
};

maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
