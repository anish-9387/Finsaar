import mongoose from "mongoose";
import { HoldingsModel } from "./models/Holdings";
import { PositionsModel } from "./models/Positions";
import { UserModel } from "./models/User";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.error("MONGO_URL is missing in .env");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const seedData = async () => {
  try {
    // 1. Create Default User
    const email = "admin@finsaar.com";
    const password = "Admin@123";
    const username = "Admin Zerodha";

    // Check if user exists, if so delete to reset or just use it
    await UserModel.deleteMany({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });

    console.log(`User created: ${email} / ${password}`);

    const userId = newUser._id;

    // 2. Clear existing data for this user (implied by new user, but good practice)
    await HoldingsModel.deleteMany({ user: userId });
    await PositionsModel.deleteMany({ user: userId });

    // 3. Seed 100 Holdings
    const stockNames = [
      "RELIANCE", "TCS", "INFY", "HDFCBANK", "ICICIBANK", "SBIN", "ITC", "HINDUNILVR",
      "LT", "AXISBANK", "KOTAKBANK", "BHARTIARTL", "ASIANPAINT", "HCLTECH", "WIPRO",
      "MARUTI", "TATAMOTORS", "SUNPHARMA", "ULTRACEMCO", "ONGC", "TITAN", "BAJFINANCE",
      "NESTLEIND", "GRASIM", "JSWSTEEL", "TECHM", "ADANIENT", "ADANIPORTS", "POWERGRID",
      "TATASTEEL", "NTPC", "M&M", "DIVISLAB", "DRREDDY", "BAJAJFINSV", "EICHERMOT",
      "HEROMOTOCO", "CIPLA", "APOLLOHOSP", "BPCL", "BRITANNIA", "INDUSINDBK", "TATACONSUM",
      "SBILIFE", "HDFCLIFE", "COALINDIA", "UPL"
    ];

    let holdings = [];
    for (let i = 0; i < 100; i++) {
      const stockName = stockNames[i % stockNames.length];
      const avg = +(Math.random() * 3000 + 100).toFixed(2);
      const price = +(avg + (Math.random() * 400 - 200)).toFixed(2); // +/- 200 variance
      const isLoss = price < avg;

      holdings.push({
        name: stockName,
        qty: Math.floor(Math.random() * 50) + 1,
        avg: avg,
        price: price,
        net: (((price - avg) / avg) * 100).toFixed(2) + "%",
        day: (Math.random() * 5 - 2.5).toFixed(2) + "%",
        isLoss: isLoss,
        user: userId
      });
    }
    await HoldingsModel.insertMany(holdings);
    console.log("Seeded 100 Holdings");

    // 4. Seed 20 Positions
    let positions = [];
    for (let i = 0; i < 20; i++) {
      const stockName = stockNames[(i + 10) % stockNames.length];
      const avg = +(Math.random() * 3000 + 100).toFixed(2);
      const price = +(avg + (Math.random() * 200 - 100)).toFixed(2);
      const isLoss = price < avg;

      positions.push({
        product: i % 2 === 0 ? "CNC" : "MIS",
        name: stockName,
        qty: Math.floor(Math.random() * 25) + 1,
        avg: avg,
        price: price,
        net: (((price - avg) / avg) * 100).toFixed(2) + "%",
        day: (Math.random() * 4 - 2).toFixed(2) + "%",
        isLoss: isLoss,
        user: userId
      });
    }
    await PositionsModel.insertMany(positions);
    console.log("Seeded 20 Positions");

    console.log("Seeding complete successfully!");
    process.exit(0);

  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();