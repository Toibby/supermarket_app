import { Router } from "express";
import { ok } from "../../utils/api-response";

export const analyticsRouter = Router();

analyticsRouter.get("/", (_req, res) => {
  res.json(
    ok("Analytics endpoint shell", {
      todaySales: 0,
      orders: 0,
      customers: 0,
      workers: 0
    })
  );
});