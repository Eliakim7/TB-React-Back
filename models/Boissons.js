import mongoose, { Schema } from "mongoose";

const BoissonsSchema = new Schema({
	Name: String,
	Description: String,
	Price: mongoose.Decimal128,
  Image:String,
});

const Boisson = mongoose.model('Boisson', BoissonsSchema, "Boissons");

export default Boisson;