function calculateLoan(amount, months, interest, name) {
    console.log("Amount: " + amount);
    console.log("Months: " + months);
    console.log("Interest: " + interest);
    console.log("Name: " + name);
}

// calculateLoan(1000, 12, 5, "Trajan"); // all params are handed to the function

// calculateLoan(2000, 24, 10, "Todor", "SayHello", 1000); // here we have extra params

// calculateLoan(3000, 36); // here we have only 2 params 

// calculateLoan();


function makeRequest(url, username, password, timeout = 100) {
    console.log(url);
    console.log(username);
    console.log(password);
    console.log(timeout);
}

makeRequest("asd", "poiu", "123");


function calculateLoan(amount, name, months = 24, interest = 5) {
    console.log("Amount: " + amount);
    console.log("Months: " + months);
    console.log("Interest: " + interest);
    console.log("Name: " + name);
}

calculateLoan(1000, "Trajan");
