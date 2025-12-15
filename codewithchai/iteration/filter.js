// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newMyArray = myArray.filter((value, index, array) => {
    if(value > 5) return value;
})

console.log(newMyArray);        // [ 6, 7, 8, 9, 10 ]


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const books = [
    {
        name : "Book One", 
        genre : "Science",
        publish : 2009,
        edition : 2014
    },
    {
        name : "Book Two", 
        genre : "Fiction",
        publish : 1987,
        edition : 2010
    },
    {
        name : "Book Three", 
        genre : "History",
        publish : 1986,
        edition : 1996
    },
    {
        name : "Book Four", 
        genre : "Science",
        publish : 2011,
        edition : 2016
    },
    {
        name : "Book Five", 
        genre : "Non-Fiction",
        publish : 1981,
        edition : 1989
    }
]

let userBook = books.filter((book) => {
    if(book.genre === "Science") {
        return book;
    }
});

console.log(userBook);
// [
//   { name: 'Book One', genre: 'Science', publish: 2009, edition: 2014 },
//   { name: 'Book Four', genre: 'Science', publish: 2011, edition: 2016 }
// ]


userBook = books.filter((book) => {
    if(book.publish >= 1985 && book.genre !== "Science") {
        return book;
    }
})

console.log(userBook);
// [
//   { name: 'Book Two', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { name: 'Book Three', genre: 'History', publish: 1986, edition: 1996 }
// ]


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------