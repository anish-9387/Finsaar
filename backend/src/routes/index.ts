import { Router } from "express";
import authRoutes from "./authRoutes";
import dataRoutes from "./dataRoutes";
import fundsRoutes from "./fundsRoutes";
import healthRoutes from "./healthRoutes";
import seedRoutes from "./seedRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/", healthRoutes);
router.use("/auth", authRoutes);
router.use("/", userRoutes);
router.use("/funds", fundsRoutes);
router.use("/", dataRoutes);
router.use("/", seedRoutes);

export default router;