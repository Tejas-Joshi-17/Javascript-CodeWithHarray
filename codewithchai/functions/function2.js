// --------------------------------------------------------------------------------------------------------------------------------

function calculateCartPrice(item1, item2, ...remainigItems) {
  console.log(`First Item is :- ${item1}`);
  console.log(`Second Item is :- ${item2}`);
  console.log(`Remaining Items are :- ${remainigItems.toString()}`);
  console.log(`Remaining Items are :- ${typeof(remainigItems)}`);
  let totalPrice = item1 + item2;
  for (const element of remainigItems) {
    totalPrice += element;
  }
  return totalPrice;
}

let totalCartPrice = calculateCartPrice(100, 200, 300, 400, 500);
console.log(`Total Price is :- ${totalCartPrice}`); 
// First Item is :- 100
// Second Item is :- 200
// Remaining Items are :- 300,400,500
// Remaining Items are :- object
// Total Price is :- 1500

// --------------------------------------------------------------------------------------------------------------------------------


function handleObject(anyObject){
  console.log(`Username is :- ${anyObject.userName} & price is :- ${anyObject.price}`);
}

const user = {
  userName: "Chai",
  price: 2500
};

handleObject(user);   // Username is :- Chai & price is :- 2500
handleObject({        // Username is :- Chai & price is :- undefined
  userName: "Chai"
}); 


// --------------------------------------------------------------------------------------------------------------------------------


function returnSecondValue(getArray){
  return getArray[1];
}

let array1 = [10, 20, 30, 40, 50];
let secondValue1 = returnSecondValue(array1);
console.log(`Second Value is :- ${secondValue1}`);   // Second Value is :- 20

let secondValue2 = returnSecondValue([100, 200, 300, 400]);
console.log(`Second Value is :- ${secondValue2}`);   // Second Value is :- 200

// --------------------------------------------------------------------------------------------------------------------------------