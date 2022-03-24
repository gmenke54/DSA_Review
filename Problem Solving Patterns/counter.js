// Frequency Counter
// use case: need to collect values/frequencies of values while iterating over a data set

// leverage objects or sets as collectors

// Naive approach:
// const isSame = (arr, sqrArr) => {
//   if (arr.length !== sqrArr.length) {
//     return false;
//   }
//   checkArr = sqrArr;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < checkArr.length; j++) {
//       if (checkArr[j] === arr[i] * arr[i]) {
//         console.log(checkArr[j]);
//         checkArr.splice(j, 1);
//         break;
//       }
//     }
//   }
//   console.log(checkArr);
//   if (checkArr.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isSame([1, 2, 1], [4, 4, 1]));

// refactored:
// 3 seperate loops
// 1st 2 loops make 2 counters; 1 for each array
// 3rd loops iterates through 1st counter to see if it matches 2nd counter appropriately

// Anagram Challenge:
const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  for (let char of str1) {
    if (obj1.hasOwnProperty(char)) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }
  const obj2 = {};
  for (let char of str2) {
    if (obj2.hasOwnProperty(char)) {
      obj2[char]++;
    } else {
      obj2[char] = 1;
    }
  }
  console.log(obj1);
  console.log(obj2);
  for (const key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
};

console.log(areAnagrams('texttwisttime', 'timetwisttext'));
