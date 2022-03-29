// Frequency Counter:
// must have O(N) time complexity

const sameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
    if (map1[str1[i]]) {
      map1[str1[i]]++;
    } else {
      map1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    console.log(str2[i]);
    if (map2[str2[i]]) {
      map2[str2[i]]++;
    } else {
      map2[str2[i]] = 1;
    }
  }
  console.log(map1);
  console.log(map2);
  for (const num in map1) {
    if (map1[num] !== map2[num]) {
      return false;
    } else {
      delete map2[num];
    }
  }
  if (Object.keys(map2).length === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(sameFrequency(22, 222));

// Are there duplicates:
// time must be O(n) and space must be O(n)

const areThereDuplicates = (...args) => {
  const map = {};
  for (let i = 0; i < args.length; i++) {
    if (map[args[i]]) {
      return true;
    } else {
      map[args[i]] = 1;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 2));
