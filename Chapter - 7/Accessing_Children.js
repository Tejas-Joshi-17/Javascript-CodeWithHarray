document.body
// <body> ...... </body>

document.body.childNodes
// NodeList(9) [text, div, text, script, text, comment, text, script, text]

document.body.childNodes[0]
// #text

document.body.childNodes[1]
/* <div> ...... </div> */

typeof document.body.childNodes
// object

let arr = Array.from(document.body.childNodes)
// undefined

arr
// (9) [text, div, text, script, text, comment, text, script, text]

arr[0]
// #text

arr[1]
/* <div> ...... </div> */

let brr = Array.from(arr[1].childNodes)
// (5) [text, p, text, span, text]

brr[1]
// <p>This is me and I am Great</p>

brr[1].textContent
// 'This is me and I am Great'