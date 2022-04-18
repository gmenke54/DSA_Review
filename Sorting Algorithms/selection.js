// Selection Sort:

const selectionSort = (arr) => {
  const swap = (i1, i2) => {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    console.log('////////////////');
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      console.log(arr[j]);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
  return arr;
};

console.log(selectionSort([1, 2, 11, 9, 10, 3, 4, 5, 6, 7]));
