// Prompt the user for date, month, and year

let date = prompt("Enter the day of the month (1 - 31): ");
let month = prompt("Enter the month (1 - 12)");
let year = prompt("Enter the year (e.g., 2025): ");

// Create a new Date object with the provided date, month, and year
// Note: Months are 0-indexed in JavaScript, so we subtract 1 from the month

let userDate = new Date(year, month-1, date);

// Array of days of the week
let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Get the day of the week for the entered date
let dayOfWeek = daysOfWeek[userDate.getDay()];

// Alert the result
alert(`The day on ${date}/${month}/${year} is: ${dayOfWeek}}`)

