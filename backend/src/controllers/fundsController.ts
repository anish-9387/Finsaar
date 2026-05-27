import type { Response } from "express";
import type { AuthRequest } from "../middlewares/authenticate";
import { findUserById, toUserDto, updateBalance } from "../services/userService";

export const addFunds = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const amount = Number(req.body.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  const user = await findUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const updatedUser = await updateBalance(user, amount);
  return res.json({ message: "Funds added", user: toUserDto(updatedUser) });
};

export const withdrawFunds = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const amount = Number(req.body.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  const user = await findUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (Number(user.balance ?? 0) < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  const updatedUser = await updateBalance(user, -amount);
  return res.json({ message: "Funds withdrawn", user: toUserDto(updatedUser) });
};