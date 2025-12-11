// Classical Loops with Array

let Array = [1,'w',"Tejas",true,false,null,34.32]

console.log("Array Array contains :- " + " ")
for(const element of Array){
        console.log(element + " ")
}
// Array Array contains :-
// 1
// w
// Tejas
// true
// false
// null
// 34.32







// 1) for-of loop  <---- used in array

let arr = [10,"20",99.99,null,true,false];
for(let a of arr){
    console.log(a);
}
// 10
// 20
// 99.99
// null
// true
// false


let Name = "Tejas Joshi"
for(let x of Name){
    console.log(x)
}
// T
// e
// a
// s

// J
// o
// s
// h
// i









// 2) for-in loop

let Array_Name = [10,"20",99.99,null,true,false];

for(let key in Array_Name){
        console.log(key + " :- " + Array_Name[key]); 
}
// 0 :- 10
// 1 :- 20
// 2 :- 99.99
// 3 :- null
// 4 :- true
// 5 :- false



let Pame = "Tejas Joshi"
for(let key in Pame){
        console.log(key + " :- " + Pame[key]); 
}

// 0 :- T
// 1 :- e
// 2 :- j
// 3 :- a
// 4 :- s
// 5 :-
// 6 :- J
// 7 :- o
// 8 :- s
// 9 :- h
// 10 :- i




















// 3) forEach Loop

let Arr = [1,'w',"Tejas",true,false,null,34.32]
Arr.forEach((element) => {
        console.log(element)
})
// 1
// w
// Tejas
// true
// false
// null
// 34.32
















// 3) Array.from()   <-- Used to create an array from any other object

document.body.childNodes
// NodeList(9) [text, div, text, script, text, comment, text, script, text]

document.body.childNodes[0]     // #text
document.body.childNodes[1]     /* <div> ...... </div> */

typeof document.body.childNodes  // object

let brr = Array.from(document.body.childNodes)  // undefined

brr     // (9) [text, div, text, script, text, comment, text, script, text]

brr[0]  // #text



let game = "Tejas Joshi"
let drr = Array.from(game)
console.log(drr) 
// ['T', 'e', 'j', 'a', 's', ' ', 'J', 'o', 's', 'h', 'i']