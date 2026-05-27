import cors from "cors";
import dotenv from "dotenv";
import express, { type NextFunction, type Request, type Response } from "express";
import mongoose from "mongoose";
import { HoldingsModel } from "./models/Holdings";
import { PositionsModel } from "./models/Positions";
import { OrdersModel } from "./models/Orders";
import { UserModel } from "./models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const { MONGO_URL, PORT, JWT_SECRET } = process.env;

if (!MONGO_URL) {
  console.error("MONGO_URL is missing in .env");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

type AuthUser = {
  id: string;
};

type AuthRequest = Request & {
  user?: AuthUser | null;
};

const app = express();

app.use(cors());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
  });
  next();
});

const authenticate = (req: AuthRequest, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.user = null;
    return next();
  }

  const token = authHeader.split(" ")[1];
  try {
    req.user = jwt.verify(token, JWT_SECRET || "secret") as AuthUser;
  } catch (err) {
    req.user = null;
  }

  return next();
};

const toUserDto = (user: any) => ({
  id: user._id?.toString() ?? user.id ?? "",
  email: user.email,
  username: user.username,
  balance: Number(user.balance ?? 0),
  createdAt: user.createdAt,
});

// Health Check
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is running!");
});

// Authentication Routes
app.post("/auth/signup", async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET || "secret", {
      expiresIn: "1d",
    });

    return res.json({ message: "User created successfully", token, user: toUserDto(newUser) });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error });
  }
});

app.post("/auth/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET || "secret", {
      expiresIn: "1d",
    });

    return res.json({ message: "Login successful", token, user: toUserDto(user) });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error });
  }
});

app.get("/me", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await UserModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({ user: toUserDto(user) });
});

app.post("/funds/add", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const amount = Number(req.body.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  const user = await UserModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.balance = Number(user.balance ?? 0) + amount;
  await user.save();

  return res.json({ message: "Funds added", user: toUserDto(user) });
});

app.post("/funds/withdraw", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const amount = Number(req.body.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  const user = await UserModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (Number(user.balance ?? 0) < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  user.balance = Number(user.balance ?? 0) - amount;
  await user.save();

  return res.json({ message: "Funds withdrawn", user: toUserDto(user) });
});

// Data Routes
app.get("/allHoldings", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) { return res.status(401).send("Unauthorized"); }
  return res.json(await HoldingsModel.find({ user: req.user.id }));
});

app.get("/allPositions", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) { return res.status(401).send("Unauthorized"); }
  return res.json(await PositionsModel.find({ user: req.user.id }));
});

app.get("/allOrders", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) { return res.status(401).send("Unauthorized"); }
  return res.json(await OrdersModel.find({ user: req.user.id }));
});

app.post("/newOrder", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) { return res.status(401).send("Unauthorized"); }
  const newOrder = new OrdersModel({
    ...req.body,
    user: req.user.id
  });
  await newOrder.save();
  return res.json({ message: "Order placed successfully", order: newOrder });
});

// Seed Route for User
app.post("/seed", authenticate, async (req: AuthRequest, res: Response) => {
  if (!req.user) { return res.status(401).send("Unauthorized"); }

  const userId = req.user.id;

  // Clear existing data for user
  await HoldingsModel.deleteMany({ user: userId });
  await PositionsModel.deleteMany({ user: userId });
  await OrdersModel.deleteMany({ user: userId });

  // Add Holdings
  const stockNames = [
    "RELIANCE", "TCS", "INFY", "HDFCBANK", "ICICIBANK", "SBIN", "ITC", "HINDUNILVR", "LT", "AXISBANK", "KOTAKBANK", "BHARTIARTL", "ASIANPAINT", "HCLTECH", "WIPRO", "MARUTI", "TATAMOTORS", "SUNPHARMA", "ULTRACEMCO", "ONGC"
  ];

  let tempHoldings = [];
  for (let i = 0; i < 15; i++) { // Generate 15 holdings
    const avg = +(Math.random() * 3000 + 100).toFixed(2);
    const price = +(avg + (Math.random() * 200 - 100)).toFixed(2);
    const isLoss = price < avg;
    tempHoldings.push({
      name: stockNames[i % stockNames.length],
      qty: Math.floor(Math.random() * 10) + 1,
      avg,
      price,
      net: (((price - avg) / avg) * 100).toFixed(2) + "%",
      day: (Math.random() * 4 - 2).toFixed(2) + "%",
      isLoss,
      user: userId
    });
  }
  await HoldingsModel.insertMany(tempHoldings);

  // Add Positions
  let tempPositions = [];
  for (let i = 0; i < 5; i++) { // Generate 5 positions
    const avg = +(Math.random() * 3000 + 100).toFixed(2);
    const price = +(avg + (Math.random() * 150 - 75)).toFixed(2);
    const isLoss = price < avg;
    tempPositions.push({
      product: i % 2 === 0 ? "CNC" : "MIS",
      name: stockNames[(i + 5) % stockNames.length],
      qty: Math.floor(Math.random() * 5) + 1,
      avg,
      price,
      net: (((price - avg) / avg) * 100).toFixed(2) + "%",
      day: (Math.random() * 3 - 1.5).toFixed(2) + "%",
      isLoss,
      user: userId
    });
  }
  await PositionsModel.insertMany(tempPositions);

  return res.json({ message: "Data seeded successfully for user" });
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${PORT || 3000}`);
});