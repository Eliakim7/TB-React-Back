import Accompagnement from "../models/Accompagnements.js";

const getAccompagnement = async (req, res, next) => {
  const accompagnements = await Accompagnement.find();
  res.json(accompagnements);
};

const getAccompagnementById = async (req, res, next) => {
  const accompagnement = await Accompagnement.findById(req.params.accompagnementId);
  res.json(accompagnement);
};

export { getAccompagnement, getAccompagnementById };