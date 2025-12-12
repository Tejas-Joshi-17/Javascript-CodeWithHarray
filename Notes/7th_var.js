// Default value
var varVariable;
console.log(varVariable); // undefined


// Declaring a variable with var
var varVariable = "Hello, World!";
console.log(varVariable); // Hello, World!


// Re-declaring the variable with var
var varVariable = "Hello, again!";
console.log(varVariable); // Hello, again!


// Re-declaring a variable with var in the same scope
var varVariable = "Hello, once more!";
console.log(varVariable); // Hello, once more!


// Re-declaring a variable with var in a different scope
function reDeclareVar() {
    console.log(`${varVariable}`); // undefined
    // The variable is hoisted, but not initialized yet
    var varVariable = "Hello from inside the function!";
    console.log(`${varVariable}`); // Hello from inside the function!
}
reDeclareVar(); 
console.log(`${varVariable}`); // Hello, once more!


// Re-declaring a variable with var in a nested scope
function nestedScopeVar() {
    var varVariable = "Hello from the nested function!";
    console.log(varVariable); // Hello from the nested function!
    function innerFunction() {
        var varVariable = "Hello from the inner function!";
        console.log(varVariable); // Hello from the inner function!
    }
    innerFunction(); // Hello from the inner function!
}
nestedScopeVar(); 


// Re-declaring a variable with var in a block scope
function blockScopeVar() {
    if (true) {
        var varVariable = "Hello from the block scope!";
        console.log(varVariable); // Hello from the block scope!
    }
    console.log(varVariable); // Hello from the block scope!
}
blockScopeVar();


// Re-declaring a variable with var in a loop
function loopScopeVar() {
    for (var i = 0; i < 3; i++) {
        var loopVariable = "Hello from the loop!";
        console.log(loopVariable); 
        // Hello from the loop!
        // Hello from the loop!
        // Hello from the loop!
    }
    console.log(loopVariable); // Hello from the loop!
}
loopScopeVar();


// Hoisting behavior
function hoistingExample() {
    console.log(hoistedVar); // undefined
    var hoistedVar = "This is hoisted!";
    console.log(hoistedVar); // This is hoisted!
}
hoistingExample();  

// Hoisting with function scope
function functionScopeExample() {
    if (true) {
        var scopedVar = "I am inside a function scope!";
    }
    console.log(scopedVar); // I am inside a function scope!
}
functionScopeExample(); // I am inside a function scope!

// Hoisting with global scope
var globalVar = "I am a global variable!";
function globalScopeExample() {
    console.log(globalVar); // I am a global variable!
}
globalScopeExample(); // I am a global variable!

// Hoisting with block scope
function blockScopeExample() {
    if (true) {
        var blockVar = "I am inside a block scope!";
    }
    console.log(blockVar); // I am inside a block scope!
}
blockScopeExample(); // I am inside a block scope!

// Hoisting with function declaration
function functionDeclarationExample() {
    console.log(declaredFunction()); // This is a declared function!
    function declaredFunction() {
        return "This is a declared function!";
    }
} 
functionDeclarationExample(); // This is a declared function!

// Hoisting with function expression
function functionExpressionExample() {
    try {
        console.log(expressionFunction()); // TypeError: expressionFunction is not a function
    } catch (error) {
        console.log(error.message); // expressionFunction is not a function
    }
    var expressionFunction = function() {
        return "This is an expression function!";
    };
}
functionExpressionExample(); // TypeError: expressionFunction is not a function

// Hoisting with variable declaration
function variableDeclarationExample() {
    console.log(hoistedVariable); // undefined
    var hoistedVariable = "This variable is hoisted!";
    console.log(hoistedVariable); // This variable is hoisted!
}
variableDeclarationExample(); // This variable is hoisted!