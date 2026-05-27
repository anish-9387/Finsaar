import { HoldingsModel } from "../models/Holdings";
import { OrdersModel } from "../models/Orders";
import { PositionsModel } from "../models/Positions";

export const getHoldingsByUser = (userId: string) => HoldingsModel.find({ user: userId });

export const getPositionsByUser = (userId: string) => PositionsModel.find({ user: userId });

export const getOrdersByUser = (userId: string) => OrdersModel.find({ user: userId });

export const createOrderForUser = async (userId: string, payload: any) => {
  const newOrder = new OrdersModel({
    ...payload,
    user: userId,
  });
  await newOrder.save();
  return newOrder;
};