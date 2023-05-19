import Boisson from "../models/Boissons.js";

const getBoisson = async (req, res, next) => {
  const boissons = await Boisson.find();
  res.json(boissons);
};

const getBoissonById = async (req, res, next) => {
  const boisson = await Boisson.findById(req.params.boissonId);
  res.json(boisson);
};

export { getBoisson, getBoissonById };