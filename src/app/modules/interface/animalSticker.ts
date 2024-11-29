import mongoose from "mongoose";

export interface IAnimalSticker {
  id: string;
  name: string;
  imgUrl?: string;
  categoryId: mongoose.Schema.Types.ObjectId;
}
