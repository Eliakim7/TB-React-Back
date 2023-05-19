import express from "express";
import { getBurger, getBurgerById } from "../controllers/Burger.js";

const router = express.Router();

router.get("/get", getBurger);
router.get("/getOne/:burgerId", getBurgerById);

export default router;
