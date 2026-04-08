import { Router } from "express";
import { ok } from "../../utils/api-response";

export const publicRouter = Router();

publicRouter.get("/health", (_req, res) => {
  res.json(
    ok("API is healthy", {
      service: "supermarket-api",
      timestamp: new Date().toISOString()
    })
  );
});

publicRouter.get("/", (_req, res) => {
  res.json(
    ok("Supermarket API root", {
      version: "1.0.0",
      docs: "Batch 1 starter"
    })
  );
});