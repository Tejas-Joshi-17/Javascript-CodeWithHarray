document.getElementById('first')
{/* <nav class="navbar navbar-expand-lg bg-light" id="first"> ..... </nav> */}

document.querySelectorAll('#first')
// NodeList
// 0: nav#first.navbar.navbar-expand-lg.bg-light

document.querySelector('#first')
{/* <nav class="navbar navbar-expand-lg bg-light" id="first"> ..... </nav> */}








document.getElementsByClassName('nav-item')
// HTMLCollection(4) [li.nav-item, li.nav-item, li.nav-item.dropdown, li.nav-item]

document.getElementsByClassName('nav-item')[0]
{/* <li class="nav-item"> ..... </li> */}

document.getElementsByClassName('nav-item')[1]
{/* <li class="nav-item"> ..... </li> */}

document.getElementsByClassName('nav-item')[2]
{/* <li class="nav-item dropdown"> ..... </li> */}

document.querySelectorAll('.nav-item')
// HTMLCollection(4) [li.nav-item, li.nav-item, li.nav-item.dropdown, li.nav-item]

document.querySelectorAll('.nav-item')[0]
{/* <li class="nav-item"> ..... </li> */}

document.querySelectorAll('.nav-item')[1]
{/* <li class="nav-item"> ..... </li> */}

document.querySelectorAll('.nav-item')[2]
{/* <li class="nav-item dropdown"> ..... </li> */}

document.querySelector('.nav-item')
{/* <li class="nav-item"> ..... </li> */}










document.getElementsByTagName('a')
// HTMLCollection(8) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.nav-link.disabled]

document.getElementsByTagName('a')[0]
{/* <a class=​"navbar-brand" href=​"#">​Navbar​</a>​ */}

document.getElementsByTagName('a')[1]
{/* <a class=​"nav-link active" aria-current=​"page" href=​"#">​Home​</a>​ */}

document.querySelectorAll('a')
// NodeList(8) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.nav-link.disabled]

document.querySelectorAll('a')[0]
{/* <a class=​"navbar-brand" href=​"#">​Navbar​</a>​ */}

document.querySelectorAll('a')[1]
{/* <a class=​"nav-link active" aria-current=​"page" href=​"#">​Home​</a>​ */}

document.querySelector('a')
{/* <a class=​"navbar-brand" href=​"#">​Navbar​</a>​ */}

