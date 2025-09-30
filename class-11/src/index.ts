import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import productRouter from "./app/product/product.route.js";
import categoryRouter from "./app/category/category.route.js";

const app = express();
dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);

export default app;
