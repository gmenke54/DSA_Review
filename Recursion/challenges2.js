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

// console.log(flatten([1, 2, 3, [4, [5, 6]]])); // [1, 2, 3, 4, 5]

// console.log(flatten([4, 5]));

const capitalizeFirst = (arr) => {
  let capitalized = [];
  const helper = (remArr) => {
    if (remArr.length <= 0) {
      return;
    }
    capitalized.push(remArr[0].charAt(0).toUpperCase() + remArr[0].slice(1));
    remArr.shift();
    helper(remArr);
  };
  helper(arr);
  return capitalized;
};

// console.log(capitalizeFirst(['car', 'taco', 'banana']));

function nestedEvenSum(object) {
  let sum = 0;
  const cleanObject = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        cleanObject(obj[key]);
      } else if (typeof obj[key] === 'number') {
        console.log('its a number');
        if (obj[key] % 2 === 0) {
          sum += obj[key];
        }
      }
    }
  };
  cleanObject(object);
  return sum;
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// console.log(nestedEvenSum(obj2)); // 10

const stringifyNumbers = (object) => {
  const cleanObject = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        cleanObject(obj[key]);
      } else if (typeof obj[key] === 'number') {
        obj[key] = obj[key].toString();
      }
    }
  };
  cleanObject(object);
  return object;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};
// console.log(stringifyNumbers(obj));

const collectStrings = (object) => {
  let arr = [];
  const cleanObject = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        cleanObject(obj[key]);
      } else if (typeof obj[key] === 'string') {
        console.log('its a string');
        arr.push(obj[key]);
      }
    }
  };
  cleanObject(object);
  return arr;
};
const obj1 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj1)); // ["foo", "bar", "baz"])
