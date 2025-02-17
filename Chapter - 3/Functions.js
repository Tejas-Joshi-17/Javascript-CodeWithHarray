
function fun1 (p, q) {   // Old way
    return p+q;
}

let fun2 = (p, q) =>{     // Modern way
    return p+q;
}

console.log(`sum of 4 & 5 is :- ${fun1(4, 5)}`);          // sum of 4 & 5 is :- 9
console.log(`sum of 10 & 20 is :- ${fun2(10, 20)}`);      // sum of 10 & 20 is :- 30