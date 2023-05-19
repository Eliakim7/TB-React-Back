import mongoose, { Schema } from "mongoose";

const DessertsSchema = new Schema({
  Name: String,
  Description: String,
  Price: mongoose.Decimal128,
  Image: String,
});

const Dessert = mongoose.model("Dessert", DessertsSchema, "Desserts");

export default Dessert;
