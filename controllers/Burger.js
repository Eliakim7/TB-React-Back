import Burger from "../models/Burger.js";

const getBurger = async (req, res, next) => {
  const burgers = await Burger.find();
  res.json(burgers);
};

const getBurgerById = async (req, res, next) => {
  const burger = await Burger.findById(req.params.burgerId);
  res.json(burger);
};

export { getBurger, getBurgerById };
