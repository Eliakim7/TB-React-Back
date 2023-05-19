import mongoose, { Schema } from "mongoose";

const AccompagnementsSchema = new Schema({
	Name: String,
	Description: String,
	Price: mongoose.Decimal128,
  Image:String,
});

const Accompagnement = mongoose.model('Accompagnement', AccompagnementsSchema, "Accompagnements");

export default Accompagnement;