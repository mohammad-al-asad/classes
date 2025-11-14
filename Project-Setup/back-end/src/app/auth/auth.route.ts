import expres from "express";
import {
  getAuth,
  loginUser,
  logoutUser,
  signupUser,
} from "./auth.controller.js";
import { authMiddleware } from "../../lib/authMiddleware.js";
const AuthRouter = expres.Router();

AuthRouter.post("/login", loginUser);
AuthRouter.post("/logout", logoutUser);
AuthRouter.post("/signup", signupUser);
AuthRouter.get("/get-auth", authMiddleware, getAuth);

export default AuthRouter;
