console.log(document.body.firstElementChild)    // <div class="container my-4"> ..... </div>

let table = document.body.firstElementChild.firstElementChild
console.log(table)   // <table class="table">.....</table>

console.log(table.rows)     // <--- Collection of tr elements
// HTMLCollection(4) [tr, tr, tr, tr]
// 0: tr
// 1: tr
// 2: tr
// 3: tr
// length: 4


console.log(table.caption)     // <--- refrence to caption of <table>
// <caption>Table from bootstrap</caption> 



console.log(table.tHead)     // <--- refrence to tHead of <table>
// <tHead></tHead> 

console.log(table.tHead.firstElementChild)    // <tr> ... </tr>
console.log(table.tHead.lastElementChild)     // <tr> ... </tr>



console.log(table.tFoot)     // <--- refrence to tFoot of <table>
// null    <-- tFoot is not present in our table



console.log(table.tBodies)     
// HTMLCollection [tbody]
// 0: tbody
// length: 1




console.log(table.rows[0].cells)    // HTMLCollection(4) [th, th, th, th]
console.log(table.rows[1].cells)    // HTMLCollection(4) [th, td, td, td]