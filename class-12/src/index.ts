import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import designRouter from "./app/design/design.route.js";
import categoryRouter from "./app/category/category.route.js";
import pricingRouter from "./app/pricing/pricing.route.js";
import reviewRouter from "./app/review/review.route.js";
import userRouter from "./app/user/user.route.js";
import purchaseRouter from "./app/purchase/purchase.route.js";

const app = express();
dotenv.config();
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/design", designRouter);
app.use("/api/category", categoryRouter);
app.use("/api/pricing", pricingRouter);
app.use("/api/review", reviewRouter);
app.use("/api/user", userRouter);
app.use("/api/purchase", purchaseRouter);

export default app;
