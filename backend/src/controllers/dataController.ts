import type { Response } from "express";
import type { AuthRequest } from "../middlewares/authenticate";
import { createOrderForUser, getHoldingsByUser, getOrdersByUser, getPositionsByUser } from "../services/dataService";

export const getHoldings = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  const holdings = await getHoldingsByUser(req.user.id);
  return res.json(holdings);
};

export const getPositions = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  const positions = await getPositionsByUser(req.user.id);
  return res.json(positions);
};

export const getOrders = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  const orders = await getOrdersByUser(req.user.id);
  return res.json(orders);
};

export const createOrder = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  const order = await createOrderForUser(req.user.id, req.body);
  return res.json({ message: "Order placed successfully", order });
};