

// 1) Use a Free API from the internet & Feed your app with live data

let url = "https://api.thecatapi.com/v1/images/search?limit=12"
let response = fetch(url)
response.then((v) => {
        return v.json();
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].id}</h5>
                                        <p class="card-text"> Description  is ${contests[item].description}</p>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})


// // 2) Create a Note Saving which stores your note to localStorage
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// // 3) Repeat the local question-2 & Fetch the note which was saved
// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }


// // 4) Delete the note in the previous question
// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
