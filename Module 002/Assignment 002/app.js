// script.js
const number = parseInt(prompt("Enter a number to generate its table:"));

if (!isNaN(number)) {
    console.log(`Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
