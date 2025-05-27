let cartArray = JSON.parse(localStorage.getItem("cartList")) || [];

if (cartArray.length > 0) {
  const cartNotice = document.querySelector(".haveCartItem");
  cartNotice.style.display = "block";
}

// function for clickingItem
const handleClick = (e) => {
  const clickItemId = e.target.id;
  console.log("id", clickItemId);
  localStorage.setItem("clickItem", clickItemId);
  window.location.replace(
    "/E-commerce(Task-1)/frontend/public/productDetail.html"
  );
};

// function for cardComponent
function createCardComponent(title, img, price, id) {
  const collection_item = document.createElement("div");
  collection_item.className = "card2";
  collection_item.innerHTML = `
        <img class="shoppingImg" id=${id} src=${img}/>
        <div class="box">
          <h4 class="shoppingTitle">${title}</h4>
          <p class="shoppingPrice">$${price}</p>     
        </div>
          
       `;
  collection_item.addEventListener("click", handleClick);
  return collection_item;
}
//Show all products
//fetch all data and put to products
const allProducts = document.querySelector(".container2");
let products = [];
async function callAllData() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("data", data);
    products = [...data];
    products.forEach((product) => {
      const item = createCardComponent(
        product.name,
        product.imgUrl,
        product.price,
        product.id
      );
      allProducts.append(item);
    });
  } catch (err) {
    console.log(err);
  }
}
callAllData();

// Searching with product name and filtering products
const searchItemTag = document.querySelector(".search_item");
searchItemTag.addEventListener("keyup", (e) => {
  allProducts.innerHTML = "";
  const searchItem = e.target.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchItem)
  );
  const productToShow = filteredProducts.length > 0;
  if (productToShow) {
    filteredProducts.forEach((product) => {
      const filteredItem = createCardComponent(
        product.name,
        product.imgUrl,
        product.price
      );
      allProducts.append(filteredItem);
    });
  }
});
