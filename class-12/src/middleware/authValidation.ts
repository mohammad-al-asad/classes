import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export function authValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer ")) {
    const authToken = authorization.split(" ")[1];
    if (!authToken) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    } else {
      const user = jwt.verify(authToken, process.env.JWT_SECRET || "");
      if (user){
        req.user = user
        next();
      }else{
        return res.status(403).json({
        success: false,
        message: "Unauthorized Token",
      });
      }
    }
  }
}
