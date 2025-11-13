import express from "express";
import dotenv from "dotenv";
import ServiceRouter from "./app/service/service.route.js";
import UserRouter from "./app/user/user.route.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", UserRouter);
app.use("/api/service", ServiceRouter);

export default app;
