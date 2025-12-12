
const tinderUser = {}

tinderUser.id = '1234';
tinderUser.name = "Tejas Joshi";
tinderUser.isLoggedIn = true;

console.log(tinderUser);            // { id: '1234', name: 'Tejas Joshi', isLoggedIn: true }

const regularUser = {
    email : "joshitejas188@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Tejas",
            lastname : "Joshi"
        }
    }
}

console.log(regularUser.email);                                 // joshitejas188@gmail.com
console.log(regularUser.fullName.userFullName);                 // { firstName: 'Tejas', lastname: 'Joshi' }
console.log(regularUser.fullName.userFullName.firstName);       // Tejas
console.log(regularUser.fullName.userFullName.lastname);        // Joshi

/* Try accessing a non-existent property */
// console.log(regularUser.lastName.name)      <--- TypeError: Cannot read properties of undefined (reading 'name')
console.log(regularUser.lastName?.name)         // undefined


/* Combination of Objects */
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {...obj1, ...obj2}
console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {... regularUser.fullName.userFullName}
console.log(obj4);      // { firstName: 'Tejas', lastname: 'Joshi' }

let {id} = tinderUser
console.log(id);        // 1234

let {firstName} = regularUser.fullName.userFullName
console.log(firstName);  // Tejas

let {localName} = regularUser.fullName.localName?.userLocalName || {localName: "Default Name"}
console.log(localName);  // Default Name

let globalName = regularUser.fullNameda?.userFullName;
console.log(globalName);  // undefined