import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Categories", CategorySchema);
export default Category;
