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

const isSubsequence = (sub, str) => {
  let subPointer = 0;
  // let strPointer = 0;
  for (let i = 0; i < str.length; i++) {
    console.log('////////////////');
    console.log('str pointer:', str[i]);
    console.log('sub pointer:', sub[subPointer]);
    if (str[i] === sub[subPointer]) {
      subPointer++;
    }
    if (subPointer > sub.length - 1) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence('abc', 'acb'));
