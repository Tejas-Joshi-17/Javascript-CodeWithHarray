"use strict";


function showX() {
    let x = 10;
    console.log(`Value inside function is :- ${x}`); // :: Accessible: 10
}
showX();

console.log(`Value outside function is :- ${x}`); // ✅ Accessible: 10
