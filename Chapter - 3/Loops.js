// Loops in JavaScript :- 

// 1) for-in loop   <---- used for objects (key-value pair loop)
//      key = 0        value = Tejas
//      key = 1        value = Joshi
//      key = 2        value = 21
//      key = 3        value = true

let objectName = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    male : true,
    contactNo : 8485835616
};

for(let key in objectName){
    console.log(`${key} :- ${objectName[key]}`); 
}
// Name :- Tejas
// Surame :- Joshi
// Age :- 21
// Male :- true
// Contact_No :- 8485835616



let arrayName = [10, "20", 99.99, null, true, false];

for(let key in arrayName){
    console.log(`${key} :- ${arrayName[key]}`); 
}
// 0 :- 10
// 1 :- 20
// 2 :- 99.99
// 3 :- null
// 4 :- true
// 5 :- false



let pame = "Tejas Joshi"
for(let key in pame){
    console.log(`${key} :- ${pame[key]}`); 
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













// 2) for-of loop  <---- used in array

let arr = [10, "20", 99.99, null, true, false];
for( a of arr ){
    console.log(a);
}
// 10
// 20
// 99.99
// null
// true
// false


let fullName = "Tejas Joshi"
for(x of fullName){
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