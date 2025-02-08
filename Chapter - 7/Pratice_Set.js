
// 1) Create a navbar and change the color of its first element to red
let a = document.querySelectorAll('.navbar-brand')
console.log(a)
// NodeList(1)
// 0: a.navbar-brand
// length: 1
a[0].style.color = 'red'






// 2) Create a table wthout tbody. Now use 'View Page Source' button to check whether it has a tbody or not
let z = document.querySelector('.table')
console.log(z.tBodies)  // <---- HTMLCollection[] <--- empty if there is not <tbody>







//3) Create an element with 3 children. Now change the color of first and last element to green
let p = z.firstElementChild.rows[0].firstElementChild
p.style.color = 'violet'
let q = p.nextElementSibling
q.style.color = 'red'
let r = z.firstElementChild.rows[0].lastElementChild
r.style.color = 'yellow'








// 4) Write a javascript code to change background of all <li> tags to cyan
let ab = Array.from(document.getElementsByClassName('nav-item'))
ab.forEach(element => {
    element.style.backgroundColor = 'cyan'
});









// 4) Which of the following is used to look for the farthest ancestor that matches a given CSS selector
// (a) matches          (b) closest            (c) contains            (d) None of these
// Answer :- None of these
//          closest :- Used fot find nearest ancestors