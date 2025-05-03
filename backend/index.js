import express from "express";
import pkg from "pg";
import cors from "cors";
import { nanoid } from "nanoid";
const { Client } = pkg;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "233253",
  database: "e-commerce",
});

db.connect();
app.get("/", (req, res) => {
  res.json("This is server");
});

app.get("/products", (req, res) => {
  const q = "SELECT * from products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data.rows);
  });
});

app.get("/newCollections", (req, res) => {
  const param = "newCollection";
  const q = "SELECT * FROM products WHERE category = $1";

  db.query(q, [param], (err, data) => {
    if (err) return res.json(err);
    return res.json(data.rows);
  });
});

app.get("/newArrivals", (req, res) => {
  const param = "newArrivals";
  const q = "SELECT * FROM products WHERE category = $1";

  db.query(q, [param], (err, data) => {
    if (err) return res.json(err);
    return res.json(data.rows);
  });
});

app.get("/bestSellingItems", (req, res) => {
  const param = "bestSelling";
  const q = "SELECT * FROM products WHERE category = $1";

  db.query(q, [param], (err, data) => {
    if (err) return res.json(err);
    return res.json(data.rows);
  });
});

app.post("/orders", (req, res) => {
  const dataFromFrontend = req.body;
  const orderSeq = nanoid(5);
  const q =
    'INSERT INTO orders ("productName", "productQty", "productPrice", "orderSeq") VALUES ($1, $2, $3, $4)';
  const insertData = dataFromFrontend.map((item) =>
    db.query(q, [item.name, item.qty, item.price, orderSeq])
  );
  console.log(insertData);
  Promise.all(insertData)
    .then(() => res.send("Order Successful"))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Order failed");
    });
});

app.listen(3000, () => {
  console.log("server is running....");
});
