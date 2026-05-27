import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import { requestLogger } from "./middlewares/requestLogger";

dotenv.config();

const { MONGO_URL, PORT } = process.env;

if (!MONGO_URL) {
  console.error("MONGO_URL is missing in .env");
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);
app.use(routes);

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${PORT || 3000}`);
});