import { IFile } from "../../../types";
import { fileUploader } from "../../helpers/fileUploader";
import { IAnimalSticker } from "../interface/animalSticker";
import AnimalSticker from "../schema/animalSticker";
import Category from "../schema/category";

const getAllAnimal = async (query: Record<string, any>) => {
  const { category } = query;

  let filter: Record<string, any> = {};

  if (category) {
    // Check if category is an ID or a name
    const categoryDoc = await Category.findOne({
      $or: [{ _id: category }, { name: category }],
    });

    if (categoryDoc) {
      filter.categoryId = categoryDoc._id; // Filter based on the resolved category ID
    } else {
      return []; // No matching category found
    }
  }

  const result = await AnimalSticker.find(filter).populate("categoryId");

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
