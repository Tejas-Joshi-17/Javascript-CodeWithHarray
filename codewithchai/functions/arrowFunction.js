// -----------------------------------------------------------------------------------------------------------------------------------

function addTwo1(num1, num2) {
    return num1 + num2;
}

console.log(addTwo1(2, 3));         // 5

// -----------------------------------------------------------------------------------------------------------------------------------

// Arrow Function

let addTwo2 = (num1, num2) => {                 // <--- Explicit Return       
    return num1 + num2;
}
console.log(addTwo2(4, 5));         // 9

let addTwo3 = (num1, num2) => (num1 + num2);    // <--- Implicit Return 
console.log(addTwo3(10, 23));       // 33

let addTwo4 = (num1, num2) => (
    {
        name : "Tejas Joshi",
        department : ["Software Delivery", "Cricket"]
    }
)
console.log(addTwo4(2, 4));
// { name: 'Tejas Joshi', department: [ 'Software Delivery', 'Cricket' ] }

// -----------------------------------------------------------------------------------------------------------------------------------