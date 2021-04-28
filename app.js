const express = require("express");
const PORT = process.env.PORT || 5000;
const db = require("./db/index");
const app = express();
const Product = require("./models/product");
const Brand = require("./models/brand");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("This is the Root  ");
});
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const proudct = await Product.findById(id);
    if (!proudct) {
      throw Error("products not there ");
    } else {
      res.json(proudct);
    }
  } catch (e) {
    console.error("products not find ", e);
  }
});
app.get("/brands", async (req, res) => {
  const brand = await Brand.find();
  res.json(brand);
});
app.get("/brands/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    if (!brand) {
      throw Error("products not there ");
    } else {
      res.json(brand);
    }
  } catch (e) {
    console.error("products not find ", e);
  }
});

app.listen(PORT, () => {
  console.log(` server running on port ${PORT}`);
});
