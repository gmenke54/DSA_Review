// Not typically used in code but is important to understand the concept

// larger values will "bubble to the top"

// Process:
// Iterate through data set, comparing neighbors and swapping if need be based on sort criteria
// repeat this until array is entirely sorted

const bubbleSort = (arr) => {
  // end = arr.length;
  let sortComplete;
  for (let i = arr.length; i > 0; i--) {
    console.log('////////////////////');
    sortComplete = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        sortComplete = true;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (sortComplete) break;
  }
  return arr;
};

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 11, 9, 10]));

// Big O Notation:
// Worst case: n^2
// Best case: n
