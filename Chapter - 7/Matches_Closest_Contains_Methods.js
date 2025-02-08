// ******** check the css property "a.matches('css')" in element denoting a
let a = document.getElementById('span1')
console.log(a.matches('.SPAN'))     // true
console.log(a.matches('.box'))      // false

let b = document.getElementById('first')
console.log(b.matches('.SPAN'))     // false
console.log(b.matches('.box'))      // true

let x = document.getElementById('second')
console.log(x.matches('.SPAN'))     // false
console.log(x.matches('.box'))      // true






// ****** start from c including c find the nearest ancestor matching css= "c.closest('css')"
let c = document.getElementById('span1')
console.log(c.closest('.SPAN'))
// <span id="span1" class="SPAN">Span Tag</span> 

console.log(c.closest('.box'))
// <div class="box" id="first"> .... </div>

console.log(c.closest('#first'))
// <div class="box" id="first"> .... </div>

console.log(c.closest('#second'))
// null






// ********* Returns true if elemB is inside elemA (a decendent of elemA) or when elemA == elemB
let d = document.getElementById('first')
let e = document.getElementById('span1')
console.log(d.contains(e))      // true
console.log(d.contains(d))      // true
console.log(e.contains(d))      // false
