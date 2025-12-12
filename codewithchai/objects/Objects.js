const hobbies = Symbol("hobbies");

const testObject = {
    "name" : 'Tejas Joshi',
    age : 21,
    isStudent : true,
    [hobbies] : 'Reading',              // symbolic key
    "skills" : ['JavaScript', 'HTML', 'CSS', 'ReactJS'],
    "address" : {
        "street" : '123 Main St',
        "city" : 'Anytown',
        "state" : 'CA',
        zip : '12345'
    }
}

console.log(testObject.name);           // Tejas Joshi
console.log(testObject['name']);        // Tejas Joshi

console.log(testObject.age);            // 21
console.log(testObject['age']);         // 21

console.log(testObject.isStudent);      // true
console.log(testObject['isStudent']);   // true

console.log(testObject.skills);         // [ 'JavaScript', 'HTML', 'CSS', 'ReactJS' ]
console.log(testObject['skills']);      // [ 'JavaScript', 'HTML', 'CSS', 'ReactJS' ]

console.log(testObject.address);        // { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }
console.log(testObject['address']);     // { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }

console.log(testObject.address.city);           // Anytown
console.log(testObject['address']['city']);     // Anytown

console.log(testObject[hobbies]);               // Reading


// Adding a new property to the object
testObject.greeting = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

console.log(testObject.greeting());   // Hello, my name is Tejas Joshi and I am 21 years old!

console.log(...testObject.skills);       // JavaScript HTML CSS ReactJS
console.log({...testObject.address});    // { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }
