
// 1) console.log() <--- shows the element DOM tree

console.log(document.getElementsByTagName('span'))
// HTMLCollection [span]
// 0: span
// length: 1
console.log(document.getElementsByTagName('span')[0])   // <span>Hey I am span</span>







// 2) console.dir() <--- shows the element as an object with the properties

console.dir(document.getElementsByTagName('span'))
// HTMLCollection (1)
// 0: span
// length: 1
console.dir(document.getElementsByTagName('span')[0])   // all properties of <span> tag










// 3) tagName <--- used to read tag name of an element
//            <--- Only Exits for element nodes

console.log(document.body.firstElementChild.tagName)    // SPAN




// 4) nodeName  <--- used to read tag name of an element
//              <--- defined for any node(text, Element, commants, etc)

console.log(document.body.firstElementChild.nodeName)    // SPAN
console.log(document.body.firstChild.nodeName)           // #text




// 5) innerHTML <--- Valid for element nodes only
//              <--- Allows to get the HTML inside the element as a string

document.body.getElementsByTagName('span')[0].innerHTML   // 'Hey <b>I</b> am span'
document.body.getElementsByTagName('span')[0].innerHTML = 'H<b>ell</b>o World'
document.body.getElementsByTagName('span')[0].innerHTML   // 'H<b>ell</b>o World'



// 5) outerHTML <--- Valid for element nodes only
//              <--- innerHTML + the element itself

document.body.getElementsByTagName('span')[0].outerHTML   // '<span>H<b>ell</b>o World</span>'
document.body.getElementsByTagName('span')[0].innerHTML = '<b>India</b> is my Country'
document.body.getElementsByTagName('span')[0].outerHTML   // '<span><b>India</b> is my Country</span>'



// 6) nodeValue OR data    <---- innerHTML is valid only for element nodes
//                         <---- for other node types we can use nodeValue OR data

document.body.firstChild                // Hello World
document.body.firstChild.nodeValue      // '\n    Hello World\n    '
document.body.firstChild.data           // '\n    Hello World\n    '






// 7) textContent    <---- Provides access to the text inside the element :  Only text - all tags

document.body.getElementsByTagName('span')[0].textContent   // 'India is my Country'
document.body.firstChild.textContent                        // '\n    Hello World\n    '

















// 8) "hidden" attribute <---- Specify whether the element is visible or not

// Screen :- Hello World India is my country

let w = document.getElementById('first')
w.hidden = true
// Screen :- Hello World 

w.hidden = false
// Screen :- Hello World India is my country




/********* Try to use in browser console ************** */
// document.getElementById('first').style.color = 'red'
// document.getElementById('first').style.backgroundColor = 'yellow'
