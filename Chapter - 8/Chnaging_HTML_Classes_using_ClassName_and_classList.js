// 1) className     <---- used to access Classes of the HTML tag



let a = document.getElementById('first')        // undefined
a.className                                     // 'red'    <--- Already defined class od id = "first"
a.className = 'orange'                          // 'orange'
a.className = 'orange text-dark'                // 'orange text-dark'
a.className = 'yellow'                          // 'yellow'
a.className = 'red text-dark'                   // 'red text-dark'




let b = document.getElementById('second')       // undefined
b.className                                     // 'yellow'    <--- Already defined class od id = "second"
b.className = 'red'                             // 'red'
b.className = 'orange text-dark'                // 'orange text-dark'








// 2) classList         <--- Used to get List of classes HTML tag contains


// -I>  ele.classList.add("class_name")         <--- Add the class in HTML tag
// -II> ele.classList.remove("class_name")      <--- Remove the class from HTML tag

let a = document.getElementById('first')     // undefined
a.className                                  // 'red'
a.className = 'orange'                       // 'orange'
a.className = 'red text-dark'                // 'red text-dark'
a.classList                                  // DOMTokenList(2) ['red', 'text-dark', value: 'red text-dark']0: "red"1: "text-dark"length: 2value: "red text-dark"[[Prototype]]: DOMTokenList
a.classList.add('orange')                    // undefined
a.classList                                  // DOMTokenList(3) ['red', 'text-dark', 'orange', value: 'red text-dark orange']0: "red"1: "text-dark"2: "orange"length: 3value: "red text-dark orange"[[Prototype]]: DOMTokenList
a.classList.remove('text-dark')              // undefined
a.classList                                  // DOMTokenList(2) ['red', 'orange', value: 'red orange']








// -III> ele.classList.toggle("class_name")     <--- Add the class if it doesn't exist oterwise remove it.

let a = document.getElementById('first')      // undefined
a.className                                   // 'red'
a.classList                                   // DOMTokenList ['red', value: 'red']
a.classList.add('text-dark')                  // undefined
a.classList                                   // DOMTokenList(2) ['red', 'text-dark', value: 'red text-dark']
a.classList.toggle('orange')                  // true
a.classList                                   // DOMTokenList(3) ['red', 'text-dark', 'orange', value: 'red text-dark orange']
a.classList.toggle('orange')                  // false
a.classList                                   // DOMTokenList(2) ['red', 'text-dark', value: 'red text-dark']




// -IV> ele.classList.contains("class_name")   <-- Check for given class, If present returns true else false

let a = document.getElementById('first')        // undefined
a.className                                     // 'orange text-dark'
let b = a.classList.contains('orange')          // undefined
b                                               // true
let b = a.classList.contains('text-dark')       // undefined
b                                               // true
let b = a.classList.contains('yellow')          // undefined
b                                               // false