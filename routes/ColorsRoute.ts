import express from "express";
import Color from "../models/ColorsModel";

const ColorsRoute = express.Router();

ColorsRoute.get("/", async (request, response) => {
  try {
    const colors = await Color.find();
    if (!colors) {
      return response.status(404).json({ error: "not found colors" });
    }
    response.status(200).json(colors);
  } catch (error) {
    response.status(400).json({ err: error });
  }
});

export default ColorsRoute;
