// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const peoples = [
  {
    name: 'roton',
    age: 25,
    gender: 'male',
  },
  {
    name: 'sofiya',
    age: 10,
    gender: 'female',
  },
  {
    name: 'Jhankar mahbub',
    age: 45,
    gender: 'male',
  },
  {
    name: 'tousia',
    age: 35,
    gender: 'female',
  },
  {
    name: 'custom',
    age: 65,
    gender: 'custom',
  },
  {
    name: 'Abdur rakib',
    age: 75,
    gender: 'male',
  },
]

const printName = (peoples) => {
  const res = peoples
    .filter((i) => i.gender !== 'female')
    .map((people) => {
      return people.name
    })
  return res
}

console.log(printName(peoples))
