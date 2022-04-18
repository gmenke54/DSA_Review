// Not typically used in code but is important to understand the concept

// larger values will "bubble to the top"

// Process:
// Iterate through data set, comparing neighbors and swapping if need be based on sort criteria
// repeat this until array is entirely sorted

const bubbleSort = (arr) => {
  // end = arr.length;
  for (let i = arr.length; i > 0; i--) {
    console.log('////////////////////');
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8, 9, 3, 7, 73, 23, 43, 1]));
