// Multiple Pointers
// looking at 2+ specific points in a data set simultaneously
// i.e. "asdsa" --> start at both ends and iterate towards the other end to check if word is the same forward and back

// naive solution:
// const sumZero = (arr) => {
//   // let zeroArr = []
//   for (let i = 0; i < arr.length; i++) {
//     console.log('NEW LETTER', arr[i]);
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr[i], arr[j], 'sum:', arr[i] + arr[j]);
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return undefined;
// };
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// Better solution:
// use 2 pointers and a while loop to more efficiently iterate through the array

//////////////////////////////////////////////////
// countUniques:
const countUniques = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }
  return count;
};

console.log(countUniques([-2, -1, -1, 0, 1]));
