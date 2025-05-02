//fetch all data and put to products
const products = [
  {
    name: "SOFT LEATHER JACKETS",
    img: "https://images.squarespace-cdn.com/content/v1/5fbc5eb54a8d08079f2cffbb/1702410133790-RBLY0F5Z64ZJMOU4DAMA/34D9B7D9-EB64-44F9-869B-FAAFF3DC93CE?format=1000w",
    description: "Stylish Autum Korea Fashion Jacket With Shoulder Pads",
    category: "new collection",
    price: 60,
  },
  {
    name: "FAUX LEATHER JACKETS",
    img: "https://www.reitmans.com/on/demandware.static/-/Sites-Reitmans-catalog/default/dwf906d355/images/xlarge/reitmans_469980_1_0.jpg",
    description:
      "Fully Lined, Button Front, Vented Sleeve -Chadwiks Timeless Classics",
    category: "new collection",
    price: 55,
  },
  {
    name: "Textured Solid Midi Dress",
    img: "https://cdn.shopify.com/s/files/1/0478/8607/4024/files/Brown_Dress_Gold_Accessories.jpg?v=1668763698",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "new arrivals",
    price: 50,
  },
  {
    name: "Dahila Dress",
    img: "https://cdn.shopify.com/s/files/1/0349/0270/4259/files/IMG-0802_410x.jpg?v=1743848875",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "new arrivals",
    price: 60,
  },
  {
    name: "Liz Knotted Strap Maxi Dress",
    img: "https://img-va.myshopline.com/image/store/1715339847991/2024-11-14-1934.jpeg?w=1440&h=2160&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "new arrivals",
    price: 75,
  },
  {
    name: "Long Sleeve Solid Long Dress",
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/o/y/l/xl-aa-00235-rust-aayu-original-imah26m8bmeznvns.jpeg?q=90&crop=false",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "best selling item",
    price: 60,
  },
  {
    name: "Brown Rib Chunky Knit Beanie Hat",
    img: "https://media3.newlookassets.com/i/newlook/899623627/womens/accessories/hats/brown-rib-chunky-knit-beanie-hat.jpg?strip=true&qlt=50&w=720",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "best selling item",
    price: 55,
  },
  {
    name: "Long Sleeve Round-Neck Solid Long Dress",
    img: "https://i5.walmartimages.com/asr/d3e1ce01-c124-4cce-b1ce-63cfd8e461c4.8eed601577a7c5b46d88c759e205d99c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis quod ab enim, sapiente autem ipsa, magnam, hic laudantium",
    category: "best selling item",
    price: 70,
  },
];

function createCardComponent(title, img, price) {
  const collection_item = document.createElement("div");
  collection_item.className = "card2";
  collection_item.innerHTML = `
        <img class="shoppingImg" src=${img}/>
         <h4 class="shoppingTitle">${title}</h4>
         <span class="shoppingPrice">$${price}</span>      
       `;
  return collection_item;
}
const allProducts = document.querySelector(".container2");
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
        product.img,
        product.price
      );
      allProducts.append(filteredItem);
    });
  }
});

products.forEach((product) => {
  const item = createCardComponent(product.name, product.img, product.price);
  allProducts.append(item);
});
