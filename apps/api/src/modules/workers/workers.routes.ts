import { Router } from "express";
import { ok } from "../../utils/api-response";

export const workersRouter = Router();

workersRouter.get("/", (_req, res) => {
  res.json(ok("Workers endpoint shell", []));
});