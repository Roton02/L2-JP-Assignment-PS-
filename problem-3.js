// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (n) => {
  return n*n
}
const duoble = (n) => {
  return n*2
}

const addFive = (n) => {
  return n+5
}

const composeAll = (n) => {
  return addFive(duoble(square(3)))
}

console.log(composeAll(5))