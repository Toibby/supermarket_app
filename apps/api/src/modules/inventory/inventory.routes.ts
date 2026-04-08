import { Router } from "express";
import { ok } from "../../utils/api-response";

export const inventoryRouter = Router();

inventoryRouter.get("/", (_req, res) => {
  res.json(ok("Inventory endpoint shell", []));
});