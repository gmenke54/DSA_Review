// FIBONACCI

const hash = {};

const fib = (n) => {
  if (n === 1) return 1;
  if (n === 0) return 0;
  if (hash[n]) return hash[n];
  hash[n] = fib(n - 1) + fib(n - 2);
  return fib(n - 1) + fib(n - 2);
};

///////////////////////////////////

// coin change / napsack

// Write a function sumPossible that takes in an amount and an array of positive numbers.
// The function should return a boolean indicating whether or not it is possible to create
// the amount by summing numbers of the array.
// You may reuse numbers of the array as many times as necessary.

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;
  if (amount === 0) return true;

  for (let i = 0; i < numbers.length; i++) {
    if (sumPossible(amount - numbers[i], numbers, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
};
