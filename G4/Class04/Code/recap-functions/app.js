console.log("It works");

// Defining a function
function createFullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  //   Quicker return
  //   return `${firstName} ${lastName}`;

  return fullName;

  //   Code doesn't get executed below return
  console.log("This will not get executed");
}

// Calling a function
let trainerName = createFullName("Borche", "Borisovski");
let assisstantName = createFullName("Danilo", "Borozan");

console.log(trainerName, assisstantName);

// Default parameters ( always put default parameters on the end in the parameter list)
function calculateTax(income, month, taxRate = 20) {
  console.log(taxRate);
  return income * (taxRate / 100);
}

let borcheTax = calculateTax(5000, "march");

console.log(`Borche has a tax of ${borcheTax}`);

let daniloTax = calculateTax(15000, "january", 3);

console.log(`Danilo has a tax of ${daniloTax}`);

// Homework one solution

/*
Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.
*/

// 1. No Function Solution

let phonePrice = 119.95;

let taxRatePercent = 5;

let phoneNumber = 30;

let phonePriceWithTax = phonePrice + phonePrice * (taxRatePercent / 100);

let phonesTotalCost = phoneNumber * phonePriceWithTax;

console.log(`The total cost for the phones is: ${phonesTotalCost}`);

// 2. Function Solution

function calculatePhonesCost(phoneNumber, phonePrice, taxRatePercent) {
  let total = phoneNumber * (phonePrice + phonePrice * (taxRatePercent / 100));

  return total;
}

let samungPhonesTotal = calculatePhonesCost(30, 119.95, 5);

console.log(`The total cost for the samsung phones is: ${samungPhonesTotal}`);

let iphonePhonesCost = calculatePhonesCost(100, 2000, 30);

console.log(`The total cost for the iphones is: ${iphonePhonesCost}`);
