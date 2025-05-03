//showing clicked product
const clickProduct = document.querySelector(".click_product");
const clickProductId = +localStorage.getItem("clickItem");
let items = [];
async function callAllData() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("data", data);
    items = [...data];
    //Show selected item
    selectedItem = items.find((item) => item.id === clickProductId);
    console.log("item", clickProduct);
    const clickDiv = document.createElement("div");
    clickDiv.classList = "clickItemBox";
    clickDiv.innerHTML = `
    <div class="imgBox">
    <img class="clickImg" src=${selectedItem.imgUrl}/>
    </div>
    <div class="itemDetail">
    <h1 class="clickItemName">${selectedItem.name}</h1>
    <p class="clickItemDes">${selectedItem.description}</p>
    <p class="clickItemPrice">$${selectedItem.price}</p>
    <button class="btn">Add To Cart</button>
    </div>
    `;
    clickProduct.append(clickDiv);
    //Click Add To Cart button
    let cartArray = JSON.parse(localStorage.getItem("cartList")) || [];
    const btnTag = document.querySelector(".btn");
    console.log(btnTag);
    btnTag.addEventListener("click", () => {
      cartArray.push({ ...selectedItem, qty: 1 });
      localStorage.setItem("cartList", JSON.stringify(cartArray));
      window.location.replace("/E-commerce(Task-1)/frontend/public/shop.html");
      //localStorage.removeItem("cartList");
    });
  } catch (err) {
    console.log(err);
  }
}
callAllData();
