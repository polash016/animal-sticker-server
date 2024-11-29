import { ICategory } from "../interface/category";
import Category from "../schema/category";

const getAllCategory = async (query: Record<string, any>) => {
  const result = await Category.find();

  return result;
};

const createCategory = async (data: ICategory) => {
  const result = await Category.create(data);

  console.log(result);

  return result;
};

export const categoryService = {
  createCategory,
  getAllCategory,
};
