// form selectors
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const addBtn = document.querySelector("#addBtn");
const formErrorMsg = document.querySelector("#formErrorMsg");

// grocery list selectors
const groceryListEl = document.querySelector(".grocery-list");
const totalListEl = document.querySelector(".total-list");

// checkout selectors
const totalCheckoutEl = document.querySelector(".total-checkout");
const availableCashEl = document.querySelector(".available-cash");
const leftoverCashEl = document.querySelector(".leftover-cash");
const payBtn = document.querySelector("#payBtn");
const resetBtn = document.querySelector("#resetBtn");
const checkoutErrorMsg = document.querySelector("#checkoutErrorMsg");

// Global variables
let groceries = [];
let availableCash = 15000;
let remainingCash = 0;

renderCheckout(availableCash, 0);

// Constructor function to create groceries
function Grocery(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.total = this.price * this.quantity;
}

function addGrocery(name, price, quantity) {
  const grocery = new Grocery(name, price, quantity);

  groceries.push(grocery);
}

function renderGroceryList(groceryList) {
  let groceryHTML = "";
  for (let grocery of groceryList) {
    groceryHTML += `
    <li>${grocery.name} <strong>${grocery.quantity} x ${grocery.price}$ - ${grocery.total}$</strong></li>`;
  }
  groceryListEl.innerHTML = groceryHTML;
  totalListEl.textContent = `Total: ${calculateTotal(groceryList)}$`;
}

// Function that calculates total using a for of loop
function calculateTotal(groceryList) {
  let total = 0;
  for (let grocery of groceryList) {
    total += grocery.price * grocery.quantity;
  }
  return total;
}

// Function that updates checkout view
function renderCheckout(availableCash, total) {
  remainingCash = availableCash - total;
  availableCashEl.textContent = `${availableCash}$`;
  totalCheckoutEl.textContent = `- ${total}$`;
  leftoverCashEl.textContent = `${remainingCash}$`;
}

function resetInputs() {
  nameInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";
}
function validateInputs() {
  if (
    nameInput.value.length < 2 ||
    priceInput.value < 0 ||
    quantityInput.value < 0
  )
    return false;

  return true;
}
function resetOrder() {
  checkoutErrorMsg.textContent = "";
  groceries = [];
  renderGroceryList(groceries);
  renderCheckout(availableCash, 0);
  resetInputs();
}

addBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (!validateInputs()) {
    formErrorMsg.textContent = "Invalid values entered, please try again";
    return;
  }

  formErrorMsg.textContent = "";
  //   Adding grocery and updating list
  addGrocery(name, price, quantity);
  renderGroceryList(groceries, groceryListEl, totalListEl);
  //   Calculating total and updating checkout
  const total = calculateTotal(groceries);
  renderCheckout(availableCash, total);
  //   Resetting inputs for next item
  resetInputs();
});

payBtn.addEventListener("click", function () {
  // checking if the user has remaining cash after order
  if (remainingCash < 0) {
    checkoutErrorMsg.textContent = `Insufficient funds to place order, please try again`;
    return;
  }
  //  updating available cash
  availableCash = remainingCash;
  //   resetting application(order)
  resetOrder();
});

resetBtn.addEventListener("click", resetOrder);
