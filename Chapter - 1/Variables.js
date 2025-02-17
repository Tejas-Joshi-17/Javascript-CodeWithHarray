// 1) Statically Typed Language :- After declaration of variable it's datatype cann't changed
//                                 E.X :- C, C++, Java, etc.
// 2) Dynalically Typed Language :- After declaration of variable it's datatype can changed
//                                 E.X :- Python, Javascript, etc.


// 1) var   :-   Updation & Redeclaration both possible
//               Global Scope
//               By-default initalize with "undefined"
// 2) let   :-   Updation possible but Redeclaration not possible
//               Block Scope
//               By-default initalize with "undefined"
// 3) const :-   Updation & Redeclaration both NOT possible
//               Block Scope
//               Must be initialize at the time of declaration else error occur




// --------------------------------------------------- var -------------------------------------------------------------------


var a = 10;
console.log(a);         // 10
var a = "Tejas";
console.log(a);         // Tejas
a = "Joshi";
console.log(a);         // Joshi



var t = 45;
console.log(t);                 // 45
{
    var t = "Tejas Joshi";      // <--- Global Scoped
    console.log(t);             // Tejas Joshi
}
console.log(t);                 // Tejas Joshi


var z;
console.log(z);                 // undefined




// --------------------------------------------------- let -------------------------------------------------------------------


let b = 10;
console.log(b);                 // 10
b = "Joshi";
console.log(b);                 // Joshi
// let b = "Tejas";
// console.log(b);              // <---- Error (Updation possible but Re-declaration NOT possible)



let w = 456;
console.log(w);                 // 456
{
    w = 23;
    console.log(w);             // 23
}
console.log(w);                 // 23


let y = 456;
console.log(y);                 // 456
{
    let y = 23;                 // <--- Blocked Scope
    console.log(y);             // 23
}
console.log(y);                 // 456



let m ;
console.log(m);                 // undefined





// --------------------------------------------------- const -----------------------------------------------------------------



const u = 10;
console.log(u);             // 10
// u = "Joshi";
// console.log(u);          // <---- Error (Updation & Re-declaration Both NOT possible)
// const b = "Tejas";
// console.log(b);          // <---- Error (Updation & Re-declaration Both NOT possible)



const r = 456;
console.log(r);             // 456
{
    // r = 23;              <---- not possible as we try to change constant value
    // console.log(w);      <---- Error (Updation & Re-declaration Both NOT possible)
}
console.log(r);             // 456


const s = 456;
console.log(s);             // 456
{
    const s = 23;           // <--- Blocked Scope that's why possible
    console.log(s);         // 23
}
console.log(s);             // 456


// const k ;
// console.log(k);          <---- Error (Must be Initilize at time of declaration else produce error)



// ---------------------------------------------------------------------------------------------------------------------------