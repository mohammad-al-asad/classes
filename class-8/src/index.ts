import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRouter from "./app/models/course/course.routes.js";

dotenv.config();
const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/course", courseRouter);

export default app;
