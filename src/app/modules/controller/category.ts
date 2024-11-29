import { NextFunction, Request, Response } from "express";
import { categoryService } from "../service/category";

const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await categoryService.getAllCategory(req.query);

    console.log(result);

    res.json({
      success: true,
      message: "Category data fetched successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const result = await categoryService.createCategory(data);

    res.json({
      success: true,
      message: "Category data create successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const categoryController = {
  createCategory,
  getAllCategory,
};
