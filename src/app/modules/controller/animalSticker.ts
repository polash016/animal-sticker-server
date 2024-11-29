import { NextFunction, Request, Response } from "express";
import { animalStickerService } from "../service/animalSticker";

const getAllAnimalSticker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await animalStickerService.getAllAnimal(req.query);

    console.log(result);

    res.json({
      success: true,
      message: "Animal data fetched successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const createAnimalSticker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body = JSON.parse(req.body.data);

    const result = await animalStickerService.createAnimalSticker(req);

    console.log(result);

    res.json({
      success: true,
      message: "Animal data created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const animalStickerController = {
  createAnimalSticker,
  getAllAnimalSticker,
};
