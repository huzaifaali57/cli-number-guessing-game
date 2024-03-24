#! /usr/bin/env node
import inquirer from "inquirer";
// Generate a random number
// Take an input from the user
// Compare the user input with computer generated number and give the output
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to the Number Guessing Game");
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Please enter the number you guess between 1-6:",
    },
]);
if (answers.userGuess == randomNumber) {
    console.log(`Congratulations! Your guess is correct.\nThe Number is ${randomNumber}\n`);
}
else {
    console.log(`Oopss You guessed the wrong number\nThe Correct Answer was ${randomNumber}\n`);
}
