import express from 'express'
import {getAccompagnement, getAccompagnementById} from '../controllers/Accompagnement.js'

const router = express.Router()

router.get('/get',getAccompagnement);
router.get("/getOne/:accompagnementId", getAccompagnementById);

export default router;