console.log(document.body);
// <body> ...... </body>

console.log(document.body.childNodes);
// NodeList(9) [text, div, text, script, text, comment, text, script, text]

console.log(document.body.childNodes[0]);
// #text

console.log(document.body.childNodes[1]);
/* <div> ...... </div> */

console.log(typeof document.body.childNodes);
// object

let arr = Array.from(document.body.childNodes)
// undefined

console.log(arr);
// (9) [text, div, text, script, text, comment, text, script, text]

console.log(arr[0]);
// #text

console.log(arr[1]);
/* <div> ...... </div> */

let brr = Array.from(arr[1].childNodes)
// (5) [text, p, text, span, text]

console.log(brr[1]);
// <p>This is me and I am Great</p>

console.log(brr[1].textContent);
// 'This is me and I am Great'