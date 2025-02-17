const objectName = {
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
    male : "true",
    eyeColor: "blue"
};

console.log(typeof objectName); // object

console.log(objectName);
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     male: 'true',
//     eyeColor: 'blue'
//   }

console.log(objectName.firstName);  // John
console.log(objectName.lastName);   // Doe
console.log(objectName.age);        // 50
console.log(objectName.male);       // true
console.log(objectName.eyeColor);   // blue

console.log(Object.keys(objectName).length);    // 5
// Gives length of object


for(let i=0; i<Object.keys(objectName).length; i++){
    console.log(Object.keys(objectName)[i] + " :- " + objectName[Object.keys(objectName)[i]]);
}
// firstName :- John
// lastName :- Doe
// age :- 50
// male :- true
// eyeColor :- blue



for(key in objectName){
    console.log(key + " is :- " + objectName[key]);
}
// firstName is :- John
// lastName is :- Doe
// age is :- 50
// male is :- true
// eyeColor is :- blue






// 1) You cann't change type of const object but can change change type of let & var object

const abc = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    male : true,
    contactNo : undefined
}

// abc = 45    // <---- Error Assignment to constant variable.



var xyz = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    male : true,
    contactNo : undefined
}
console.log(typeof xyz);    // Object

xyz = 45 
console.log(typeof xyz);    // number





var pqr = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    male : true,
    contactNo : undefined
}
console.log(typeof pqr);    // Object

pqr = 45 
console.log(typeof pqr);    // number





// ----2) We can add data & modify data present in object

const K = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    contactNo : 8485835616
}

for(key in K){
    console.log(key + " is :- " + K[key]);
}
// name is :- Tejas
// surname is :- Joshi
// age is :- 21
// contactNo is :- 8485835616

// ********* Add Data in Object *******
K['fatherName'] = "Dattataray"

for(key in K){
    console.log(key + " is :- " + K[key]);
}
// name is :- Tejas
// surname is :- Joshi
// age is :- 21
// contactNo is :- 8485835616
// fatherName is :- Dattataray



// ********* Modify Data in Object *******
K['age'] = 98

for(key in K){
    console.log(key + " is :- " + K[key]);
}
// name is :- Tejas
// surname is :- Joshi
// age is :- 98
// contactNo is :- 8485835616
// fatherName is :- Dattataray