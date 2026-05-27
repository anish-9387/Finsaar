import { Router } from "express";
import { seedUser } from "../controllers/seedController";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.post("/seed", authenticate, seedUser);

export default router;