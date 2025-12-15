// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const array = [1, 2, 3, 4, 5]

const initialValue = 0;
const total = array.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(`previous value :- ${previousValue}, current value :- ${currentValue}`);
  return previousValue + currentValue
}, initialValue);

console.log(`Total Sum is :- ${total}`)
// previous value :- 0, current value :- 1
// previous value :- 1, current value :- 2
// previous value :- 3, current value :- 3
// previous value :- 6, current value :- 4
// previous value :- 10, current value :- 5
// Total Sum is :- 15


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const courses = [
  {
    course : "Javascript",
    price : 1999
  },
  {
    course : "Java",
    price : 4999
  },
  {
    course : "C",
    price : 5999
  },
  {
    course : "C++",
    price : 7999
  }
]

const alreadyExistPaidAmount = 0;
const priceToPay = courses.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(`Pursing Course :- ${currentValue.course}, price :- ${currentValue.price}`)
  return previousValue + currentValue.price;
}, alreadyExistPaidAmount);

console.log(`Total Courses Amount :- ${priceToPay}`)
// Pursing Course :- Javascript, price :- 1999
// Pursing Course :- Java, price :- 4999
// Pursing Course :- C, price :- 5999
// Pursing Course :- C++, price :- 7999
// Total Courses Amount :- 20996


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------