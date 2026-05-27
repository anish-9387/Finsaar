import type { Response } from "express";
import type { AuthRequest } from "../middlewares/authenticate";
import { findUserById, toUserDto } from "../services/userService";

export const getMe = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await findUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({ user: toUserDto(user) });
};