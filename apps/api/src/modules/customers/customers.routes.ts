import { Router } from "express";
import { ok } from "../../utils/api-response";

export const customersRouter = Router();

customersRouter.get("/", (_req, res) => {
  res.json(ok("Customers endpoint shell", []));
});