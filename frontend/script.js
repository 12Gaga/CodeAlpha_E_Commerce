//function for card
function createCardComponent(title, content, img) {
  const collection_item = document.createElement("div");
  collection_item.className = "card";
  collection_item.innerHTML = `
      <img class="img" src=${img}/>
       <h4 class="title">${title}</h4>
       <p class="content">${content}</p>      
     `;
  return collection_item;
}

const newCollection = document.querySelector(".new_collections");
//fetch new collection data and put collections
const collections = [
  {
    name: "SOFT LEATHER JACKETS",
    description: "Stylish Autum Korea Fashion Jacket With Shoulder Pads",
    img: "https://images.squarespace-cdn.com/content/v1/5fbc5eb54a8d08079f2cffbb/1702410133790-RBLY0F5Z64ZJMOU4DAMA/34D9B7D9-EB64-44F9-869B-FAAFF3DC93CE?format=1000w",
  },
  {
    name: "FAUX LEATHER JACKETS",
    description:
      "Fully Lined, Button Front, Vented Sleeve -Chadwiks Timeless Classics",
    img: "https://www.reitmans.com/on/demandware.static/-/Sites-Reitmans-catalog/default/dwf906d355/images/xlarge/reitmans_469980_1_0.jpg",
  },
];

collections.forEach((item) => {
  const cardItem = createCardComponent(item.name, item.description, item.img);
  newCollection.append(cardItem);
});

//Avariable service
const serviceTag = document.querySelector(".service");
const services = [
  {
    icon: "<i class='bx bx-calendar-alt serveLogo' ></i>",
    title: "Book An Appointment",
    content:
      "We’re here to make your experience as smooth as possible. Please use the form below to schedule your appointment. Whether you're visiting us for a consultation, a service, or a special occasion, we’re happy to help!",
  },
  {
    icon: "<i class='bx bx-shopping-bag serveLogo'></i>",
    title: "Pick Up In Store",
    content:
      "Skip the shipping and get your order faster with our easy in-store pickup option. It's free, fast, and hassle-free!",
  },
  {
    icon: "<i class='bx bx-package serveLogo'></i>",
    title: "Special Packaging",
    content:
      "Whether you're gifting a loved one or treating yourself, our special packaging options add the perfect finishing touch. Choose from elegant wraps, eco-friendly materials, or themed packaging to suit any occasion.",
  },
  {
    icon: "<i class='bx bx-reset serveLogo'></i>",
    title: "Free Global Return",
    content:
      "We want you to love every purchase. That’s why we offer free returns worldwide — simple, stress-free, and fully covered by us.",
  },
];

services.forEach((serve) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.className = "serviceCard";
  serviceDiv.innerHTML = `
    ${serve.icon}
    <h4 class="title">${serve.title}</h4>
    <p class="content">${serve.content}</p>
    `;
  serviceTag.append(serviceDiv);
});

//shopping for what
const reasonTag = document.querySelector(".reason");
const reasons = [
  {
    name: "SHOP FOR MEN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZZgNv6I_l1XoHbeTWIxS4GY4VyGS-hv3x43-xVOAubGoaF0hr3E_5m4YStPjGVn1VKk&usqp=CAU",
  },
  {
    name: "SHOP FOR WOMEN",
    img: "https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/master/pass/model%20nidhi%20sunil.jpg",
  },
  {
    name: "SHOP ACCESSORIES",
    img: "https://brownbear.in/cdn/shop/files/2_b55294ef-8f43-452e-9c86-315b38842bc7.jpg?v=1713597567&width=3000",
  },
];

reasons.forEach((reason) => {
  const reasonDiv = document.createElement("div");
  reasonDiv.className = "reasonCard";
  reasonDiv.innerHTML = `
    <img class="reasonImg" src=${reason.img}/>
       <h4 class="content">${reason.name}</h4>
    `;
  reasonTag.append(reasonDiv);
});

//New Arrivals
const newArrivalTag = document.querySelector(".new_arrivals");
//fetch arrival product and put arrivalItems
const arrivalItems = [
  {
    img: "https://cdn.shopify.com/s/files/1/0478/8607/4024/files/Brown_Dress_Gold_Accessories.jpg?v=1668763698",
    name: "Textured Solid Midi Dress",
    price: "$50.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0349/0270/4259/files/IMG-0802_410x.jpg?v=1743848875",
    name: "Dahila Dress",
    price: "$60.00",
  },
  {
    img: "https://img-va.myshopline.com/image/store/1715339847991/2024-11-14-1934.jpeg?w=1440&h=2160&q=80",
    name: "Liz Knotted Strap Maxi Dress",
    price: "$75.00",
  },
];

arrivalItems.forEach((item) => {
  const arrivalDiv = createCardComponent(item.name, item.price, item.img);
  newArrivalTag.append(arrivalDiv);
});

//Best selling item
const bestSellingTag = document.querySelector(".best_selling");
//fetch best selling product and put bestSellingItems
const bestSellingItems = [
  {
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/o/y/l/xl-aa-00235-rust-aayu-original-imah26m8bmeznvns.jpeg?q=90&crop=false",
    name: "Long Sleeve Solid Long Dress",
    price: "$60.00",
  },
  {
    img: "https://media3.newlookassets.com/i/newlook/899623627/womens/accessories/hats/brown-rib-chunky-knit-beanie-hat.jpg?strip=true&qlt=50&w=720",
    name: "Brown Rib Chunky Knit Beanie Hat",
    price: "$55.00",
  },
  {
    img: "https://i5.walmartimages.com/asr/d3e1ce01-c124-4cce-b1ce-63cfd8e461c4.8eed601577a7c5b46d88c759e205d99c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    name: "Long Sleeve Round-Neck Solid Long Dress",
    price: "$70.00",
  },
];

bestSellingItems.forEach((item) => {
  const bestSellingDiv = createCardComponent(item.name, item.price, item.img);
  bestSellingTag.append(bestSellingDiv);
});
