// Big O Definition:
// as n grows for f(n), how does the number of operations grow?

// option 1 -----> O(n) (doesnt matter if its 1n, 5n, 10n; eventually goes to n)
function addUpTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// option 2 -----> O(1)
function addTo(n) {
  return (n * (n + 1)) / 2;
}

// option 3 -----> O(n^2) (exponential growth)
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////
// Simplifying Big O Expressions:
// constants dont matter
// O(2n) ---> O(n)
// O(500) ---> O(1)
// O(n^2 + 5n + 8) ---> O(n^2)

//
