const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

// depth first traversal must use a stack:
// depth first iterative example
const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      stack.push(neighbors[i]);
    }
  }
};

// depthFirstPrint(graph, 'a');

// depth first recursively:
const depthRecursion = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthRecursion(graph, neighbor);
  }
};

depthRecursion(graph, 'a');

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      queue.push(neighbors[i]);
    }
  }
};

// breadthFirstPrint(graph, 'a');
