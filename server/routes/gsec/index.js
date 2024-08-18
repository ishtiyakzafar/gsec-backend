import express from 'express';
import { addGsecData, getGsecData, updateGsecData } from '../../controller/gsec/index.js';
const router = express.Router();

router.post("/gsec", addGsecData);
router.get("/gsec", getGsecData);
router.put("/gsec/:id", updateGsecData);

export default router;