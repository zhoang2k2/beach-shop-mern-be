import mongoose from "mongoose";

const schema = mongoose.Schema;

const SizeSchema = new schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  size_id: {
    type: String,
    required: true,
  },
});

const Sizes = mongoose.model("Sizes", SizeSchema);
export default Sizes;
