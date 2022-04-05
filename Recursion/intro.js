// What is Recursion?
// A process (aka function) that calls itself

// Two Essential Components of Recursion:
// 1 -> Calling the function with different input: Invoke the same (current function) with a different input each time until base case is reached

// 2 -> Base case: the condition when recursion ends; typically involves a conditional

// Why Use Recursion?
// Its very useful in JavaScript:
// JSON.parse / JSON.stringify
// DOM traversal
// Object traversal
// more complex data structure algorithms
// sometimes its cleaner that iteration

// The Call Stack
// built in data structure that manages what happens when in JS
// stack data structure FIFO
// invoking a function places it on top of the stack
// when JS sees the return keyword or when the function ends, the compiler pops that function off of the call stack
// recursive functions keep pushing new functions onto the call stack

// common recursive pitfalls:
// no base case
// forgetting to return
// return the wrong thing (aka not changing the data input each time)

// Helper Method vs Pure Recursion:
// Helper Method:
// interior recursive function
// useful when you are collecting values to return

// Pure Recursion:
// generally shorter syntax
// sometimes can be unneccarily complicated to understand this type of solution
