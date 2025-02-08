const object_name = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    male : "true",
    eyeColor:"blue"
};

console.log(typeof object_name); // object

console.log(object_name);
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     male: 'true',
//     eyeColor: 'blue'
//   }

console.log(object_name.firstName);  // John
console.log(object_name.lastName);   // Doe
console.log(object_name.age);        // 50
console.log(object_name.male);       // true
console.log(object_name.eyeColor);   // blue

console.log(Object.keys(object_name).length);    // 5
// Gives length of object


for(let i=0;i<Object.keys(object_name).length;i++){
    console.log(Object.keys(object_name)[i] + " :- " + object_name[Object.keys(object_name)[i]]);
}
// firstName :- John
// lastName :- Doe
// age :- 50
// male :- true
// eyeColor :- blue



for(key in object_name){
    console.log(key + " is :- " + object_name[key]);
}
// firstName is :- John
// lastName is :- Doe
// age is :- 50
// male is :- true
// eyeColor is :- blue






// 1) You cann't change type of const object but can change change type of let & var object

const abc = {
    name : "Tejas",
    Surname : "Joshi",
    Age : 21,
    Male : true,
    contact_no : undefined
}

// abc = 45    // <---- Error Assignment to constant variable.



var xyz = {
    name : "Tejas",
    Surname : "Joshi",
    Age : 21,
    Male : true,
    contact_no : undefined
}
console.log(typeof xyz);    // Object

xyz = 45 
console.log(typeof xyz);    // number





var pqr = {
    name : "Tejas",
    Surname : "Joshi",
    Age : 21,
    Male : true,
    contact_no : undefined
}
console.log(typeof pqr);    // Object

pqr = 45 
console.log(typeof pqr);    // number





// ----2) We can add data & modify data present in object

const K = {
    Name : "Tejas",
    Surname : "Joshi",
    Age : 21,
    Contact_No : 8485835616
}

for(key in K){
    console.log(key + " is :- " + K[key]);
}
// Name is :- Tejas
// Surname is :- Joshi
// Age is :- 21
// Contact_No is :- 8485835616

// ********* Add Data in Object *******
K['Father_Name'] = "Dattataray"

for(key in K){
    console.log(key + " is :- " + K[key]);
}
// Name is :- Tejas
// Surname is :- Joshi
// Age is :- 21
// Contact_No is :- 8485835616
// Father_Name is :- Dattataray



// ********* Modify Data in Object *******
K['Age'] = 98

for(key in K){
    console.log(key + " is :- " + K[key]);
}
// Name is :- Tejas
// Surname is :- Joshi
// Age is :- 98
// Contact_No is :- 8485835616
// Father_Name is :- Dattataray