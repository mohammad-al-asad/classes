import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./app/user/user.route.js";
import destinationRouter from "./app/destination/destination.route.js";
import authRouter from "./app/auth/auth.route.js";
import tourRouter from "./app/tour/tour.route.js";
import activityRouter from "./app/activity/activity.route.js";
import bookingRouter from "./app/booking/booking.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/destination", destinationRouter);
app.use("/api/tour", tourRouter);
app.use("/api/activity", activityRouter);
app.use("/api/booking", bookingRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
