import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const OrdersModel = mongoose.model("order", OrdersSchema);