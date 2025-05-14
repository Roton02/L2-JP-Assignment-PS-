// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  {
    make: 'rotons',
    model: 'A20',
    year: 2020,
  },
  {
    make: 'rotons',
    model: 'A20',
    year: 2023,
  },
  {
    make: 'rotons',
    model: 'A20',
    year: 2025,
  },
  {
    make: 'rotons',
    model: 'A20',
    year: 2030,
  },
]

const sortTheCars = (cars) => {
  return cars.sort((a, b) => b.year - a.year)
}

console.log(sortTheCars(cars))
