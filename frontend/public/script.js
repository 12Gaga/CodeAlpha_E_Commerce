let cartArray = JSON.parse(localStorage.getItem("cartList")) || [];

if (cartArray.length > 0) {
  const cartNotice = document.querySelector(".haveCartItem");
  cartNotice.style.display = "block";
}

//function for card component
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

// New Collections
const newCollection = document.querySelector(".new_collections");
//fetch new collection data and put collections
let collections = [];
async function callNewCollectionData() {
  try {
    const response = await fetch("http://localhost:3000/newCollections", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("data", data);
    collections = [...data];
    collections.forEach((item) => {
      const cardItem = createCardComponent(
        item.name,
        item.description,
        item.imgUrl
      );
      newCollection.append(cardItem);
    });
  } catch (err) {
    console.log(err);
  }
}
callNewCollectionData();

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
let arrivalItems = [];
async function callNewArrivalData() {
  try {
    const response = await fetch("http://localhost:3000/newArrivals", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const arrivalData = await response.json();
    console.log("data", arrivalData);
    arrivalItems = [...arrivalData];
    arrivalItems.forEach((item) => {
      const arrivalDiv = createCardComponent(
        item.name,
        item.price,
        item.imgUrl
      );
      newArrivalTag.append(arrivalDiv);
    });
  } catch (err) {
    console.log(err);
  }
}
callNewArrivalData();

//Best selling item
const bestSellingTag = document.querySelector(".best_selling");
//fetch best selling product and put bestSellingItems
let bestSellingItems = [];
async function callBestSellingData() {
  try {
    const response = await fetch("http://localhost:3000/bestSellingItems", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const bestSellingData = await response.json();
    console.log("data", bestSellingData);
    bestSellingItems = [...bestSellingData];
    bestSellingItems.forEach((item) => {
      const bestSellingDiv = createCardComponent(
        item.name,
        item.price,
        item.imgUrl
      );
      bestSellingTag.append(bestSellingDiv);
    });
  } catch (err) {
    console.log(err);
  }
}
callBestSellingData();
