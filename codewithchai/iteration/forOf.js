// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(`Element is :- ${element}`)
}
// Element is :- 1
// Element is :- 2
// Element is :- 3
// Element is :- 4
// Element is :- 5


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

const greeting = `Hello World!`
for (const element of greeting) {
    console.log(`${element}`)
}
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d
// !


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const map = new Map();
map.set(`IN`, `India`)
map.set(`USA`, `United State of America`)
map.set(`Fr`, `France`)
map.set(`IN`, `India`)

console.log(map)
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United State of America',
//   'Fr' => 'France'
// }

for (const key of map) {
    console.log(key)
}
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

for (const [code, country] of map) {
    console.log(`${code} -> ${country}`)
}
// IN -> India
// USA -> United State of America
// Fr -> France


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------