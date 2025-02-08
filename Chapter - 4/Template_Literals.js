// Template Literal :- 
//          Template Literals use backtics instead of quotes to define a string



//  ---->>> With Template Literals, it is possible to use both single & double quotes inside a string

let Name = `Te'ja's  Jo"sh"i`
console.log(Name)   // Te'ja's  Jo"sh"i


// ----->>>> We can insert variables directly in template literal. This is called string interpolation

let Full_Name = `Tejas Joshi`
let Address = `My Name is :- ${Full_Name}`
console.log(Address)    // My Name is :- Tejas Joshi