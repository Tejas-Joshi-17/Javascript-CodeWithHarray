// 1) 
console.log("has\"".length)     // 4





// 2) Explore the includes, startwith & endwith function of a string

// ---->> string.includes(x) return true if 'x' present in string
let Name = `Tejas Dattatray Joshi`
console.log(Name.includes("as Da"))     // true
console.log(Name.includes("As Da"))     // false



// ---->> string.startWith(x) <<--- Returen true if string startWith 'x' else return false
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));    // true
// Expected output: true

console.log(str1.startsWith('Sat', 3)); // false
// as we expect from index 3 string start with 'Sat' but it startWith u from index 3




// ---->> string.endsWith(x) <<--- Returen true if string endsWith 'x' else return false
const str_1 = 'Cats are the best!';

console.log(str_1.endsWith('best!'));       // true

console.log(str_1.endsWith('best', 17));    // false
// as index 17 is:-t  16 is:-s  15 is:-e  14 is:-b but 17 is not last index of string

const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));     // false







// 3) Write a Program to convert a given string to lowercase

let Surname = `Tejas Joshi`
console.log(Surname.toLowerCase())    // tejas joshi







// 4) Extract the amount out of this string  "  Please give Rs 1000  "

let Statement = "  Please give Rs 1000   "
let mid = Statement.trim()
console.log(mid)
let Amount = mid.slice("Please give Rs ".length)
console.log(Amount)                 // 1000
console.log(typeof Amount)          // string
Amount = Number.parseInt(Amount)
console.log(typeof Amount)          // number








// 5) Try to change 4th character of a given string, whether you able to do it ?

let Subway = "Tejas Joshi"
Subway[3] = 'W'             // <-- Doesn't modify the 'a' with 'w'
console.log(Subway)         // Tejas Joshi