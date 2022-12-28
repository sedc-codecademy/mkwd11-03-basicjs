const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch all data (posts) from the backend
async function getAllPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  const result = await response.json();
  renderAllPosts(result);
}

// Render the fetched data on the HTML
function renderAllPosts(postArray) {
  const postList = document.createElement("ul");
  for (const post of postArray) {
    postList.innerHTML += `
                <li>
          <div class="card">
            <div class="card__header">
              <h2>${post.title}</h2>
              <h3>${post.id}</h3>
            </div>
            <p class="card__content">
              ${post.body}
            </p>
          </div>
        </li>
        `;
  }
  appContainer.appendChild(postList);
}

// Query Selectors
const appContainer = document.querySelector("#app-container");

// Initialize Application
getAllPosts();

async function fetchAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const result = await response.json();
  console.log(result);
}

fetchAllProducts();