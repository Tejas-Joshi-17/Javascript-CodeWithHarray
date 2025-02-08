console.log(document.body.firstChild)   // #text
console.log(document.body.lastChild)    // <script> ........ </script>

console.log(document.body.firstElementChild)    // <div> ..... </div>
console.log(document.body.lastElementChild)     // <script> ........ </script>


let a = document.body.firstElementChild.firstElementChild
console.log(a)      // <div class="first">First</div>

a = document.body.firstElementChild.lastElementChild
console.log(a)      // <div class="second">Second</div>




let c = document.body.firstElementChild
console.log(c)      // <div> ....... </div>

let d = c.parentNode    // <body> ...... </body>
console.log(d)

d = c.parentElement    // <body> ...... </body>
console.log(d)


let e =c.firstElementChild.nextElementSibling
console.log(e)      // <div class="second">Second</div>
let p = c.firstElementChild.nextSibling
console.log(p)      // #text

let k = e.previousElementSibling
console.log(k)      // <div class="first">First</div>
let q = e.previousSibling
console.log(q)      // #text

k = e.nextElementSibling
console.log(k)      // <div class="third">Third</div>
let x = e.nextSibling
console.log(x)      // #text





let m = document.body.firstElementChild
m = m.hasChildNodes()
console.log(m)  // true

m = document.body.lastElementChild
m = m.hasChildNodes()
console.log(m)  // false