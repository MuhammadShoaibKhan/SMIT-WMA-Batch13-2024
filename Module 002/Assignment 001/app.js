// Please following these instructions

//     Ask user percentage of Matriculation
//     Ask user percentage of entry test

// Calculate percentage and if user avg percentage is less than 70, alert him, user is not eligible otherwise user is eligible


let matricPercentage = parseFloat(prompt("Enter your Matriculation percentage"));
let entryTestPercentage = parseFloat(prompt("Enter your Entry Test percentage"));

if(isNaN(matricPercentage) || isNaN(entryTestPercentage)){
    alert("Invalid input! Please enter valid percentage.");
} else{
    let averagePercentage = (matricPercentage+entryTestPercentage)/2;

if(averagePercentage<70)
{
    alert("You are not eligible, your average percentage is less than 70 which is "+averagePercentage);
} else{
    alert("Congratulations! you are eligible, your average percentage is: " + averagePercentage);
}
}

