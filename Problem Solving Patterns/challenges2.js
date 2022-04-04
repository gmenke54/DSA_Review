// Multiple Pointers - Average Pair

const averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  if (arr.length <= 1) {
    return false;
  }
  while (left < right) {
    console.log('///////////////////');
    average = (arr[left] + arr[right]) / 2;
    console.log('average:', average);
    if (average === target) {
      return true;
    } else if (average < target) {
      // average needs to increase
      left++;
    } else {
      // average needs to decrease
      right--;
    }
  }
  return false;
};

// console.log(averagePair([], 4));

// Multiple Pointers - isSubsequence
