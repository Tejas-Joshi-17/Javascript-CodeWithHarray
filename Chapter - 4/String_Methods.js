
// 1) string[i] <--- Gives Character present at index 'i' in string 

let airCraft = `Tejas Joshi`
console.log(airCraft[0])    // T
console.log(airCraft[1])    // e
console.log(airCraft[2])    // j
console.log(airCraft[4])    // s
console.log(airCraft[5])    // 
console.log(airCraft[6])    // J
console.log(airCraft[7])    // s





// 2) string.length <---- Gives length of the string

let profileName = `Tejas Joshi`
console.log(profileName.length)    // 11




// 3) string.toUpperCase() <---- return string converted to UpperCase

let fullName = `Tejas Joshi`
console.log(fullName.toUpperCase())    // TEJAS JOSHI



// 4) string.toLowerCase() <---- return string converted to LowerCase

let surName = `Tejas Joshi`
console.log(surName.toLowerCase())    // tejas joshi




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

let navName = `Tejas `
let midName = `Dattatray `
let sureName = `Joshi`
let Full_nav = navName + midName + sureName
console.log(Full_nav)   // Tejas Dattatray Joshi




// 8) string.trim() <--- return string in which Removes starting and Ending whitespace

let need = "      Tejas           Joshi        Dattaray   "
console.log(need.trim())   // Tejas           Joshi        Dattaray