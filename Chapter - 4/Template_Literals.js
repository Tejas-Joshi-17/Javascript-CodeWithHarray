// Template Literal :- 
//          Template Literals use backtics instead of quotes to define a string



//  ---->>> With Template Literals, it is possible to use both single & double quotes inside a string

let profileName = `Te'ja's  Jo"sh"i`
console.log(profileName)   // Te'ja's  Jo"sh"i


// ----->>>> We can insert variables directly in template literal. This is called string interpolation

let fullName = `Tejas Joshi`
let address = `My Name is :- ${fullName}`
console.log(address)    // My Name is :- Tejas Joshi