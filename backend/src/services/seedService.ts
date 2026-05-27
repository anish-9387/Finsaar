import { HoldingsModel } from "../models/Holdings";
import { OrdersModel } from "../models/Orders";
import { PositionsModel } from "../models/Positions";

const stockNames = [
  "RELIANCE",
  "TCS",
  "INFY",
  "HDFCBANK",
  "ICICIBANK",
  "SBIN",
  "ITC",
  "HINDUNILVR",
  "LT",
  "AXISBANK",
  "KOTAKBANK",
  "BHARTIARTL",
  "ASIANPAINT",
  "HCLTECH",
  "WIPRO",
  "MARUTI",
  "TATAMOTORS",
  "SUNPHARMA",
  "ULTRACEMCO",
  "ONGC",
];

export const seedUserData = async (userId: string) => {
  await HoldingsModel.deleteMany({ user: userId });
  await PositionsModel.deleteMany({ user: userId });
  await OrdersModel.deleteMany({ user: userId });

  const holdings = [] as any[];
  for (let i = 0; i < 15; i += 1) {
    const avg = +(Math.random() * 3000 + 100).toFixed(2);
    const price = +(avg + (Math.random() * 200 - 100)).toFixed(2);
    const isLoss = price < avg;
    holdings.push({
      name: stockNames[i % stockNames.length],
      qty: Math.floor(Math.random() * 10) + 1,
      avg,
      price,
      net: (((price - avg) / avg) * 100).toFixed(2) + "%",
      day: (Math.random() * 4 - 2).toFixed(2) + "%",
      isLoss,
      user: userId,
    });
  }
  await HoldingsModel.insertMany(holdings);

  const positions = [] as any[];
  for (let i = 0; i < 5; i += 1) {
    const avg = +(Math.random() * 3000 + 100).toFixed(2);
    const price = +(avg + (Math.random() * 150 - 75)).toFixed(2);
    const isLoss = price < avg;
    positions.push({
      product: i % 2 === 0 ? "CNC" : "MIS",
      name: stockNames[(i + 5) % stockNames.length],
      qty: Math.floor(Math.random() * 5) + 1,
      avg,
      price,
      net: (((price - avg) / avg) * 100).toFixed(2) + "%",
      day: (Math.random() * 3 - 1.5).toFixed(2) + "%",
      isLoss,
      user: userId,
    });
  }
  await PositionsModel.insertMany(positions);
};