import express from 'express'
import { getDessert, getDessertById } from '../controllers/Dessert.js'

const router = express.Router()

router.get('/get', getDessert);
router.get("/getOne/:dessertId", getDessertById);

export default router;