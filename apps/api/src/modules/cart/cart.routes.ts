import { Router } from "express";
import { ok } from "../../utils/api-response";

export const cartRouter = Router();

cartRouter.get("/", (_req, res) => {
  res.json(ok("Cart endpoint shell", []));
});