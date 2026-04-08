import { Router } from "express";
import { ok } from "../../utils/api-response";

export const productsRouter = Router();

productsRouter.get("/", (_req, res) => {
  res.json(ok("Products endpoint shell", []));
});