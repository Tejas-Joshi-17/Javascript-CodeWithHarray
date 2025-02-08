// Attributes = id + class



// 1) ele.getAttribute('name')    <-- used to get value of the attribute "name"

let a = document.getElementById('first')
let b = a.getAttribute('class')
console.log(b)      // 'Hey'

let x = document.getElementsByClassName('Hey')
console.log(x)      // HTMLCollection [div#first.Hey, first: div#first.Hey]0: div#first.Heyfirst: div#first.Heylength: 1[[Prototype]]: HTMLCollection
let y = x[0].getAttribute('id')
console.log(y)      // 'first'






// 2) ele.hasAttribute('name')      <--- Used to check for existence of an attribute "name"

let ab = document.getElementById('first')
console.log(ab.hasAttribute('class'))         // true
console.log(ab.hasAttribute('hidden'))        // false
console.log(ab.hasAttribute('style'))         // false

let ba = document.getElementsByClassName('Hey')
console.log(ba)      // HTMLCollection [div#first.Hey, first: div#first.Hey]0: div#first.Heyfirst: div#first.Heylength: 1[[Prototype]]: HTMLCollection
ba = ba[0]
console.log(ba.hasAttribute('id'))          // true
console.log(ba.hasAttribute('hidden'))      // false
console.log(ba.hasAttribute('style'))       // false














// 3) ele.setAttribute('name','value')      <---- Used to Set the value of an Attribute


// Screen :- Japan is my Favorite Country
//           Hey I am First container

// let xy = document.getElementById('first')        // <-- Try in Browser console
// xy.setAttribute('hidden','true')

// Screen :- Japan is my Favorite Country


let pq = document.getElementById('first')
console.log(pq.getAttribute('class'))       // Hey
pq.setAttribute('class','container bg-primary')
console.log(pq.getAttribute('class'))       // container bg-primary











// 4) ele.removeAttribute('name')       <--- Used to remove the attribute from ele

let ssd = document.getElementById('first')
console.log(ssd.hasAttribute('class'))      // true
console.log(ssd.getAttribute('class'))      // container bg-primary

ssd.removeAttribute('class')
console.log(ssd.hasAttribute('class'))      // false
console.log(ssd.getAttribute('class'))      // null










// 5) ele.Attributes        <---- NOT Important










// 6) data-* Attributes

let we = document.getElementById('first')
console.log(we.dataset)
// DOMStringMap {game: 'GTA-ViceCity', player: 'CJ'}
// game: "GTA-ViceCity"
// player: "CJ"

console.log(we.dataset.game)        // GTA-ViceCity
console.log(we.dataset.player)      // CJ