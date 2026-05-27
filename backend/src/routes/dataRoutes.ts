import { Router } from "express";
import { createOrder, getHoldings, getOrders, getPositions } from "../controllers/dataController";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/allHoldings", authenticate, getHoldings);
router.get("/allPositions", authenticate, getPositions);
router.get("/allOrders", authenticate, getOrders);
router.post("/newOrder", authenticate, createOrder);

export default router;