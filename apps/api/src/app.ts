import cors from "cors";
import express from "express";
import morgan from "morgan";
import { env } from "./config/env";
import { errorHandler } from "./middleware/error-handler";
import { notFoundHandler } from "./middleware/not-found";
import { publicRouter } from "./modules/public/public.routes";
import { authRouter } from "./modules/auth/auth.routes";
import { productsRouter } from "./modules/products/products.routes";
import { categoriesRouter } from "./modules/categories/categories.routes";
import { cartRouter } from "./modules/cart/cart.routes";
import { ordersRouter } from "./modules/orders/orders.routes";
import { customersRouter } from "./modules/customers/customers.routes";
import { workersRouter } from "./modules/workers/workers.routes";
import { inventoryRouter } from "./modules/inventory/inventory.routes";
import { analyticsRouter } from "./modules/analytics/analytics.routes";

export const app = express();

app.use(
  cors({
    origin: env.WEB_URL,
    credentials: true
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", publicRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/customers", customersRouter);
app.use("/api/workers", workersRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/analytics", analyticsRouter);

app.use(notFoundHandler);
app.use(errorHandler);