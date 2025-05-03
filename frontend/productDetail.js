const items = [
  {
    id: 1,
    name: "SOFT LEATHER JACKETS",
    img: "https://images.squarespace-cdn.com/content/v1/5fbc5eb54a8d08079f2cffbb/1702410133790-RBLY0F5Z64ZJMOU4DAMA/34D9B7D9-EB64-44F9-869B-FAAFF3DC93CE?format=1000w",
    description: "Stylish Autum Korea Fashion Jacket With Shoulder Pads",
    category: "new collection",
    price: 60,
  },
  {
    id: 2,
    name: "FAUX LEATHER JACKETS",
    img: "https://www.reitmans.com/on/demandware.static/-/Sites-Reitmans-catalog/default/dwf906d355/images/xlarge/reitmans_469980_1_0.jpg",
    description:
      "Fully Lined, Button Front, Vented Sleeve -Chadwiks Timeless Classics",
    category: "new collection",
    price: 55,
  },
  {
    id: 3,
    name: "Textured Solid Midi Dress",
    img: "https://cdn.shopify.com/s/files/1/0478/8607/4024/files/Brown_Dress_Gold_Accessories.jpg?v=1668763698",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "new arrivals",
    price: 50,
  },
  {
    id: 4,
    name: "Dahila Dress",
    img: "https://cdn.shopify.com/s/files/1/0349/0270/4259/files/IMG-0802_410x.jpg?v=1743848875",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "new arrivals",
    price: 60,
  },
  {
    id: 5,
    name: "Liz Knotted Strap Maxi Dress",
    img: "https://img-va.myshopline.com/image/store/1715339847991/2024-11-14-1934.jpeg?w=1440&h=2160&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "new arrivals",
    price: 75,
  },
  {
    id: 6,
    name: "Long Sleeve Solid Long Dress",
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/o/y/l/xl-aa-00235-rust-aayu-original-imah26m8bmeznvns.jpeg?q=90&crop=false",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "best selling item",
    price: 60,
  },
  {
    id: 7,
    name: "Brown Rib Chunky Knit Beanie Hat",
    img: "https://media3.newlookassets.com/i/newlook/899623627/womens/accessories/hats/brown-rib-chunky-knit-beanie-hat.jpg?strip=true&qlt=50&w=720",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "best selling item",
    price: 55,
  },
  {
    id: 8,
    name: "Long Sleeve Round-Neck Solid Long Dress",
    img: "https://i5.walmartimages.com/asr/d3e1ce01-c124-4cce-b1ce-63cfd8e461c4.8eed601577a7c5b46d88c759e205d99c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "best selling item",
    price: 70,
  },
];

//showing clicked product
const clickProduct = document.querySelector(".click_product");
const clickProductId = +localStorage.getItem("clickItem");
const selectedItem = items.find((item) => item.id === clickProductId);
console.log("item", clickProduct);
const clickDiv = document.createElement("div");
clickDiv.classList = "clickItemBox";
clickDiv.innerHTML = `
<div class="imgBox">
<img class="clickImg" src=${selectedItem.img}/>
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
btnTag.addEventListener("click", () => {
  cartArray.push({ ...selectedItem, qty: 1 });
  localStorage.setItem("cartList", JSON.stringify(cartArray));
  window.location.replace("/E-commerce(Task-1)/frontend/shop.html");
  //localStorage.removeItem("cartList");
});
