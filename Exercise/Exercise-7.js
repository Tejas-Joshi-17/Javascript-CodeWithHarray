/*
Create a Javascript program capable of generating a password which contains atleast one LowerCase,
one UpperCase & one Special Character 
Create a Password Class to achieve the same
*/

class Password {
    constructor() {
        console.log("Welcome to Password Generator");
        this.pass = "";
    }
    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()";
        if (len < 3) {
            console.log("Your password should be atleast 3 characters long");
        } else {
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass +=
                    numbers[Math.floor(Math.random() * numbers.length)];
                this.pass +=
                    special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
            this.pass = this.pass.substr(0, len);
            return this.pass;
        }
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const lengthInput = document.getElementById("title").value;
    const length = parseInt(lengthInput);
    
    if (isNaN(length) || length < 3) {
        alert("Please enter a valid password length of at least 3.");
        return;
    }

    let p = new Password();
    document.getElementById("generated").value = `${p.generatePassword(length)}`;
});
