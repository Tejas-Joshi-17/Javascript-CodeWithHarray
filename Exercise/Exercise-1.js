// 1) Write a Javascript Program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number
// 2) 100 - (No. of gueses) =  the score of the user 
// 3) The program is exxpected to terminate onces the number is gussed
// 4) Number should be between 1-100.


let target = Math.round(Math.random() * 100) + 1;
let guesses = 0;
let userGuess = parseInt(prompt("Guess the number (between 1 and 100):"));


while (true) {

    if (isNaN(userGuess)) {
        document.write("Please enter a valid number.");
        continue;
    }

    if (userGuess == target) {
        document.write(`<h3 style="color:red">Congratulations! You guessed the correct number in ${guesses} guesses.</h3>`);
        document.write(`<h3>Your score is: ${100 - guesses}</h3>`);
        break;
    } else if (userGuess < target) {
        userGuess = parseInt(prompt(`Number is greater than - ${userGuess}`));
    } else {
        userGuess = parseInt(prompt(`Number is less than - ${userGuess}`));
    }

    guesses++;
}