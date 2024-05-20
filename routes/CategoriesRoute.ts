import express from "express";
import Category from "../models/CategoriesModel";

const CategoriesRoute = express.Router();

CategoriesRoute.get("/", async (request, response) => {
  try {
    const categories = await Category.find();
    if (!categories.length) {
      return response.status(404).json({ error: "not found categories" });
    }
    response.status(200).json(categories);
  } catch (error) {
    response.status(400).json({ err: error });
  }
});

export default CategoriesRoute;
