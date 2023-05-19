import Dessert from "../models/Desserts.js";

const getDessert = async (req, res, next) => {
  const desserts = await Dessert.find();
  res.json(desserts);
};

const getDessertById = async (req, res, next) => {
  const dessert = await Dessert.findById(req.params.dessertId);
  res.json(dessert);
};

export { getDessert, getDessertById };
