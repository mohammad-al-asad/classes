import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend the Express Request interface to include `user`
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

    try {
      const user = jwt.verify(authToken!, process.env.JWT_SECRET || "");
      req.user = user;
      next(); 
    } catch (err) {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      message: "Unauthorized access - token missing or malformed",
    });
  }
}
