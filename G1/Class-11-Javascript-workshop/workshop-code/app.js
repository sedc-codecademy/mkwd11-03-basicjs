const BASE_URL = "https://fakestoreapi.com/products";
let productArray = [];

// Query Selectors
const appContainer = document.querySelector("#app-container");
const renderListBtn = document.querySelector("#render-list-btn");
const productIdInput = document.querySelector("#product-id-input");
const productIdBtn = document.querySelector("#product-id-btn");

// Function Definitions
// 1. Create a function that makes an HTTP request to the Fake Store API.
async function getAllProducts() {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  return result;
}

// 2. Create a function that renders the results returned by the HTTP request function.
function renderAllProducts(products) {
  // Reset the HTML of appContainer. Just in case.
  appContainer.innerHTML = "";
  const productList = document.createElement("ul");
  productList.classList.add("product-list");
  for (const product of products) {
    productList.innerHTML += `
        <li class="product-item">
            <h3 class="card-title">${product.title}</h3>
            <h4 class="card-subtitle">${product.price}</h4>
            <button id="${product.id}">Read More</button>
        </li>
        `;
  }
  appContainer.appendChild(productList);

  // Add Event Listeners
  /* 
  5. Add a click event listener to each LI. When that LI is clicked, it should make a call for a single product
  using its ID and render the title, price, description and image of the product.
  */

  /* 
  In this assignment, since the <li> contain children elements (h3, h4, button) we decided to instead add an event listener
  to the button. This way, we can avoid worrying about event bubbling.

  The problem with adding the event listener on the <li> in this scenario is that when we click on the h3 or h4 for example,
  the event listener will still pop off, but it will not contain the ID of the product because that ID is set to the <li>
  */

  const listItems = document.querySelectorAll(".product-item");
  for (const item of listItems) {
    /* 
     The button is the last child of the list item
     I am adding an event listener to ALL buttons in those list items (NOT the entire item list)
     This is how I make sure that the getSingleProduct() function will be executed ONLY
     when I click on the button and not anywhere else 
     */
    const btn = item.lastElementChild;
    btn.addEventListener("click", async function (event) {
      /*
      You will notice that this anonymous function is async.
      This is done because getSingleProduct() is also an async function, thus it ALWAYS returns
      its result wrapped in a promise. To unpack a promise we must use await, and we can only use await within
      an async function.
      Because of this, the anonymous function must be async.
      */
      const id = event.target.id;
      const product = await getSingleProduct(id);
      renderSingleProduct(product);
    });
  }
}

// 3. Create a function that calculates the total price of all products and renders it on the screen.
function calculateTotalPrice(productArray) {
  let total = 0;
  for (const product of productArray) {
    total += product.price;
  }
  // Rounds total to 2 decimals
  total = total.toFixed(2);
  const priceContainer = document.createElement("p");
  priceContainer.innerHTML = `Total price is: ${total}`;
  appContainer.appendChild(priceContainer);
}

// 4. Create a function that finds the highest rated product.
/*
The logic here is the same as with the highest number in an array.
In that assignment, we started off by fixating a single number as the initial highest number.



*/
function getHighestRatedProduct(products) {
  /*
  In this one, we start off by also fixating an initial highest rated object. It's easiest to go with the
  first object in the array. products[0]
  We fixate an entire object becaust we need to compare entire objects, and RETURN an entire object. 
  (or console.log it)
  */
  let highest = products[0];
  for (const product of products) {
    /*
    Afterwards, in every iteration we check whether the current product in the iteration
    is rated higher than the one currently saved in highest.
    */
    if (product.rating.rate > highest.rating.rate) {
      highest = product;
    }
  }
  console.log(highest);
}

// Function to get a single product. Part of assignment #5.
async function getSingleProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const result = await response.json();
  return result;
}

// Function to render a single product. Part of assignment #5.
function renderSingleProduct(product) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");
  productContainer.innerHTML = `
  <h3 class="product-title">${product.title}</h3>
  <h4 class="product-subtitle">${product.price}</h4>
  <img src="${product.image}" alt="" class="product-image">
  <p class="product-description">${product.description}</p>
  `;
  appContainer.innerHTML = "";
  appContainer.appendChild(productContainer);
}

// 6. Add a button that cleans up the DOM and re-renders the list of products
renderListBtn.addEventListener("click", function (event) {
  // We can simply call the initApplication function here.
  initApplication();
});

/*
Add a search functionality. It should take the ID of a product from the input and use the functions from requirement #5 to render a single product.
*/
productIdBtn.addEventListener("click", async function (event) {
  const productId = Number(productIdInput.value);
  /* 
  We want to make sure that the user entered a number. So we check if Number() converted
  the value to a actual number or NaN.
  We also want to make sure it's a number higher than 0 because the first ID is 1.
  */
  if (!Number.isNaN(productId) && productId > 0) {
    /* Just like in the bonus example, this anonymous function MUST be async because we are going to
    make an HTTP request here and use await */ 
    const product = await getSingleProduct(productId);
    renderSingleProduct(product);
  }
});

// This is the MAIN function of the application
// This is where we call all the functions
// It will simulate a global scope
// This exists so that we can use await in the "global" scope
async function initApplication() {
  productArray = await getAllProducts();
  renderAllProducts(productArray);
  calculateTotalPrice(productArray);
  getHighestRatedProduct(productArray);
}

// Initialize the application
initApplication();
