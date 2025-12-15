// --------------------------------------------------------------------------------------------------------------------------------

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2); 
}

addTwoNumbers;                  // <---- Refers to the function itself without invoking it
addTwoNumbers(3, 5);            // 8
addTwoNumbers(3, "a");          // 3
addTwoNumbers(3, undefined);    // NaN
addTwoNumbers(3, null);         // 3

const result = addTwoNumbers(10, 15);       // 25
console.log(`Result is :- ${result}`);      // Result is :- undefined


// --------------------------------------------------------------------------------------------------------------------------------

// userName != (userName === "undefined")
function loginUserMessage(userName) {
  if (!userName) {
    console.log(`Please provide a user name`);
    return;
  }
  return `${userName} just logged in`;
}

console.log(loginUserMessage(`Tejas Joshi`));   // Tejas Joshi just logged in
console.log(loginUserMessage());         
// Please provide a user name
// undefined

// --------------------------------------------------------------------------------------------------------------------------------

function greetingMessage(userName= `Sachin Tendulkar`) {
  return `${userName} just logged in`;
}

console.log(greetingMessage(`Virat Kohli`));      // Virat Kohli just logged in
console.log(greetingMessage());                   // Sachin Tendulkar just logged in

// --------------------------------------------------------------------------------------------------------------------------------