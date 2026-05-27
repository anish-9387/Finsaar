import type { Request, Response } from "express";
import { createUser, findUserByEmail, signToken, toUserDto, verifyPassword } from "../services/userService";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await createUser({ email, username, password });
    const token = signToken(newUser._id?.toString() ?? newUser.id ?? "");

    return res.json({ message: "User created successfully", token, user: toUserDto(newUser) });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = signToken(user._id?.toString() ?? user.id ?? "");

    return res.json({ message: "Login successful", token, user: toUserDto(user) });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error });
  }
};