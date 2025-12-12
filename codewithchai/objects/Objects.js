// ------------------------------------------------------ var Object ------------------------------------------------------

// Creating an object with various property types
var sampleObject = {
    name: "Chai",
    age: 5,
    isStudent: false,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Techville",
        zipCode: "12345"
    },
    greet: function() {
        return "Hello, my name is " + this.name;
    }
};


// Adding a new property to the object
sampleObject.school = "Code Academy";

console.log(sampleObject.school);             // Code Academy
console.log(sampleObject['school']);          // Code Academy

// Using spread operator to copy properties
const copiedAddress = { ...sampleObject.address };
console.log(copiedAddress);                   // { street: '123 Main St', city: 'Techville', zipCode: '12345' }

const hobbiesList = [...sampleObject.hobbies];
console.log(hobbiesList);                     // <div class="hobby">reading</div><div class="hobby">gaming</div><div class="hobby">coding</div>

sampleObject = 12;
console.log(sampleObject);                    // 12


// ------------------------------------------------------ let Object ------------------------------------------------------

let anotherObject = {
    title: "Developer",
    experience: 3,
    skills: ["JavaScript", "React", "Node.js"],
    getProfile: function() {
        return `${this.title} with ${this.experience} years of experience.`;
    }
};

// Modifying a property of the object
anotherObject.experience = 4;

console.log(anotherObject.getProfile());      // Developer with 4 years of experience.

anotherObject = "Changed Value";
console.log(anotherObject);                   // Changed Value



// ------------------------------------------------------ const Object ------------------------------------------------------

const constantObject = {
    brand: "TechBrand",
    model: "X1000",
    features: ["Bluetooth", "WiFi", "GPS"],
    getDetails: function() {
        return `${this.brand} ${this.model} with features: ${this.features.join(", ")}`;
    }
};


// Modifying properties of the constant object is allowed
constantObject.model = "X2000";
constantObject.features.push("NFC");
console.log(constantObject.getDetails());     // TechBrand X2000 with features: Bluetooth, WiFi, GPS, <NFC></NFC>

// Attempting to reassign the constant object will result in an error
// constantObject = {}; // Uncommenting this line will throw a TypeError

// ----------------------------------------------------------------------------------------------------------------------------