import type { Response } from "express";
import type { AuthRequest } from "../middlewares/authenticate";
import { seedUserData } from "../services/seedService";

export const seedUser = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  await seedUserData(req.user.id);
  return res.json({ message: "Data seeded successfully for user" });
};