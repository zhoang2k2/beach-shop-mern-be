import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, mongoDB } from "./config";
import ProductsRoute from "./routes/ProductsRoute";
import CategoriesRoute from "./routes/CategoriesRoute";
import SizesRoute from "./routes/SizesRoute";
import ColorsRoute from "./routes/ColorsRoute";
import CustomersRoute from "./routes/CustomersRoute";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (require, response) => {
  console.log(require);
  return response.status(234).send("this is beach shop api!");
});

app.use("/api/products", ProductsRoute);
app.use("/api/categories", CategoriesRoute);
app.use("/api/sizes", SizesRoute);
app.use("/api/colors", ColorsRoute);
app.use("/api/customers", CustomersRoute);

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`listen to PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
