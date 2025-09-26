import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRouter from "./app/models/course/course.routes.js";
import catagoryRouter from "./app/models/catagory/catagory.routes.js";
import mentorRouter from "./app/models/mentor/mentor.routes.js";
import studentRouter from "./app/models/student/student.routes.js";
import adminRouter from "./app/models/admin/admin.routes.js";

dotenv.config();
const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/course", courseRouter);
app.use("/api/catagory", catagoryRouter);
app.use("/api/mentor", mentorRouter);
app.use("/api/student", studentRouter);
app.use("/api/admin", adminRouter);

export default app;
