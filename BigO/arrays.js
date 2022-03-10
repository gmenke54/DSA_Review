// The Performance of Arrays:
// Use when:
// you need order
// you need fast access/insertion and removal

let names = ['grant', 'allegra', 'carl'];

// this requires O(1) time:
// console.log(names[2]);

// this requires O(1) time:
names.push('olivia');

// this requires O(n) time since we have to reindex every item in the array:
names.unshift('veronica');

// this requires O(n) time:
console.log(names.find((name) => name === 'grant'));
