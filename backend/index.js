import express from "express";
import pkg from "pg";
const { Client } = pkg;
const app = express();

app.use(express.json());
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

app.listen(3000, () => {
  console.log("server is running....");
});
