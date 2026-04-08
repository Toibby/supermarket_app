import { Router } from "express";
import { ok } from "../../utils/api-response";

export const ordersRouter = Router();

ordersRouter.get("/", (_req, res) => {
  res.json(ok("Orders endpoint shell", []));
});