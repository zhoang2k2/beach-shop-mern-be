import mongoose from "mongoose";

const schema = mongoose.Schema;

const ColorSchema = new schema({
  _id: {
    type: String,
    required: true,
  },
  color_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Color = mongoose.model("Colors", ColorSchema);
export default Color;
