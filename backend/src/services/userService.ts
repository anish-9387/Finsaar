import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User";

export type CreateUserInput = {
  email: string;
  username: string;
  password: string;
};

export const toUserDto = (user: any) => ({
  id: user._id?.toString() ?? user.id ?? "",
  email: user.email,
  username: user.username,
  balance: Number(user.balance ?? 0),
  createdAt: user.createdAt,
});

export const findUserByEmail = (email: string) => UserModel.findOne({ email });

export const findUserById = (id: string) => UserModel.findById(id);

export const createUser = async (input: CreateUserInput) => {
  const hashedPassword = await bcrypt.hash(input.password, 10);
  return UserModel.create({
    email: input.email,
    username: input.username,
    password: hashedPassword,
  });
};

export const verifyPassword = (plain: string, hash: string) => bcrypt.compare(plain, hash);

export const signToken = (userId: string) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" });

export const updateBalance = async (user: any, delta: number) => {
  user.balance = Number(user.balance ?? 0) + delta;
  await user.save();
  return user;
};