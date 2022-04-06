// Reverse a String:
const reverse = (str) => {
  let newStr = '';
  const helper = (remainingStr) => {
    if (remainingStr.length < 1) {
      return remainingStr;
    }
    newStr = remainingStr[0] + newStr;
    console.log('newStr:', newStr);
    trimmed = remainingStr.slice(1, remainingStr.length);
    console.log('trimmed:', trimmed);
    return helper(trimmed);
  };
  helper(str);
  return newStr;
};

// console.log(reverse('grant'));

// isPalindrome:
const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  trimmed = str.slice(1, str.length - 1);
  return isPalindrome(trimmed);
};

// console.log(isPalindrome('amanaplanacanalpandemonium'));

const isOdd = (val) => val % 2 !== 0;
// callback check on array recursive:
const someRecursive = (arr, callback) => {
  if (arr.length <= 0) {
    return false;
  }
  if (callback(arr[0])) {
    return true;
  }
  arr.shift();
  return someRecursive(arr, callback);
};

// console.log(someRecursive([2, 3, 4, 5], isOdd));

const flatten = (array) => {
  let flat = [];
  const helper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        flat.push(arr[i]);
      }
    }
  };
  helper(array);
  return flat;
};

console.log(flatten([1, 2, 3, [4, [5, 6]]])); // [1, 2, 3, 4, 5]

// console.log(flatten([4, 5]));
