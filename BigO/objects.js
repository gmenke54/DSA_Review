// The Performance of Objects:
// Use when:
// you don't need order
// you need fast access/insertion and removal

let instructor = {
  firstName: 'Jeremy',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
};

// this requires O(n) time:
console.log(Object.entries(instructor));

// this requires O(1) time:
console.log(instructor.hasOwnProperty('firstName'));
