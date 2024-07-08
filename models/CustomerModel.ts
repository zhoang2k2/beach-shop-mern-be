import mongoose from "mongoose";

const schema = mongoose.Schema;

const CustomerSchema = new schema({
  username: {
    type: String, 
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Customers = mongoose.model("customers", CustomerSchema);
export default Customers;
