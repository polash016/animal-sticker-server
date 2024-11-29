import mongoose, { Schema } from "mongoose";
import { IAnimalSticker } from "../interface/animalSticker";

const animalStickerSchema = new Schema<IAnimalSticker>({
  id: { type: String },
  name: { type: String, required: true },
  imgUrl: { type: String },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const AnimalSticker = mongoose.model<IAnimalSticker>(
  "AnimalSticker",
  animalStickerSchema
);

export default AnimalSticker;
