import express from 'express'
import {getBoisson, getBoissonById} from '../controllers/Boisson.js'

const router = express.Router()

router.get('/get', getBoisson);
router.get("/getOne/:boissonId", getBoissonById);

export default router;