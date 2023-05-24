let containerbox = document.querySelector("#products");
let newfilter = [];
async function fetchData(url) {
  try {
    let res = await fetch(url);
    let products = await res.json();
    console.log(products);
    newfilter = [...products];
    let data = products.map((product) => {
      return `<div id="product">
       <p><strong>product id</strong>:${product.id}</p>
       <img src=${product.image} alt="product-${product.id} height="100px" width="100px">
       <p><strong>product Title:</strong>${product.title}
       <p><strong>product price:</strong>${product.price}
       <p id="description"><strong>product Description</strong>:${product.description}
       <p><strong>product Category</strong>:${product.category}
       <p><strong>product rating</strong>:${product.rating.rate}
       <p><strong>product rating count</strong>:${product.rating.count}</p>
      </div>`;
    });
    containerbox.innerHTML = data.join(" ");
  } catch (error) {
    alert("page not found");
  }
}
let filter = document.querySelector("#search");
let btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let filterValue = filter.value;
  let result = newfilter.filter((value) => value.title.includes(filterValue));
  if (result != 0) {
    let selectedProduct = result.map((product) => {
      return `<div id="product">
       <p><strong>product id</strong>:${product.id}</p>
       <img src=${product.image} alt="product-${product.id} height="200px" width="200px">
       <p><strong>product Title:</strong>${product.title}
       <p><strong>product price:</strong>${product.price}
       <p><strong>product Description</strong>:${product.description}
       <p><strong>product Category</strong>:${product.category}
       <p><strong>product rating</strong>:${product.rating.rate}
       <p><strong>product rating count</strong>:${product.rating.count}</p>
     </div>`;
    });
    containerbox.innerHTML = selectedProduct.join(" ");
  } else {
    containerbox.textContent = "product not found";
  }
});
fetchData("https://fakestoreapi.com/products");
let sessionData = sessionStorage;
let username = sessionData.key(0);
let userdata = JSON.parse(sessionStorage.getItem(username));
let anger = document.querySelector("#anger");
console.log(userdata);
if (userdata) {
  anger.textContent = userdata.firstName;
} else {
  anger.textContent = "Guest Account";
}
let profilebtn = document.querySelector("#profile-btn");
profilebtn.addEventListener("click", (e) => {
  e.preventDefault();
  let sessionValue = Object.entries(sessionStorage);
  let value = JSON.parse(sessionValue[0][1]);
  console.log(value);
  window.location.href = `./profile.html?id=${value.id}`;
});
let logout = document.querySelector("#log-out");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  let url = new URLSearchParams(location.search);
  let [id] = url.values();
  sessionStorage.removeItem(id);
  alert("successfully logout");
  window.location.href = "./login.html";
});
