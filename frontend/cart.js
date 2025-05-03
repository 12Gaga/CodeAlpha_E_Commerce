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
   <img class="cartImg" src=${item.img}/>
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
  const total = cartArray.reduce((tol, item) => (tol += item.price), 0);
  tol.className = "tol";
  tol.innerHTML = `
  <span class="cartName">Total Price - </span>
  <span class="cartName">$${total}</span>
`;
  const comfrim = document.createElement("div");
  comfrim.className = "comfrimBtn";
  comfrim.innerHTML = `
<button class="btn2">Submit</button>
`;

  cartTag.append(tol, comfrim);
}
