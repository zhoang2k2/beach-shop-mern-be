import express from "express";
import Products from "../models/ProductsModel";

const ProductsRoute = express.Router();

ProductsRoute.get("/", async (request, response) => {
  try {
    const products = await Products.find();
    if (!products.length) {
      return response.status(404).json({ error: "not found products" });
    }
    response.status(200).json(products);
  } catch (error) {
    response.status(400).json({ err: error });
  }
});

export default ProductsRoute;
