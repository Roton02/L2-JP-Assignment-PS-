
// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: 'Programing',
    author: 'IDK',
    year : 2020
  },
  {
    title: 'Hablu',
    author: 'IDK',
    year : 2020
  },
  {
    title: 'Growth',
    author: 'IDK',
    year : 2020
  }
]
const booksTitles = (books) => {
  return books.map((book)=> book.title)
}

console.log(booksTitles(books))