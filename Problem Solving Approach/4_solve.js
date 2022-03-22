// Solve the Problem
// ...if you cant...
// solve a simpler problem

// Simplify:
// Do what you know how to do, ignoring the challenging part
// then attempt to incorporate the more challenging part back in

function charCount(str) {
  const map = {
    h: 1
  };
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    console.log(map.hasOwnProperty(str[i]));
    if (
      map.hasOwnProperty(str[i].toLowerCase()) &&
      str[i].match(/^[a-z0-9]+$/i)
    ) {
      map[str[i].toLowerCase()]++;
    } else if (str[i].match(/^[a-z0-9]+$/i)) {
      map[str[i].toLowerCase()] = 1;
    }
  }
  console.log(map);
}

charCount('hello wo28282:::][][][rld');
