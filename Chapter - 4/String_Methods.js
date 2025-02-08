
// 1) string[i] <--- Gives Character present at index 'i' in string 

let Aircreaft = `Tejas Joshi`
console.log(Aircreaft[0])    // T
console.log(Aircreaft[1])    // e
console.log(Aircreaft[2])    // j
console.log(Aircreaft[4])    // s
console.log(Aircreaft[5])    // 
console.log(Aircreaft[6])    // J
console.log(Aircreaft[7])    // s





// 2) string.length <---- Gives length of the string

let Name = `Tejas Joshi`
console.log(Name.length)    // 11




// 3) string.toUpperCase() <---- return string converted to UpperCase

let Full_Name = `Tejas Joshi`
console.log(Full_Name.toUpperCase())    // TEJAS JOSHI



// 4) string.toLowerCase() <---- return string converted to LowerCase

let Surname = `Tejas Joshi`
console.log(Surname.toLowerCase())    // tejas joshi




// 5) string.slice(x,y) <---- [x,y)  return string in which x included & y excluded

let Nav = `Tejas Joshi`
console.log(Nav.slice(2,7))  // jas J

let Gav = `Tejas Joshi`
console.log(Gav.slice(2))    // jas Joshi




// 6) string.replace(x,y) <---- return string in which replace x with y 

let Game = `Tejas Joshi`
console.log(Game.replace('ja','JA'))  // TeJAs Joshi

let GTA = `Tejas Joshi`
console.log(GTA.replace("Tejas","Aakash"))    // Aakash Joshi




// 7) string concatination

let Nav_name = `Tejas `
let Mid_Name = `Dattatray `
let Sur_name = `Joshi`
let Full_nav = Nav_name + Mid_Name + Sur_name
console.log(Full_nav)   // Tejas Dattatray Joshi




// 8) string.trim() <--- return string in which Removes starting and Ending whitespace

let need = "      Tejas           Joshi        Dattaray   "
console.log(need.trim())   // Tejas           Joshi        Dattaray