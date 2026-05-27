import { Router } from "express";
import { addFunds, withdrawFunds } from "../controllers/fundsController";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.post("/add", authenticate, addFunds);
router.post("/withdraw", authenticate, withdrawFunds);

export default router;