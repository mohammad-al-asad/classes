import express from "express";
import dotenv from "dotenv";
import ServiceRouter from "./app/service/service.route.js";
import cors from "cors";
import AuthRouter from "./app/auth/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
dotenv.config();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", AuthRouter);
app.use("/api/service", ServiceRouter);

export default app;
