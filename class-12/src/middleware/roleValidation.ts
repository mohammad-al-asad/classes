import type { Request, Response, NextFunction } from "express";

export function roleValidation(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role !== role) {
      return res.status(403).json({
        success: false,
        message: "You do not have access for this resource",
      });
    }
    next();
  };
}
