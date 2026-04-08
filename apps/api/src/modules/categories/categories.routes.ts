import { Router } from "express";
import { ok } from "../../utils/api-response";

export const categoriesRouter = Router();

categoriesRouter.get("/", (_req, res) => {
  res.json(ok("Categories endpoint shell", []));
});