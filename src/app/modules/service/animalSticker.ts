import { IFile } from "../../../types";
import { fileUploader } from "../../helpers/fileUploader";
import { IAnimalSticker } from "../interface/animalSticker";
import AnimalSticker from "../schema/animalSticker";

const getAllAnimal = async (query: Record<string, any>) => {
  const result = await AnimalSticker.find();

  return result;
};

const createAnimalSticker = async (req: Record<string, any>) => {
  const file = req?.file;
  const data = req.body;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);

    data.imgUrl = uploadToCloudinary?.secure_url;
  }

  const result = await AnimalSticker.create(data);

  return result;
};

export const animalStickerService = {
  createAnimalSticker,
  getAllAnimal,
};
