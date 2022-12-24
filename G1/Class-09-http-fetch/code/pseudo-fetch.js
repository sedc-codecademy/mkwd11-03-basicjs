// FETCH Request
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Pseudo fetch()

// GET Request (Will give you all the products)
fetch("anhoch_url/product");

const productId = 599877627;
// GET by ID (Will give you one specific product)
fetch(`anhoch_url/product/${productId}`);

const newProduct = {
  title: "Laptop 123123",
  price: 49999,
};
//POST new product (Create new product, ID will be created on the server)
fetch("anhoch_url/product", {
  method: "POST",
  body: JSON.stringify(newProduct),
});

const updatedProduct = {
  title: "Laptop 123123",
  price: 49999,
};

// PUT/PATCH (Update an existing product)
fetch(`anhoch_url/product/${productId}`, {
  method: "PUT",
  body: JSON.stringify(updatedProduct),
});

// DELETE (Delete an existing object)
fetch(`anhoch_url/product/${productId}`, {
  method: "DELETE",
});

// Pseudo handling a request on the backend
// This will be on the BACKEND application

// This function will execute when you
// Make a request towards "anhoch_url/product/id"
// :id can be anything
// Works like an event listener. When the API listens
// to a request, it will execute this function
function getProductById(url) {
  // Parse the ID from the entire URL
  const id = getIdFromUrl(url);
  // Access the Database, and get the product with that ID
  const result = getProductFromDatabase(id);
  // This will eventually return this product to the FRONT END
  // This will be returned as a STRING
  return result;
}
