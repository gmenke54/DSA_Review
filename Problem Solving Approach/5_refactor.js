// Look back and refactor
// Just working isnt enough
// The best way to improve is reflecting on your code
// Factors to refactor:
// Readability
// Efficiency

// Questions to ask:
// can you understand your solution at a glance
// can you repurpose the method for a different problem
// can you imporve the time/space complexity
// how have other people solved this problem

// Dont always have to refatcor

// Example:
// function charCount(str) {
//   const map = {};
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     console.log(map.hasOwnProperty(str[i]));
//     if (map.hasOwnProperty(str[i].toLowerCase()) && str[i].match(/[a-z0-9]/i)) {
//       map[str[i].toLowerCase()]++;
//     } else if (str[i].match(/[a-z0-9]/i)) {
//       map[str[i].toLowerCase()] = 1;
//     }
//   }
//   console.log(map);
// }

// How I refactored:
// used a for of loop to increase legibility
// set char to lowercase initially rather tahn repetively to increase performance and readability
// removed i flag from regex since I already set char to lowercase
// replace conditional with a ternary

function charCount(str) {
  const map = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (char.match(/[a-z0-9]/)) {
      map[char] = map[char]++ || 1;
    }
  }
  console.log(map);
}

charCode;

charCount('hello:::njdopsjdmq');
