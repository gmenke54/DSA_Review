// Naive String Search:

// searching for a the frquency of a substring in a larger string

const searchForSub = (string, target) => {
  let counter = 0;
  let targetPointer = 0;

  for (let stringPointer = 0; stringPointer < string.length; stringPointer++) {
    console.log('/////////////////////////');
    console.log('string:', string[stringPointer]);
    console.log('target:', target[targetPointer]);
    if (string[stringPointer] === target[targetPointer]) {
      targetPointer++;
      console.log(targetPointer);
      console.log(target.length);
      if (target.length === targetPointer) {
        counter++;
        targetPointer = 0;
      }
    } else {
      targetPointer = 0;
    }
  }
  return counter;
};

console.log(searchForSub('lorie loled', 'lo'));
