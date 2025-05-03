const cartTag = document.querySelector(".cartBox");
let cartArray = JSON.parse(localStorage.getItem("cartList")) || [];
if (cartArray.length === 0) {
  const emptyCart = document.createElement("div");
  emptyCart.className = "emptyCardDiv";
  emptyCart.innerHTML = `
  <div >
    <img class="emptyCartImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4VGZNjFdHpJNoRGR6EYCvf02yRx2gkBMbCJQf3dcCGiI5c8-vY7iNVH3zFtnqRUDDAc&usqp=CAU"/>
  </div>
    <div style="  text-align: center;">
    <h3 class="cartText ">Your Cart Is Empty</h3>
    <a href="shop.html"><button class="btn2">Shop Now</button></a>    
    </div>
    `;
  cartTag.append(emptyCart);
} else {
  cartArray.forEach((item) => {
    const cartDiv = document.createElement("div");
    cartDiv.className = "cartDiv";
    cartDiv.innerHTML = `
   <div class="card1">
   <img class="cartImg" src=${item.imgUrl}/>
   </div>
   <div class="card3">
   <p class="cartName">${item.name}</p>
   <span class="cartSpan">Qty - </span><span class="cartSpan">${item.qty}</span><br/>
   <span class="cartSpan">Price - </span><span class="cartSpan">$${item.price}</span>
   </div>
   `;
    cartTag.append(cartDiv);
  });

  const tol = document.createElement("h3");
  const total = cartArray.reduce((tol, item) => (tol += Number(item.price)), 0);
  tol.className = "tol";
  tol.innerHTML = `
  <span class="cartName">Total Price - </span>
  <span class="cartName">$${total}</span>
`;
  const comfrim = document.createElement("div");
  comfrim.className = "comfrimBtn";
  comfrim.innerHTML = `
<button class="btn3">Submit</button>
`;

  cartTag.append(tol, comfrim);
}

// Send Order Data To Backend
const sendData = async () => {
  try {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartArray),
    });
    cartTag.innerHTML = "";
    localStorage.removeItem("cartList");
    const orderSuccess = document.createElement("div");
    orderSuccess.className = "orderSuccess";
    orderSuccess.innerHTML = `
     <img class="emptyCartImg" src="https://static.vecteezy.com/system/resources/thumbnails/005/611/471/small_2x/a-group-of-happy-people-raised-their-hands-to-celebrate-the-holidays-women-holding-gift-boxes-having-fun-with-friends-a-party-holding-balloons-and-champagne-flat-style-cartoon-illustration-free-vector.jpg"/>
    <i class='bx bx-check-circle successIcon' ></i>
    <h3 class="successText ">Your Order Successful</h3> 
     <a href="shop.html"><button class="btn2">Go Back To Shop</button></a>  
    `;
    cartTag.append(orderSuccess);
  } catch (err) {
    console.log(err);
  }
};

const submitBtn = document.querySelector(".btn3");
submitBtn.addEventListener("click", sendData);
