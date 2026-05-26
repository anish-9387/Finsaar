import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const HoldingsModel = mongoose.model("holding", HoldingsSchema);