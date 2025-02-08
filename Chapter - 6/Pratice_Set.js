// 1) Write a program using prompt function to take input from user of its age and use alert to tell him if they can drive or not

let age = prompt("Please Enter Your Age :- ")
age = Number.parseInt(age)

const Can_Drive = (age) =>{
    return age>=18?true:false
}

if(Can_Drive(age)){
    document.body.style.backgroundColor = "green"
    alert("You can Drive!!!")
}else{
    document.body.style.backgroundColor = "red"
    alert("You cannot Drive!!!")
}








// 4) Write a program to change the url to google.com (Redirection) if user enters a number greater than 4

let number = Number.parseInt(prompt("Enter the Number"))

if(number > 4)
    location.href = "https://www.google.com"




// 5) Change the Background of the page to color based on user input through prompt

let color = prompt("Please Enter the Colour :- ");
document.body.style.backgroundColor = color