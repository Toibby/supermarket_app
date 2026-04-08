import { Router } from "express";
import { ok } from "../../utils/api-response";

export const authRouter = Router();

authRouter.get("/", (_req, res) => {
  res.json(ok("Auth module ready", { module: "auth" }));
});