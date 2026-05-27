import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";

export type AuthUser = {
  id: string;
};

export type AuthRequest = Request & {
  user?: AuthUser | null;
};

export const authenticate = (req: AuthRequest, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.user = null;
    return next();
  }

  const token = authHeader.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || "secret") as AuthUser;
  } catch (err) {
    req.user = null;
  }

  return next();
};