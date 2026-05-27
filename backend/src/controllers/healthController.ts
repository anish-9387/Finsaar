import type { Request, Response } from "express";

export const healthCheck = (_req: Request, res: Response) => {
  res.send("Server is running!");
};