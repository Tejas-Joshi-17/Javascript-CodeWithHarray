// 1) ele.addEventLister(event_name, function)         <---- Used to assign multiple events to HTML tag
// 2) ele.removeEventLister(event_name, function)      <---- Used to remove specific events to HTML tag
// Note :-  "event_name" not use "on-" before "event_name" like  click for onclick  && dblclick for ondblclick



let a = document.getElementById('first')
let b = document.getElementById('second')
let c = document.getElementById('third')
let d = document.getElementById('fourth')

let w = India =() =>{
    alert(`I am From India`)
}

let x = Japan =() =>{
    alert(`I am From Japan`)
}

let y = USA =() =>{
    alert(`I am From USA`)
}

let z = Austrila =() =>{
    alert(`I am From Austrila`)
}

let k = prompt("Where are from you? (India|Japan|USA|Austrila) :- ")

if(k == "India"){
    a.removeEventListener('click',z)
    a.addEventListener('click',y)
    b.addEventListener('click',x)
    a.addEventListener('click',w)
}else if(k == "Japan"){
    a.addEventListener('click',z)
    a.addEventListener('click',y)
    a.addEventListener('click',x)
    b.removeEventListener('click',x)
    a.removeEventListener('click',w)    
}else if(k == "USA"){
    a.removeEventListener('click',z)
    a.addEventListener('click',y)
    a.removeEventListener('click',x)
    a.removeEventListener('click',w)    
    b.addEventListener('click',w)    
}else if(k == "Austrila"){
    a.addEventListener('click',z)
    a.removeEventListener('click',y)
    a.removeEventListener('click',x)
    b.addEventListener('click',x)
    a.removeEventListener('click',w)    
}









let h = document.getElementById('China')

let r = China =(ele)=>{
    console.log(ele.type)                   // click
    console.log(ele.currentTarget)          // <button id="China">China is Enemy</button>
    console.log('China is a Bad Country')   // China is a Bad Country
}

h.addEventListener('click',r)

