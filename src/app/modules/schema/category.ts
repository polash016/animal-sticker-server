import mongoose, { Schema } from "mongoose";
import { ICategory } from "../interface/category";

const categorySchema = new Schema<ICategory>({
  id: { type: String },
  name: { type: String, required: true },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
