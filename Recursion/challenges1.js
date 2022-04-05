const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  if (exp <= 1) {
    return base;
  }
  return base * power(base, exp - 1);
};

// console.log(power(2, 0));

// Product of an Array
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr) => {
  if (arr.length <= 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.splice(1));
};

// console.log(productOfArray([1, 2, 3])); // 6

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
const recursiveRange = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num + recursiveRange(num - 1);
};

// console.log(recursiveRange(10));

// return the nth number in the fibonacci sequence
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(35));
