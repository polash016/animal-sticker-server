import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    success: false,
    message: err.message || "Something Went Wrong", //err?.name ||
    error: err,
  });
};

export default globalErrorHandler;
