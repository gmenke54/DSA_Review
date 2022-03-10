// write a function that calculates the sum of all numbers from 1 up to and including n
// option 1:
function addUpTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// option 2:
function addTo(n) {
  return (n * (n + 1)) / 2;
}

// check speed with timing function:
const t1 = performance.now();
console.log(addUpTo(1000000000));
// console.log(addTo(1000000000));
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// which option is better?
// faster
// less memory intensive
// readability
// # of lines

// option 1: 1 second
// option 2: 0.003 seconds

// how to categorize and compare code without manually timing it?
// Big O!

// count the number of operations the computer must perform:
// option 1: n operations (single for loop)(grows roughly in proprtion with n)
// option 2: always 3 operations
