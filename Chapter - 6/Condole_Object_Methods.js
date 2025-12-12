/* ***** console.assrt(constion)     <---- Used to check a condition, If condition fails then show error in console***** */
console.log(console.assert(55>5))    // return nothing if condition becomes true
console.log(console.assert(55<5))    // print Assertion Failed!! if condtion failed

console.warn("This is a Warning")
console.error("This is a Error Message")
console.log("This is a Special Information")



/*********** console.clear()  <------ Used to clear the console ********** */



/********* console.table(object_name) <--- Print Object Details in Tabular Format ******/

let obj1 = {
        Name : "Tejas",
        Fav_Color : 'B',
        Age : 21,
        Gender : Male,
        Contact_No : 23.45,
        Game : undefined
}

console.table(obj1)

// (index)                 Value
//  Name	          'Tejas'
//  Fav_Color      	    'b'
//  Age	                    21
//  Male	           true
//  Conatact_no    	   23.21
//  Game	          undefined



// ******** alert *****************
alert("This is Alert by Our Website")




let ssa;



// ******** prompt *****************
let a = prompt("What is Your name")
console.log(typeof a)                   // string     <--- Always
alert("You entered Number :- "+a)       // You entererd Number :- Aakash
console.log(a)                          // Aakash
a = Number.parseInt(a)
console.log(typeof a)                   // number  

let b = prompt("What is Your Name :- ", "Tejas")    // <--- 'Tejas' is Bydefault
console.log(typeof b)                               // string     <--- Always
console.log(b)                                      // Tejas <--- if we don't Edit
alert("You entered Number :- "+b)                   // You entererd Number :- Aakash
b = Number.parseInt(b)
console.log(typeof b)                               // number  







// ***************** Confirm **************
let c = confirm("Are you above 21?")    // <--- is Ok -> true     &&& Cancel -> false
console.log(typeof c)   // boolean
console.log(c)          // true     <--- is click on "Ok"
console.log(c)          // False    <--- is click on "Cancel"
alert("You entered Number :- "+c)
