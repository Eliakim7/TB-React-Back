import mongoose, { Schema } from "mongoose";

const BurgersSchema = new Schema({
  Name: String,
  Description: String,
  Price: mongoose.Decimal128,
  Image: String,
});

const Burger = mongoose.model("Burger", BurgersSchema, "Burgers");

export default Burger;
